import fashionImage from './../../images/fashion.jpg';
import reebokImage from './../../images/reebok.jpg';
import braunImage from './../../images/braun.jpg';

export const initialImages = [
  {
    link: 'url("https://images.unsplash.com/photo-1595754883593-e274aaa13580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1217&q=80")'
  },
  {
    link: 'url("https://images.unsplash.com/photo-1517241938558-898c3afe02c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80")'
  },
  {
    link: 'url("https://im0-tub-ru.yandex.net/i?id=105b6ec6c7951b4746d0525274f3d6f0&n=13")'
  },
  {
    link: 'url("https://sun1-84.userapi.com/s/v1/if1/jf6HwRHXzsTfuVwY987velx1UOKN8MoFyvqIs7ptel465gMxTXoV17eEGuHeuVbXR8kKuo1w.jpg?size=400x0&quality=96&crop=123,156,1097,1097&ava=1")'
  },
  {
    link: 'url("https://wallpapercrafter.com/desktop/274154-portrait-profile-blackampwhite-and-black-hd.jpg")'
  },
  {
    link: 'url("http://images.unsplash.com/photo-1547034403-c8d53213f7b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9")'
  },
  {
    link: 'url("https://femmie.ru/wp-content/uploads/2019/05/photo-1549459300-6d290f8def71.jpeg")'
  },
  {
    link: 'url("https://mindbodywise.com/wp-content/uploads/2019/06/6-natural-ways-to-calm-your-anxious-heart-yoann-boyer.jpg")'
  },
];


export const projectsInfo = [
  {
    link: fashionImage,
    text: 'Online fashion store - Homepage'
  },
  {
    link: reebokImage,
    text: 'Reebok Store - Concept'
  },
  {
    link: braunImage,
    text: 'Braun Landing Page - Concept'
  }
];

export const menuSettings = {
    menuButton: document.querySelector('.button-menu'),
    closeButton: document.querySelector('.button-close'),
    menuLinks: document.querySelector('.header__menu-links'),
    userLeadInfo: document.querySelector('.lead__info'),
    content: document.querySelector('.content'),
    langLinks: document.querySelector('.lead__lang-links')
};
