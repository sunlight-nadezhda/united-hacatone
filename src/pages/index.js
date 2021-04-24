import './index.css';
import Faded from '../scripts/components/Faded.js';
import Menu from '../scripts/components/Menu.js';
import ProjectCard from '../scripts/components/ProjectCard.js';

import {
  initialImages,
  menuSettings,
  projectsInfo
} from '../scripts/utils/constants.js';

const faded = new Faded('.faded-image', initialImages);
faded.setTimerToChangeImage();

const menu = new Menu(menuSettings);
menu.setEventListeners();

const projectsBlock = document.querySelector('.portfolio__projects-block');

projectsInfo.forEach(data => {
  const card = new ProjectCard(data, '#card-project');
  const projectCard = card.renderCard();
  projectsBlock.append(projectCard);
});
