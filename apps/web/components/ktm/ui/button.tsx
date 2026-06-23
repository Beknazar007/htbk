"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "whatsapp" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-ktm-red-gradient text-white shadow-lg shadow-ktm-red/25 hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/30",
  ghost: "bg-ktm-gray text-ktm-navy hover:bg-gray-200",
};

export function KtmButton({
  href,
  external,
  variant = "primary",
  className,
  children,
  onClick,
}: {
  href?: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const base = cn(
    "inline-flex min-h-[48px] min-w-0 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-transform duration-200",
    variants[variant],
    className
  );

  if (href) {
    const isTelOrMail = href.startsWith("tel:") || href.startsWith("mailto:");
    if (external && !isTelOrMail) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base} onClick={onClick}>
          {children}
        </a>
      );
    }
    if (isTelOrMail) {
      return (
        <a href={href} className={base} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={base} onClick={onClick}>
      {children}
    </button>
  );
}
