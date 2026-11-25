import { useEffect, useRef } from 'react';

import './CursorFollower.scss';

const LERP_FACTOR = 0.14;
const SETTLE_THRESHOLD = 0.1;
const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"]';
const OFFSCREEN_POSITION = -100;

function CursorFollower() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!root || !dot || !ring) return undefined;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointer.matches || reducedMotion.matches) return undefined;

    let mouseX = OFFSCREEN_POSITION;
    let mouseY = OFFSCREEN_POSITION;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId = 0;

    const handleMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      root.classList.add('cursor-follower--visible');
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));

      root.classList.toggle('cursor-follower--active', isInteractive);
    };

    const handleLeave = () => {
      root.classList.remove('cursor-follower--visible');
    };

    const animate = () => {
      const deltaX = mouseX - ringX;
      const deltaY = mouseY - ringY;

      if (Math.abs(deltaX) > SETTLE_THRESHOLD || Math.abs(deltaY) > SETTLE_THRESHOLD) {
        ringX += deltaX * LERP_FACTOR;
        ringY += deltaY * LERP_FACTOR;

        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    document.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerover', handleOver, { passive: true });
    document.addEventListener('pointerleave', handleLeave);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver);
      document.removeEventListener('pointerleave', handleLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div aria-hidden='true' className='cursor-follower' ref={rootRef}>
      <div className='cursor-follower__ring' ref={ringRef} />
      <div className='cursor-follower__dot' ref={dotRef} />
    </div>
  );
}

export default CursorFollower;
