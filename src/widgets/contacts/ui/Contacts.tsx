import { contactsMock } from '@/entities/contact';
import { Icon, Title } from '@/shared/ui';

import './Contacts.scss';

function Contacts() {
  return (
    <section className='section contacts' id='Контакты'>
      <div className='contacts__inner container'>
        <div className='contacts__title'>
          <Title text='Контакты' />
        </div>

        <div className='contacts__content'>
          <p className='contacts__lead'>
            Открыта к новым проектам и интересным задачам. Напишите мне удобным
            способом&nbsp;&mdash;&nbsp;отвечаю быстро и всегда на связи
          </p>

          <ul className='contacts__list'>
            {contactsMock.map((contact, index) => (
              <li
                className={`contacts__item${contactsMock.length % 2 === 1 && index === contactsMock.length - 1 ? ' contacts__item--last-odd' : ''}`}
                key={contact.id}>
                <a
                  aria-label={contact.ariaLabel}
                  className='contacts__link'
                  href={contact.href}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  target={contact.external ? '_blank' : undefined}>
                  <span className='contacts__icon'>
                    <Icon name={contact.icon} />
                  </span>

                  <span className='contacts__info'>
                    <span className='contacts__label'>{contact.label}</span>
                    <span className='contacts__value'>{contact.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

