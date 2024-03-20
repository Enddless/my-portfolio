import p11 from '../../assets/images/p1_1.png';
import p12 from '../../assets/images/p1_2.png';
import p13 from '../../assets/images/p1_3.png';
import p14 from '../../assets/images/p1_4.png';
import p15 from '../../assets/images/p1_5.png';
import p16 from '../../assets/images/p1_6.png';
import p17 from '../../assets/images/p1_7.png';
import p18 from '../../assets/images/p1_8.png';
import p19 from '../../assets/images/p1_9.png';
import p110 from '../../assets/images/p1_10.png';
import p111 from '../../assets/images/p1_11.png';
import p112 from '../../assets/images/p1_12.png';
import p113 from '../../assets/images/p1_13.png';
import p114 from '../../assets/images/p1_14.png';
import p115 from '../../assets/images/p1_15.png';
import p116 from '../../assets/images/p1_16.png';
import p117 from '../../assets/images/p1_17.png';
import p118 from '../../assets/images/p1_18.png';
import p119 from '../../assets/images/p1_19.png';
import p120 from '../../assets/images/p1_20.png';
import p121 from '../../assets/images/p1_21.png';
import p122 from '../../assets/images/p1_22.png';
import p123 from '../../assets/images/p1_23.png';
import p124 from '../../assets/images/p1_24.png';

import p21 from '../../assets/images/p2_1.png';
import p22 from '../../assets/images/p2_2.png';
import p23 from '../../assets/images/p2_3.png';
import p24 from '../../assets/images/p2_4.png';
import p25 from '../../assets/images/p2_5.png';
import p26 from '../../assets/images/p2_6.png';
import p27 from '../../assets/images/p2_7.png';
import p28 from '../../assets/images/p2_8.png';
import p29 from '../../assets/images/p2_9.png';
import p210 from '../../assets/images/p2_10.png';

import p31 from '../../assets/images/p3_1.png';
import p32 from '../../assets/images/p3_2.png';
import p33 from '../../assets/images/p3_3.png';
import p34 from '../../assets/images/p3_4.png';
import p35 from '../../assets/images/p3_5.png';

import p41 from '../../assets/images/p4_1.png';
import p42 from '../../assets/images/p4_2.png';
import p43 from '../../assets/images/p4_3.png';
import p44 from '../../assets/images/p4_4.png';
import p45 from '../../assets/images/p4_5.png';

import main1 from '../../assets/images/main_photo1.png';
import main2 from '../../assets/images/main_photo2.png';
import main3 from '../../assets/images/main_photo3.png';
import main4 from '../../assets/images/main_photo4.png';

