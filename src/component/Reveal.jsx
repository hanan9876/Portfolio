import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them into view as they enter the viewport.
 *
 * Props:
 *  - variant: "up" (default) | "left" | "right" | "scale"
 *  - delay:   stagger step 0-5 (maps to .delay-* utility classes)
 *  - as:      element/tag to render (default "div")
 *  - once:    only animate the first time it enters (default true)
 */
export const Reveal = ({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
      ? "reveal-right"
      : variant === "scale"
      ? "reveal-scale"
      : "";

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${delayClass} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
};
