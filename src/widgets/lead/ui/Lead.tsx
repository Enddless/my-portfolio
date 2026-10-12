import photo from '@shared/assets/images/photo1.jpg';

import { ContactList } from '@/entities/contact';

import './Lead.scss';

function Lead() {
  return (
    <section className='section lead' id='Обо мне'>
      <div className='lead__inner container'>
        <div className='lead__content'>
          <span className='lead__eyebrow'>html · frontend developer</span>

          <h1 className='lead__name'>Диана Иващенко</h1>

          <p className='lead__description'>
            Три года в веб-разработке: превращаю идеи в готовые, стабильно работающие
            сайты. Делаю на совесть и не усложняю там, где можно сделать просто
          </p>

          <a className='lead__cta' href='#Проекты'>
            Смотреть проекты
          </a>

          <ContactList className='lead__contacts' />
        </div>

        <div className='lead__photo'>
          <img
            alt='Фото фронтенд-разработчика Дианы Иващенко'
            height='340'
            loading='eager'
            src={photo}
            width='340'
          />
        </div>
      </div>
    </section>
  );
}

export default Lead;

