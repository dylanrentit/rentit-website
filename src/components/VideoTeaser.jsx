import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoTeaser() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [canHover, setCanHover] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // detect hover capability (touch devices don't hover)
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
    const onChange = (e) => setCanHover(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // required for autoplay
    v.loop = true;
    v.playsInline = true;
    v.autoplay = true;
    v.play().catch(() => {}); // ignore autoplay promise rejections
  }, []);

  const unmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setIsMuted(false);
    setShowHint(false);
  };
  const mute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setIsMuted(true);
  };
  const toggle = () => (isMuted ? unmute() : mute());

  return (
    <section id="teaser" className="section-pad pt-6">
      <div className="container-xy">
        {/* Outer container */}
        <div className="rounded-4xl border border-slate-200 shadow-card bg-gradient-to-br from-white via-slate-50 to-fuchsia-50/50 overflow-hidden">
          {/* Faux window chrome */}
          <div className="flex items-center gap-2 h-10 px-4 border-b border-slate-200/70 bg-white/70 backdrop-blur">
            <span className="h-3 w-3 rounded-full bg-red-400/90" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
            <span className="h-3 w-3 rounded-full bg-green-400/90" />
            <div className="mx-auto text-sm text-slate-500">Product preview</div>
          </div>

          {/* Video area */}
          <div
            className="relative group"
            onMouseEnter={() => canHover && unmute()}
            onMouseLeave={() => canHover && mute()}
            onClick={() => !canHover && toggle()}
          >
            <div className="relative w-full aspect-[16/9] bg-slate-100">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
                muted
                playsInline
                loop
                autoPlay
              >
                {/* Add a WebM source if you have it for better compression */}
                {/* <source src="/videos/teaser.webm" type="video/webm" /> */}
                <source src="/videos/teaser.mp4" type="video/mp4" />
                {/* Optional: poster="/images/video-poster.jpg" */}
              </video>
            </div>

            {/* Hover/Tap hint overlay */}
            <motion.div
              initial={{ opacity: 0.95, y: 8 }}
              animate={{ opacity: showHint ? 0.95 : 0, y: showHint ? 0 : -6 }}
              transition={{ duration: 0.35 }}
              className="absolute bottom-4 right-4 select-none"
            >
              <div className="flex items-center gap-2 rounded-full bg-black/60 text-white text-xs px-3 py-1.5 backdrop-blur">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M6 8H3v4h3l4 3V5L6 8z" />
                  <path d="M14.5 10a4.5 4.5 0 01-1.3 3.2l1.1 1.1A6 6 0 0016 10a6 6 0 00-1.7-4.2l-1.1 1.1A4.5 4.5 0 0114.5 10z"/>
                </svg>
                <span className="hidden sm:inline">{canHover ? "Hover for sound" : "Tap for sound"}</span>
                <span className="sm:hidden">{canHover ? "Hover" : "Tap"} for sound</span>
              </div>
            </motion.div>

            {/* Mute badge (shows current state) */}
            <div className="absolute top-3 right-3">
              <button
                type="button"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle();
                }}
                className="rounded-full bg-white/80 hover:bg-white text-slate-700 shadow px-2.5 py-1 text-xs border border-slate-200"
              >
                {isMuted ? "Muted" : "Sound on"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
