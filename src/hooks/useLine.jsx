import { useRef } from 'react';
import { useEffect } from 'react';

export const useLine = ({ section }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    if (!section.current) return;
    const currentSection = section.current;
    if (!lineRef.current) {
      const createLineToSection = (section) => {
        // eslint-disable-next-line no-undef
        const line = document.createElement('div');
        line.classList.add('line-to-section');
        console.log(section.current.offsetTop);
        const lineHeight = section.current.offsetTop;
        line.style.height = `${lineHeight}px`;
        currentSection.appendChild(line);
        lineRef.current = line;
      };

      createLineToSection(section);
    }

    return () => {
      if (lineRef.current) {
        currentSection.removeChild(lineRef.current); // Удаляем линию при размонтировании
        lineRef.current = null; // Сбрасываем ссылку
      }
    };
  }, [section]);
};