export const projectsData = [
  {
    id: 0,
    name: 'Just le studia',
    text: 'Сайт-шаблон для небольшой студии (b2b). Администратором возможно добавление, редактирование и удаление контента сайта: логотипа, информации о залах, преподавателях, расписании, абонементах, юридических документов, контактов, координат для интерактивной карты. Пользователю предлагается просмотреть всю информацию о студии на предложенных страницах,а так же зарегистрироваться в личном кабинете.',
    deploy: '',
    github: 'https://github.com/Enddless/kitchen-ts',
    stack:
      '#html, #scss, #react, #typescript, #redux toolkit, #middleware, #token, #axios interceptors, #cookie httpOnly, #cors settings, #leaflet, #slick-carousel',
    organizationName: 'Pineapple Practice',
    organizationLink: 'https://pnpl.site/',
    mainPhoto: `${main1}`,
    path: 'studia',
    images: [
      { idImage: 0.11, url: `${p11}` },
      { idImage: 0.12, url: `${p12}` },
      { idImage: 0.13, url: `${p13}` },
      { idImage: 0.14, url: `${p14}` },
      { idImage: 0.15, url: `${p15}` },
      { idImage: 0.16, url: `${p16}` },
      { idImage: 0.17, url: `${p17}` },
      { idImage: 0.18, url: `${p18}` },
      { idImage: 0.19, url: `${p19}` },
      { idImage: 0.1111, url: `${p110}` },
      { idImage: 0.111, url: `${p111}` },
      { idImage: 0.112, url: `${p112}` },
      { idImage: 0.113, url: `${p113}` },
      { idImage: 0.114, url: `${p114}` },
      { idImage: 0.115, url: `${p115}` },
      { idImage: 0.116, url: `${p116}` },
      { idImage: 0.117, url: `${p117}` },
      { idImage: 0.118, url: `${p118}` },
      { idImage: 0.119, url: `${p119}` },
      { idImage: 0.1211, url: `${p120}` },
      { idImage: 0.121, url: `${p121}` },
      { idImage: 0.122, url: `${p122}` },
      { idImage: 0.123, url: `${p123}` },
      { idImage: 0.124, url: `${p124}` }
    ],
    comments:
      'В данный момент проект еще дорабатывается, близжайшие фичи, которые планируются к внедрению: возможность редактирования администратором расписания студии и общих настроек сайта, таких как тема и название разделов, модерирование поступающих отзывов, обновление пользователей; для пользователя появятся интерфейсы записи на занятие, просмотра информацию об абонементах, смена пароля, отправка отзыва. Деплой в процессе.'
  },
  {
    id: 1,
    name: 'На кухне',
    text: ' Сайт - сборник рецептов, который поможет вкусно и разнообразно питаться. Пользователь может использовать фильтры каталога такие как время приготовления рецепта, используемые ингредиенты или исключения. В выбранном рецепте, пользуясь удобным калькулятором, пользователь может отрегулировать нужное количество порций и добавить в список покупок необходимое количество ингредиентов.',
    deploy: 'https://receptura-f8c2f.web.app/',
    github: 'https://github.com/Enddless/the_kitchen',
    stack: '#html, #css, #react, #firebase firestore',
    organizationName: 'Pineapple Practice',
    organizationLink: 'https://pnpl.site/',
    mainPhoto: `${main2}`,
    path: 'kitchen',
    images: [
      { idImage: 1.21, url: `${p21}` },
      { idImage: 1.22, url: `${p22}` },
      { idImage: 1.23, url: `${p23}` },
      { idImage: 1.24, url: `${p24}` },
      { idImage: 1.25, url: `${p25}` },
      { idImage: 1.26, url: `${p26}` },
      { idImage: 1.27, url: `${p27}` },
      { idImage: 1.28, url: `${p28}` },
      { idImage: 1.29, url: `${p29}` },
      { idImage: 1.2111, url: `${p210}` }
    ]
  },
  {
    id: 2,
    name: 'Dream house',
    text: 'Сайт фирмы, специализирующейся на создании уникальных дизайнов для загородных домов, которые отражают стиль, предпочтения и потребности. Пользователю предлагается просмотреть уникальные дизайны трех предложенных вариантов, ознакомиться с этапами,а также задать вопрос в форме обратной связи.',
    deploy: 'https://enddless.github.io/dream_house/',
    github: 'https://github.com/Enddless/dream_house',
    stack: '#html, #scss, #react, #slick-carousel',
    organizationName: 'freelance',
    organizationLink: '',
    mainPhoto: `${main3}`,
    path: 'house',
    images: [
      { idImage: 2.31, url: `${p31}` },
      { idImage: 2.32, url: `${p32}` },
      { idImage: 2.33, url: `${p33}` },
      { idImage: 2.34, url: `${p34}` },
      { idImage: 2.35, url: `${p35}` }
    ]
  },
  {
    id: 3,
    name: 'Tourist',
    text: 'Блог туриста, раскрывающий все тонкости путешествий. Фотографии эффектно и неназойливо появляются с разных сторон, в зависимости от скролла. Пользователь остается только скроллить экран, чтобы виртуально окунуться в фотографии путешественника.',
    deploy: 'https://github.com/Enddless/tourist',
    github: 'https://github.com/Enddless/tourist',
    stack: '#html, #scss, #react, #gsap',
    organizationName: 'freelance',
    organizationLink: '',
    mainPhoto: `${main4}`,
    path: 'tourist',
    images: [
      { idImage: 3.41, url: `${p41}` },
      { idImage: 3.42, url: `${p42}` },
      { idImage: 3.43, url: `${p43}` },
      { idImage: 3.44, url: `${p44}` },
      { idImage: 3.45, url: `${p45}` }
    ]
  }
];
