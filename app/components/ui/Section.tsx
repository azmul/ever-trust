import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  /** Small uppercase eyebrow label above the heading. */
  eyebrow?: string;
  heading: string;
  description?: string;
  /** Center the heading block (default: left-aligned). */
  centered?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Standard section wrapper: a revealed heading block + body content.
 * Replaces the duplicated `h2 text-3xl lg:text-4xl` markup across sections.
 */
export function Section({
  id,
  eyebrow,
  heading,
  description,
  centered = false,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`flex flex-col gap-10 ${className}`}>
      <Reveal
        className={`flex flex-col gap-4 ${
          centered ? "items-center text-center" : ""
        }`}
      >
        {eyebrow && (
          <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
        )}
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.015em]">
          {heading}
        </h2>
        {description && (
          <p
            className={`text-gray-400 text-lg ${
              centered ? "max-w-[720px] mx-auto" : "max-w-[720px]"
            }`}
          >
            {description}
          </p>
        )}
      </Reveal>
      {children}
    </section>
  );
}
