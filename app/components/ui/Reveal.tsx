"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  /** Render as a different element (default: div). */
  as?: ElementType;
  /** Apply a staggered fade-up to direct children. */
  stagger?: boolean;
  className?: string;
  id?: string;
};

/**
 * Wraps content so it fades/slides in the first time it scrolls into view.
 * Shared by every redesigned section so the motion is consistent.
 */
export function Reveal({
  children,
  as: Tag = "div",
  stagger = false,
  className = "",
  id,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${stagger ? "reveal-stagger" : ""} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
