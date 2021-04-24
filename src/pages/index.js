import './index.css';
import {initialImages} from '../scripts/utils/constants.js';
import Slider from '../scripts/components/Slider.js';
const menuButton = document.querySelector('.button-menu');
const closeButton = document.querySelector('.button-close');
const menuLinks = document.querySelector('.header__menu-links');
const langLinks = document.querySelector('.lead__lang-links');
const mediaQuery = window.matchMedia('(min-width: 560px)');
const userLeadInfo = document.querySelector('.lead__info');
const content = document.querySelector('.content');
const sliderImage = document.querySelector('.slider');
let index = 0;

const slider = new Slider(initialImages);
setInterval(slider.setSliderImage,5000);


function handleViewMenu() {
  menuLinks.classList.add('header__overlay');
  langLinks.classList.add('lead__lang-links_menu-visible');
  changeOfState(menuLinks,'header__menu-links_type_row','header__menu-links_type_column');
  closeButton.classList.add('button-close_active');
  menuButton.classList.add('button-menu_inactive');
  userLeadInfo.classList.add('lead__info_inactive');
  content.classList.add('content_inactive');
  closeButton.addEventListener('click', handleCloseMenu);
}

function handleCloseMenu() {
  menuLinks.classList.remove('header__overlay');
  langLinks.classList.remove('lead__lang-links_menu-visible');
  changeOfState(menuLinks,'header__menu-links_type_column','header__menu-links_type_row');
  closeButton.classList.remove('button-close_active');
  menuButton.classList.remove('button-menu_inactive');
  userLeadInfo.classList.remove('lead__info_inactive');
  content.classList.remove('content_inactive');
  closeButton.removeEventListener('click', handleCloseMenu);
}

function changeOfState(item, initialState, changedState) {
  item.classList.remove(initialState);
  item.classList.add(changedState);
}

function findAlreadySelectedItem(parentItem) {
  const selectedItem = parentItem.querySelector('.page__link_active');
  if (selectedItem !== null) selectedItem.classList.remove('page__link_active');
}

function setItemToSelectedStatus(item) {
  if (content.classList.contains('content_inactive')) {
    handleCloseMenu();
    content.classList.remove('content_inactive');
  }
  item.classList.add('page__link_active');
}

function handleSelectItem(evt,parentItem) {
  if (evt.target.classList.contains('page__link')) {
    findAlreadySelectedItem(parentItem);
    setItemToSelectedStatus(evt.target);
  }
}

function closeColumnMenu() {
  if ((mediaQuery.matches) && (menuLinks.classList.contains('header__menu-links_type_column'))) {
    handleCloseMenu();
  }
}


window.addEventListener('resize', closeColumnMenu);
langLinks.addEventListener('click', (evt) => handleSelectItem(evt, langLinks));
menuLinks.addEventListener('click', (evt) => handleSelectItem(evt, menuLinks));

menuButton.addEventListener('click', handleViewMenu);
