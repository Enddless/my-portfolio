import type { Contact } from '../model/types';

export const contactsMock: Contact[] = [
  {
    id: 'phone',
    label: 'Телефон',
    value: '+7\u00A0985\u00A0258-55-24',
    href: 'tel:+79852585524',
    icon: 'phone',
    ariaLabel: 'Позвонить по номеру +7\u00A0985\u00A0258-55-24',
    external: false
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@endless_moonlight_on_monday',
    href: 'https://telegram.me/endless_moonlight_on_monday',
    icon: 'telegram',
    ariaLabel: 'Написать в Telegram endless_moonlight_on_monday',
    external: true
  },
  {
    id: 'email',
    label: 'Почта',
    value: 'ivdiana14500@gmail.com',
    href: 'mailto:ivdiana14500@gmail.com',
    icon: 'email',
    ariaLabel: 'Написать на почту ivdiana14500@gmail.com',
    external: false
  }
];