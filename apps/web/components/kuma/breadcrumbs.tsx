"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-gray-500", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-300">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-kuma-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-kuma-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
