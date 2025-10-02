import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

/**
 * ParallaxScreens — responsive, mobile-first.
 * - Mobile: single upward-scrolling column (tap to pause).
 * - >= sm: three columns, outer ↓, middle ↑ (hover/tap to pause).
 */
export default function ParallaxScreens({
  title = "Explore the app at a glance",
  caption = "Outer columns scroll down; the middle scrolls up. Hover or tap to pause.",
  basePath = "/images/screens",
  count = 20,
  ext = "jpg",
  // shorter by default on mobile; scales up with breakpoints
  heightClass = "h-[28rem] sm:h-[36rem] md:h-[44rem] lg:h-[52rem]",
  speed = 180,
  containerClass = "p-0",
}) {
  const srcOf = (n) => `${basePath}/${n}.${ext}`;
  const pool = useMemo(
    () => Array.from({ length: count }, (_, i) => srcOf(i + 1)),
    [basePath, count, ext]
  );

  const [paused, setPaused] = useState(false);
  const [fadePct, setFadePct] = useState(0.1); // for top/bottom mask

  // Wider fade on mobile so the entry/exit feels softer in a short viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setFadePct(mq.matches ? 0.18 : 0.1);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // Build mask gradients from fadePct
  const mask = `linear-gradient(to bottom, transparent 0%, black ${fadePct *
    100}%, black ${100 - fadePct * 100}%, transparent 100%)`;

  return (
    <section className="section-pad">
      <div className="container-xy">
        {/* Gradient card */}
        <div
          className={`relative rounded-3xl sm:rounded-4xl shadow-card overflow-hidden text-white ${containerClass}`}
          style={{
            background:
              "linear-gradient(135deg, rgba(109,40,217,1) 0%, rgba(217,70,239,0.98) 45%, rgba(99,102,241,0.95) 100%)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="px-5 pt-5 sm:px-8">
            <p className="uppercase tracking-widest text-[10px] sm:text-xs text-white/80">
              Quick preview
            </p>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              {title}
            </h2>
            <p className="text-white/85 mt-2 text-sm sm:text-base">{caption}</p>
          </div>

          <div className={`relative ${heightClass}`}>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 h-full overflow-hidden px-2 sm:px-0"
              style={{ WebkitMaskImage: mask, maskImage: mask }}
            >
              {/* Mobile: show only middle. >= sm: show all three */}
              <div className="hidden sm:block">
                <Column pool={pool} dir="down" baseSpeed={speed * 0.95} paused={paused} />
              </div>

              <div className="block">
                <Column pool={pool} dir="up" baseSpeed={speed * 1.05} paused={paused} />
              </div>

              <div className="hidden sm:block">
                <Column pool={pool} dir="down" baseSpeed={speed * 1.0} paused={paused} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/** One column: DOM-only recycling (no React state updates while animating) */
function Column({ pool, dir = "down", baseSpeed = 180, paused }) {
  const contRef = useRef(null);
  const stackRef = useRef(null);
  const firstCardRef = useRef(null);

  const stepRef = useRef(320); // measured (card height + row gap)
  const offsetRef = useRef(0);
  const rafRef = useRef(null);

  const initialCount = 10; // topped up as needed
  const listRef = useRef([]);

  const randNext = (exclude) => {
    if (pool.length <= 1) return pool[0];
    let s = exclude;
    while (s === exclude) s = pool[(Math.random() * pool.length) | 0];
    return s;
  };

  // Create initial cards
  useLayoutEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    stack.innerHTML = "";
    listRef.current = [];

    for (let i = 0; i < initialCount; i++) {
      const src = pool[(Math.random() * pool.length) | 0];
      const card = makeCard(src);
      if (i === 0) firstCardRef.current = card;
      stack.appendChild(card);
      listRef.current.push(card);
    }
  }, [pool]);

  // Measure row gap and fill to viewport height
  const measureAndFill = () => {
    const stack = stackRef.current;
    const cont = contRef.current;
    if (!stack || !cont) return;

    const cardH = firstCardRef.current?.offsetHeight || 0;
    // read computed row gap so step stays correct across breakpoints
    const gap = parseFloat(getComputedStyle(stack).rowGap || "16");
    const step = (cardH || stepRef.current - gap) + gap;
    stepRef.current = step;

    const need = step ? Math.max(6, Math.ceil(cont.offsetHeight / step) + 6) : initialCount;
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
  }, []);

  // RAF loop
  useEffect(() => {
    let last = performance.now();
    const sign = dir === "up" ? -1 : 1;
    const variance = 0.9 + Math.random() * 0.2; // 0.9..1.1 so columns desync
    const v = baseSpeed * variance * sign;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        offsetRef.current += v * dt;

        const step = stepRef.current;
        const stack = stackRef.current;

        if (offsetRef.current > 0) {
          while (offsetRef.current > 0) {
            offsetRef.current -= step;
            const lastCard = listRef.current.pop();
            const firstCard = listRef.current[0];
            const nextSrc = randNext(firstCard?.dataset.src);
            setCardSrc(lastCard, nextSrc);
            stack.insertBefore(lastCard, stack.firstChild);
            listRef.current.unshift(lastCard);
          }
        } else if (offsetRef.current < -step) {
          while (offsetRef.current < -step) {
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
        // freeze time base while paused to avoid a jump
        last = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, baseSpeed, dir]);

  return (
    <div ref={contRef} className="relative h-full overflow-hidden">
      <div
        ref={stackRef}
        className="flex flex-col items-center gap-3 sm:gap-4 pb-4 will-change-transform"
      />
    </div>
  );
}

/* -------------------------- DOM card helpers --------------------------- */

function makeCard(src) {
  const wrap = document.createElement("div");
  // Wider on mobile (percentage of viewport), fixed on larger screens
  wrap.className = "w-[68vw] xs:w-[64vw] sm:w-[240px] md:w-[280px] lg:w-[300px]";
  wrap.dataset.src = src;

  const shell = document.createElement("div");
  shell.className =
    "relative aspect-[9/18] rounded-[24px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(2,6,23,0.25)] ring-1 ring-white/15";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.decoding = "async";
  img.loading = "eager"; // keep eager to avoid visible swaps in the loop
  img.className = "absolute inset-0 w-full h-full object-cover";

  shell.appendChild(img);
  wrap.appendChild(shell);
  return wrap;
}

function setCardSrc(cardEl, src) {
  if (!cardEl) return;
  const img = cardEl.querySelector("img");
  if (img && img.src !== src) {
    const pre = new Image();
    pre.src = src;
    pre.decode?.().catch(() => {});
    img.src = src;
  }
  cardEl.dataset.src = src;
}
