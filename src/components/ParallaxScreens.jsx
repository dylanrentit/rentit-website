import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

/**
 * ParallaxScreens — true infinite columns, no re-render while animating.
 * Outer columns scroll DOWN, middle scrolls UP. Hover anywhere to pause.
 *
 * Props:
 *  - title, caption: strings
 *  - basePath: '/images/screens'
 *  - count: 20   -> assumes 1..20 filenames
 *  - ext: 'jpg' | 'png' | 'webp'
 *  - heightClass: Tailwind height for the scroller
 *  - speed: base pixels/second (columns get slight variance)
 *  - containerClass: extra classes for outer gradient card (defaults p-0)
 */
export default function ParallaxScreens({
  title = "Explore the app at a glance",
  caption = "Outer columns scroll down; the middle scrolls up. Hover to pause.",
  basePath = "/images/screens",
  count = 20,
  ext = "jpg",
  heightClass = "h-[36rem] md:h-[44rem] lg:h-[52rem]",
  speed = 180,
  containerClass = "p-0",
}) {
  const srcOf = (n) => `${basePath}/${n}.${ext}`;
  const pool = useMemo(() => Array.from({ length: count }, (_, i) => srcOf(i + 1)), [basePath, count, ext]);

  const [paused, setPaused] = useState(false);

  return (
    <section className="section-pad">
      <div className="container-xy">
        {/* Purple gradient card + white text */}
        <div
          className={`relative rounded-4xl shadow-card overflow-hidden text-white ${containerClass}`}
          style={{
            background:
              "linear-gradient(135deg, rgba(109,40,217,1) 0%, rgba(217,70,239,0.98) 45%, rgba(99,102,241,0.95) 100%)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="px-6 pt-6 md:px-8">
            <p className="uppercase tracking-widest text-xs text-white/80">Quick preview</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
            <p className="text-white/85 mt-2">{caption}</p>
          </div>

          <div className={`relative ${heightClass}`}>
            <div
              className="grid grid-cols-3 gap-4 md:gap-8 h-full overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              {/* left ↓ , middle ↑ , right ↓ */}
              <Column pool={pool} dir="down" baseSpeed={speed * 0.95} paused={paused} />
              <Column pool={pool} dir="up"   baseSpeed={speed * 1.05} paused={paused} />
              <Column pool={pool} dir="down" baseSpeed={speed * 1.00} paused={paused} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** One column: DOM-only recycling (no React state updates while animating) */
function Column({ pool, dir = "down", baseSpeed = 180, paused }) {
  const contRef  = useRef(null);
  const stackRef = useRef(null);
  const firstCardRef = useRef(null);

  const GAP_PX = 16; // matches gap-4
  const stepRef = useRef(320); // card height + gap
  const offsetRef = useRef(0); // current translateY
  const rafRef = useRef(null);

  // Build N cards once (no re-render after mount)
  const initialCount = 12; // will be topped up to fill viewport
  const listRef = useRef([]);

  // util to pick a random src different from the provided one
  const randNext = (exclude) => {
    if (pool.length <= 1) return pool[0];
    let s = exclude;
    while (s === exclude) s = pool[(Math.random() * pool.length) | 0];
    return s;
  };

  // create initial DOM children
  useLayoutEffect(() => {
    if (!stackRef.current) return;
    const stack = stackRef.current;

    // Clear in case of HMR
    stack.innerHTML = "";
    listRef.current = [];

    for (let i = 0; i < initialCount; i++) {
      const src = pool[(Math.random() * pool.length) | 0];
      const card = makeCard(src);
      if (i === 0) firstCardRef.current = card;
      stack.appendChild(card);
      listRef.current.push(card);
    }
  }, []); // mount

  // measure step and ensure we have enough cards for the viewport
  const measureAndFill = () => {
    const cardH = firstCardRef.current?.offsetHeight || 0;
    const step = cardH ? cardH + GAP_PX : stepRef.current;
    stepRef.current = step;

    const contH = contRef.current?.offsetHeight || 0;
    const need = step ? Math.max(8, Math.ceil(contH / step) + 5) : initialCount;

    // add extra cards if needed (append random)
    const stack = stackRef.current;
    while (listRef.current.length < need) {
      const last = listRef.current[listRef.current.length - 1];
      const nextSrc = randNext(last?.dataset.src);
      const card = makeCard(nextSrc);
      stack.appendChild(card);
      listRef.current.push(card);
      if (!firstCardRef.current) firstCardRef.current = card;
    }
  };

  useLayoutEffect(() => {
    measureAndFill();
    const ro = new ResizeObserver(measureAndFill);
    if (contRef.current) ro.observe(contRef.current);
    if (firstCardRef.current) ro.observe(firstCardRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rAF loop — mutate transform + recycle DOM nodes without React state
  useEffect(() => {
    let last = performance.now();
    const sign = dir === "up" ? -1 : 1;

    // small random variance per column so they don't look synced
    const variance = 0.9 + Math.random() * 0.2; // 0.9..1.1
    const v = baseSpeed * variance * sign;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        offsetRef.current += v * dt;

        const step = stepRef.current;
        const stack = stackRef.current;

        // recycle seamlessly one card at a time
        if (offsetRef.current > 0) {
          while (offsetRef.current > 0) {
            // moved down at least one step — bring last card to front
            offsetRef.current -= step;
            const lastCard = listRef.current.pop();
            const firstCard = listRef.current[0];
            const nextSrc = randNext(firstCard?.dataset.src);
            // update src of the card we move
            setCardSrc(lastCard, nextSrc);
            stack.insertBefore(lastCard, stack.firstChild);
            listRef.current.unshift(lastCard);
          }
        } else if (offsetRef.current < -step) {
          while (offsetRef.current < -step) {
            // moved up at least one step — send first card to end
            offsetRef.current += step;
            const first = listRef.current.shift();
            const last = listRef.current[listRef.current.length - 1];
            const nextSrc = randNext(last?.dataset.src);
            setCardSrc(first, nextSrc);
            stack.appendChild(first);
            listRef.current.push(first);
          }
        }

        stack.style.transform = `translateY(${offsetRef.current}px)`;
      } else {
        // freeze time base while paused to avoid jumps on resume
        last = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, baseSpeed, dir]);

  return (
    <div ref={contRef} className="relative h-full overflow-hidden">
      <div ref={stackRef} className="flex flex-col items-center gap-4 pb-4 will-change-transform" />
    </div>
  );
}

/* ---- helpers to build/update a card (pure DOM; no React state) ---- */

function makeCard(src) {
  const wrap = document.createElement("div");
  wrap.className = "w-[200px] sm:w-[260px] md:w-[300px]";
  wrap.dataset.src = src;

  const shell = document.createElement("div");
  shell.className =
    "relative aspect-[9/18] rounded-[28px] overflow-hidden border border-white/20 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.decoding = "async";
  img.loading = "eager"; // avoid lazy flashes
  img.className = "absolute inset-0 w-full h-full object-cover";

  shell.appendChild(img);
  wrap.appendChild(shell);
  return wrap;
}

function setCardSrc(cardEl, src) {
  if (!cardEl) return;
  const img = cardEl.querySelector("img");
  if (img && img.src !== src) {
    // quick preload to avoid flash
    const pre = new Image();
    pre.src = src;
    pre.decode?.().catch(() => {});
    img.src = src;
  }
  cardEl.dataset.src = src;
}
