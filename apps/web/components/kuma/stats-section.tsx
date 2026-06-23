"use client";

import { useEffect, useRef, useState } from "react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";

const STATS: Array<{
  value: number;
  suffix: string;
  labelKey: string;
  display?: string;
}> = [
  { value: 1000, suffix: "+", labelKey: "statSold" },
  { value: 500, suffix: "+", labelKey: "statClients" },
  { value: 10, suffix: "+", labelKey: "statYears" },
  { value: 0, suffix: "", labelKey: "statSupport", display: "24/7" },
];

function AnimatedCounter({
  value,
  suffix,
  display,
  active,
}: {
  value: number;
  suffix: string;
  display?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || display) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, value, display]);

  const sizeClass =
    "text-3xl font-bold tabular-nums text-brand-accent xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl 3xl:text-7xl 4xl:text-8xl";

  if (display) {
    return <span className={sizeClass}>{display}</span>;
  }

  return (
    <span className={sizeClass}>
      {count}
      {suffix}
    </span>
  );
}

export function KumaStats() {
  const { t } = useKuma();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="kuma-section bg-white text-brand-navy">
      <div className="kuma-container">
        <ScrollReveal>
          <div
            ref={ref}
            className="grid grid-cols-2 gap-6 xs:gap-8 md:grid-cols-4 md:gap-6 lg:gap-8 3xl:gap-12 4xl:gap-16"
          >
            {STATS.map(({ value, suffix, labelKey, display }) => (
              <div key={labelKey} className="text-center">
                <AnimatedCounter
                  value={value}
                  suffix={suffix}
                  display={display}
                  active={active}
                />
                <p className="mt-2 text-xs font-medium text-brand-navy/70 xs:mt-3 xs:text-sm sm:text-base 3xl:text-lg 4xl:text-xl">
                  {t(labelKey)}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
