"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  items: Post[];
  intervalMs?: number; // default 2000
};

export default function Carousel({ items, intervalMs = 2000 }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const paused = isHovering || isUserInteracting;

  const scrollStep = 320; // ≈ one item width
  const resumeDelayMs = 1200;

  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const pauseFromUser = useCallback(() => {
    setIsUserInteracting(true);
    clearResumeTimeout();
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
      resumeTimeoutRef.current = null;
    }, resumeDelayMs);
  }, []);

  const scrollByStep = useCallback((dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = dir === "next" ? scrollStep : -scrollStep;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  // Auto scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || items.length <= 1) return;

    const id = window.setInterval(() => {
      if (paused) return;

      const maxLeft = el.scrollWidth - el.clientWidth;
      const atEnd = el.scrollLeft >= maxLeft - 2;

      if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: scrollStep, behavior: "smooth" });
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [paused, intervalMs, items.length]);

  // Pause on user scroll / touch / drag
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = () => pauseFromUser();
    const onScroll = () => pauseFromUser();
    const onPointerDown = () => pauseFromUser();
    const onTouchStart = () => pauseFromUser();

    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onPointerDown, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("touchstart", onTouchStart);
    };
  }, [pauseFromUser]);

  useEffect(() => () => clearResumeTimeout(), []);

  return (
    <div
      className="border border-neutral-200 bg-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-stretch">
        {/* Left arrow box */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByStep("prev")}
          className="flex w-10 shrink-0 items-center justify-center border-r border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Items row */}
        <div
          ref={scrollerRef}
          className="
            flex flex-1 gap-6 overflow-x-auto px-4 py-3
            overscroll-x-contain
            scroll-smooth
            snap-x snap-mandatory
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="
                flex min-w-[260px] items-start gap-3 px-2
                snap-start
              "
            >
              {/* Small square image */}
              <div className="relative h-12 w-12 shrink-0 overflow-hidden bg-neutral-200">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="50px"
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <p className="line-clamp-2 text-sm font-semibold leading-snug text-neutral-900 hover:underline">
                {p.title}
              </p>
            </Link>
          ))}
        </div>

        {/* Right arrow box */}
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByStep("next")}
          className="flex w-10 shrink-0 items-center justify-center border-l border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
