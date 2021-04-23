import './index.css';
import {initialImages} from '../scripts/utils/constants.js'
const menuButton = document.querySelector('.header__menu-button');
const menuLinks = document.querySelector('.header__menu-links');
const langLinks = document.querySelector('.lead__lang-links');
const mediaQuery = window.matchMedia('(min-width: 560px)');
const userLeadInfo = document.querySelector('.lead__info');
// const leadImage = document.querySelector('.lead__image');
// let index = 0;

// function sliderImage() {
//   // if (index == Array.of(initialImages).length-1) {
//   //   index = 0;
//   // }
//   const image = initialImages[index];
//   console.log(image.link);
//   leadImage.src = `"${image.link}"`;
//   console.log(leadImage.src);
//   leadImage.alt = `"${image.alt}"`;
//   index++;
// }
// setTimeout(sliderImage,5000);


function handleViewMenu() {
  menuLinks.classList.add('header__overlay');
  langLinks.classList.add('lead__lang-links_menu-visible');
  changeOfState(menuLinks,'header__menu-links_type_row','header__menu-links_type_column');
  changeOfState(menuButton,'header__menu-button_type_list','header__menu-button_type_close');
  userLeadInfo.classList.add('lead__info_inactive');
  menuButton.addEventListener('click', handleCloseMenu);
}

function handleCloseMenu() {
  menuLinks.classList.remove('header__overlay');
  langLinks.classList.remove('lead__lang-links_menu-visible');
  changeOfState(menuLinks,'header__menu-links_type_column','header__menu-links_type_row');
  changeOfState(menuButton,'header__menu-button_type_close','header__menu-button_type_list');
  userLeadInfo.classList.remove('lead__info_inactive');
  menuButton.removeEventListener('click', handleCloseMenu);
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
