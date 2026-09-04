import type { InkRipple } from "../hooks/useInkStamp";

interface InkRipplesProps {
  ripples: InkRipple[];
  onDone: (id: number) => void;
}

export default function InkRipples({ ripples, onDone }: InkRipplesProps) {
  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="btn-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          onAnimationEnd={() => onDone(ripple.id)}
        />
      ))}
    </>
  );
}
