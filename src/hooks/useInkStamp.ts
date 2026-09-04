import { useCallback, useState, type MouseEvent } from "react";

export interface InkRipple {
  id: number;
  x: number;
  y: number;
  size: number;
}

let rippleIdCounter = 0;

/**
 * Gives a button/link a small "ink stamp" interaction: a quick press
 * animation plus a circular ripple that spreads out from wherever the
 * pointer actually landed, like a rubber stamp hitting paper.
 *
 * Usage: spread `onClick={trigger}` onto the element, add `stampClassName`
 * to its className, then render `<InkRipples ripples={ripples} onDone={removeRipple} />`
 * as its first child (the element needs position: relative; overflow: hidden,
 * which .btn already has).
 */
export function useInkStamp() {
  const [isStamped, setIsStamped] = useState(false);
  const [ripples, setRipples] = useState<InkRipple[]>([]);

  const trigger = useCallback((event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.8;

    // Keyboard/assistive-tech activations don't carry real coordinates
    // (clientX/Y come back as 0), so those default to the button's center
    // instead of jumping to the top-left corner.
    const hasPointerPosition = event.clientX !== 0 || event.clientY !== 0;
    const x = hasPointerPosition ? event.clientX - rect.left : rect.width / 2;
    const y = hasPointerPosition ? event.clientY - rect.top : rect.height / 2;

    rippleIdCounter += 1;
    const id = rippleIdCounter;

    setRipples((current) => [...current, { id, x: x - size / 2, y: y - size / 2, size }]);
    setIsStamped(false);
    requestAnimationFrame(() => setIsStamped(true));
  }, []);

  const removeRipple = useCallback((id: number) => {
    setRipples((current) => current.filter((ripple) => ripple.id !== id));
  }, []);

  return {
    stampClassName: isStamped ? "is-stamped" : "",
    onAnimationEnd: () => setIsStamped(false),
    ripples,
    trigger,
    removeRipple,
  };
}
