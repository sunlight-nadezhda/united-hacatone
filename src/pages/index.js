import './index.css';
import Slider from '../scripts/components/Slider.js';
import Menu from '../scripts/components/Menu.js';

import {initialImages, menuSettings} from '../scripts/utils/constants.js';


const slider = new Slider('.slider', initialImages);
slider.setTimerToChangeImage();

const menu = new Menu(menuSettings);
menu.setEventListeners();