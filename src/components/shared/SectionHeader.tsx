"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {badge && (
        <AnimatedSection delay={0}>
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
              light
                ? "bg-white/20 text-white border border-white/30"
                : "bg-teal/10 text-teal border border-teal/20"
            }`}
          >
            {badge}
          </span>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.1}>
        <h2
          className={`heading-lg mb-4 ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {titleHighlight ? (
            <>
              {title}{" "}
              <span className={light ? "gradient-text" : "gradient-text"}>
                {titleHighlight}
              </span>
            </>
          ) : (
            title
          )}
        </h2>
      </AnimatedSection>

      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p
            className={`text-lg max-w-2xl leading-relaxed ${
              centered ? "mx-auto" : ""
            } ${light ? "text-white/80" : "text-navy/60"}`}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
