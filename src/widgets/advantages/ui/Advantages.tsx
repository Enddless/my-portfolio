import { Title } from '@shared/ui';

import type { IconName } from '@/shared/ui/Icon';
import Icon from '@/shared/ui/Icon';

import './Advantages.scss';

interface Advantage {
  icon: IconName;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: 'gauge',
    title: '3+ года в веб-разработке',
    description:
      'Коммерческие проекты для медицины, финтеха и e-commerce: от прототипа и вёрстки до продакшена.'
  },
  {
    icon: 'code',
    title: 'React и TypeScript',
    description:
      'Компонентный подход, строгая типизация, состояние в Redux Toolkit — предсказуемый код без магии.'
  },
  {
    icon: 'layers',
    title: 'Чистая архитектура',
    description:
      'Feature-Driven Development: слои, публичные API слайсов и изолированные сегменты — проект легко масштабировать.'
  },
  {
    icon: 'shield',
    title: 'Продукт и качество',
    description:
      'Адаптив от 320px, доступность, Core Web Vitals и ленивая загрузка — акцент на производительность и стабильность.'
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
          Готова обсудить вашу задачу и предложить план работ с оценкой сроков — напишите, и я отвечу в
          течение дня.
        </p>
      </div>
    </section>
  );
}

export default Advantages;