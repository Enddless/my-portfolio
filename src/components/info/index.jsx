import photo from 'public/images/photo1.jpg';

function Info() {
  return (
    <section className='info' id='About'>
      <h2 className='visually-hidden'>About</h2>
      <div className='info__inner grid grid--2'>
        <div className='info__photo'>
          <img src={photo} alt='' width={200} height={200} loading='lazy' />
        </div>
        <div className='info__body'>
          <div className='info__text'>
            <span className='info__text-item info__text-item--left'>
              html-верстальщик
            </span>
            <h2
              className='info__text-item info__text-item--hero'
              data-text='diana ivashchenko'>
              <span>diana ivashchenko</span>
            </h2>
            <span className='info__text-item info__text-item--right'>
              junior frontend-developer
            </span>
          </div>
        </div>
        <div className='info__motivation-text'>
          <p>
            Стремлюсь к&nbsp;освоению мира веб-разработки. Меня увлекает создание красивых
            и&nbsp;интерактивных пользовательских интерфейсов,&nbsp;а&nbsp;также изучение
            новых технологий и&nbsp;инструментов для улучшения пользовательского опыта.
            Обладаю базовыми знаниями HTML, CSS, SCSS, JavaScript&nbsp;/&nbsp;Typescript,
            React, React Router, React Hooks, Redux Toolkit, Redux Thunk, Gsap, Material
            UI, Ant Design UI, Tailwind CSS, частично&nbsp;БЭМ и Pug. Верстаю из Figma,
            немного Photoshop
          </p>
          <p>
            Моя цель - стать опытным специалистом&nbsp;в&nbsp;области вёрстки и фронтенд
            разработки и&nbsp;внести свой вклад в&nbsp;создание инновационных
            и&nbsp;удобных веб-приложений
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
