import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function useGsapOptions({ refs, dataLoaded, options, isOpen }) {
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isOpen && dataLoaded && options) {
      refs.current.forEach((el) => {
        if (!isMobile) {
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: '120'
            },
            {
              autoAlpha: 1,
              y: '0',
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: '-=250',
                toggleActions: 'play none none reverse',
                scrub: 0.2
              }
            }
          );
        } else {
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: '120'
            },
            {
              autoAlpha: 1,
              y: '0',
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: '-=300',
                toggleActions: 'play none none reverse',
                scrub: 0.2
              }
            }
          );
        }
      });
    }
    // Обновляем триггеры после изменения состояния
    ScrollTrigger.refresh();
  }, [refs, dataLoaded, options, isOpen, isMobile]);
}

export default useGsapOptions;
