import c11 from '../../assets/images/c1_1.png';
import c12 from '../../assets/images/c1_2.png';

export const componentsData = [
  {
    id: 1,
    name: 'Drag drop galery',
    text: 'Небольшая галерея, позволяющая пользователю передвигать изображения мышью, в пределах своего экрана. При наведении на любое изображение изменяется его наклон',
    deploy: 'https://enddless.github.io/drag-drop-slider/',
    github: 'https://github.com/Enddless/drag-drop-slider',
    stack: '#html, #scss, #react, #gsap',
    images: [
      { idImage: 1.1, url: `${c11}` },
      { idImage: 1.2, url: `${c12}` }
    ]
  }
];
