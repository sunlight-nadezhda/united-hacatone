import './index.css';
import Slider from '../scripts/components/Slider.js';
import Menu from '../scripts/components/Menu.js';
import ProjectCard from '../scripts/components/ProjectCard.js';

import {
  initialImages,
  menuSettings,
  projectsInfo
} from '../scripts/utils/constants.js';

const slider = new Slider('.slider', initialImages);
slider.setTimerToChangeImage();

const menu = new Menu(menuSettings);
menu.setEventListeners();

const projectsBlock = document.querySelector('.portfolio__projects-block');

projectsInfo.forEach(data => {
  console.log('link: ', data.link);
  console.log('text: ', data.text);
  const card = new ProjectCard(data, '#card-project');
  const projectCard = card.renderCard();
  projectsBlock.append(projectCard);
});
