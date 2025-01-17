import { useEffect, useState } from 'react';

const NeonCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const scaleFactor = 1.6; // Максимальный масштаб из анимации

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Корректируем позицию курсора с учетом масштаба
  const adjustedX = cursorPosition.x - (40 * (scaleFactor - 1)) / 2; // 40 - ширина курсора
  const adjustedY = cursorPosition.y - (40 * (scaleFactor - 1)) / 2;

  return (
    <div
      className='cursor'
      style={{
        left: `${adjustedX}px`,
        top: `${adjustedY}px`,
        transform: `translate(-50%, -50%) scale(${scaleFactor})`,
        position: 'fixed'
      }}
    />
  );
};

export default NeonCursor;
