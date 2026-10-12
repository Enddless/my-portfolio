import { Title } from '@shared/ui';

import type { IconName } from '@/shared/ui/Icon';
import Icon from '@/shared/ui/Icon';

import './Advantages.scss';

interface Advantage {
  icon: IconName;
  title: string;
  description: string;
}
const nbsp = '\u00A0';
const advantages: Advantage[] = [
  {
    icon: 'gauge',
    title: `3+${nbsp}года в веб-разработке`,
    description: `Коммерческие проекты для медицины, финтеха и${nbsp}e-commerce: от${nbsp}прототипа и${nbsp}вёрстки до${nbsp}продакшена`
  },
  {
    icon: 'code',
    title: 'React и TypeScript',
    description:
      `Компонентный подход, строгая типизация, состояние в Redux Toolkit${nbsp}—${nbsp}предсказуемый код без магии`
  },
  {
    icon: 'layers',
    title: 'Чистая архитектура',
    description:
      `Feature-Sliced Design (FSD): слои, публичные API слайсов и изолированные сегменты${nbsp}—${nbsp}проект легко масштабировать`
  },
  {
    icon: 'shield',
    title: 'Продукт и качество',
    description:
      `Адаптив от${nbsp}320${nbsp}px, доступность, Core Web Vitals и ленивая загрузка${nbsp}—${nbsp}с${nbsp}акцентом на производительность и стабильность`
  }
];

function Advantages() {
  return (
    <section className='section advantages' id='Почему я'>
      <div className='advantages__inner container'>
        <div className='advantages__title'>
          <Title text='Почему я' />
        </div>

        <ul className='advantages__list'>
          {advantages.map(({ icon, title, description }) => (
            <li className='advantages__card' key={title}>
              <span className='advantages__icon'>
                <Icon name={icon} />
              </span>

              <h3 className='advantages__card-title'>{title}</h3>
              <p className='advantages__card-description'>{description}</p>
            </li>
          ))}
        </ul>

        <p className='advantages__note'>
          Готова обсудить вашу задачу и&nbsp;предложить план работ с&nbsp;оценкой
          сроков&nbsp;&mdash;&nbsp;напишите, и&nbsp;я&nbsp;отвечу в&nbsp;течение дня
        </p>
      </div>
    </section>
  );
}

export default Advantages;

