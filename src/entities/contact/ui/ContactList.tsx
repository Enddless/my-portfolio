import { contactsMock } from '../api/mock';

import Icon from '@/shared/ui/Icon';


import './ContactList.scss';

interface ContactListProps {
  contacts?: typeof contactsMock;
  className?: string;
}

function ContactList({ contacts = contactsMock, className }: ContactListProps) {
  return (
    <ul className={className ? `contact-list ${className}` : 'contact-list'}>
      {contacts.map((contact) => (
        <li className='contact-list__item' key={contact.id}>
          <a
            aria-label={contact.ariaLabel}
            className='contact-list__icon'
            href={contact.href}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            target={contact.external ? '_blank' : undefined}>
            <Icon name={contact.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;