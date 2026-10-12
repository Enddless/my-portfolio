import { useEffect, useRef, type CSSProperties } from 'react';

import angularIcon from '@shared/assets/skills/angular.svg';
import cssIcon from '@shared/assets/skills/css.svg';
import figmaIcon from '@shared/assets/skills/figma.svg';
import fsdIcon from '@shared/assets/skills/fsd.svg';
import gitIcon from '@shared/assets/skills/git.svg';
import htmlIcon from '@shared/assets/skills/html.svg';
import javascriptIcon from '@shared/assets/skills/javascript.svg';
import materialUiIcon from '@shared/assets/skills/material-ui.svg';
import nextIcon from '@shared/assets/skills/next.svg';
import radixUiIcon from '@shared/assets/skills/radix-ui.svg';
import reactIcon from '@shared/assets/skills/react.svg';
import reduxIcon from '@shared/assets/skills/redux.svg';
import restApiIcon from '@shared/assets/skills/rest-api.svg';
import sassIcon from '@shared/assets/skills/sass.svg';
import typescriptIcon from '@shared/assets/skills/typescript.svg';
import wordpressIcon from '@shared/assets/skills/wordpress.svg';

import { Title } from '@/shared/ui';

import './Skills.scss';

interface Skill {
  name: string;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', color: '#E34F26', icon: htmlIcon },
  { name: 'Angular', color: '#DD0031', icon: angularIcon },
  { name: 'JavaScript', color: '#F7DF1E', icon: javascriptIcon },
  { name: 'SCSS', color: '#CC6699', icon: sassIcon },
  { name: 'CSS', color: '#1572B6', icon: cssIcon },
  { name: 'FSD', color: '#00A88E', icon: fsdIcon },
  { name: 'React', color: '#61DAFB', icon: reactIcon },
  { name: 'Next.js', color: '#9B9B9B', icon: nextIcon },
  { name: 'Figma', color: '#F24E1E', icon: figmaIcon },
  { name: 'WordPress', color: '#21759B', icon: wordpressIcon },
  { name: 'Git', color: '#F05032', icon: gitIcon },
  { name: 'TypeScript', color: '#3178C6', icon: typescriptIcon },
  { name: 'REST API', color: '#6BA539', icon: restApiIcon },
  { name: 'Material UI', color: '#757575', icon: materialUiIcon },
  { name: 'Radix UI', color: '#161618', icon: radixUiIcon },
  { name: 'Redux', color: '#764ABC', icon: reduxIcon }
];

const STAGGER = 70;

const Skills = () => {
  const refGrid = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const grid = refGrid.current;

    if (!grid) return undefined;

    grid.classList.add('skills__grid--animated');

    const cards = [...grid.querySelectorAll<HTMLElement>('.skills__card')];
    const total = cards.length;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = cards.indexOf(entry.target as HTMLElement);
          const delay = (total - index) * STAGGER;

          (entry.target as HTMLElement).style.transitionDelay =
            `${delay}ms, ${delay}ms, 0s, 0s`;
          entry.target.classList.add('skills__card--visible');

          const card = entry.target as HTMLElement;
          window.setTimeout(() => {
            card.style.transitionDelay = '';
          }, delay + 1000);

          observer.unobserve(card);
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className='section skills' id='Навыки'>
      <div className='skills__inner container'>
        <div className='skills__title'>
          <Title text='Навыки' />
        </div>

        <ul className='skills__grid' ref={refGrid}>
          {skills.map(({ name, color, icon }) => (
            <li
              className='skills__card'
              key={name}
              style={{ '--accent-color': color } as CSSProperties}>
              <span className='skills__icon'>
                <img alt='' height='38' loading='lazy' src={icon} width='38' />
              </span>
              <span className='skills__name'>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

