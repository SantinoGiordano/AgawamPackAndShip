"use client";

import { useEffect, useRef, useState } from "react";

export default function TrackTitle() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        className={`text-center text-5xl font-bold transition-all duration-1000 ease-out
        ${visible ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`}
      >
        Track Your Packages
      </div>
    </div>
  );
}