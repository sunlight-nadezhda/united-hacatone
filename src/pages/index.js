import './index.css';
import Faded from '../scripts/components/Faded.js';
import Menu from '../scripts/components/Menu.js';

import {initialImages, menuSettings} from '../scripts/utils/constants.js';


const faded = new Faded('.faded-image', initialImages);
faded.setTimerToChangeImage();

const menu = new Menu(menuSettings);
menu.setEventListeners();