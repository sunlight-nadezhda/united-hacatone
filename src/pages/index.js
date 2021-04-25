import './index.css';
import Faded from '../scripts/components/Faded.js';
import Menu from '../scripts/components/Menu.js';
import Section from '../scripts/components/Section.js';
import ProjectCard from '../scripts/components/ProjectCard.js';
import SkillsCard from '../scripts/components/SkillsCard.js';


import {
  initialImages,
  menuSettings,
  dataProjects,
  dataSkills,
} from '../scripts/utils/constants.js';

const faded = new Faded('.faded-image', initialImages);
faded.setTimerToChangeImage();

const menu = new Menu(menuSettings);
menu.setEventListeners();


function createProjectCard(item, templateSelector) {
  const newProjectCard = new ProjectCard(item,templateSelector);
  return newProjectCard.generateCard();
}

const projectCardsList = new Section({
  data: dataProjects,
  renderer: item => {
    const generatedCard = createProjectCard(item, '.card-project');
    projectCardsList.setItem(generatedCard, true);
  }
},'.portfolio__projects-block');

projectCardsList.renderItems();


function createSkillsCard(item, templateSelector) {
  const newSkillsCard = new SkillsCard(item, templateSelector);
  return newSkillsCard.generateCard();
}

const skillsCardsList = new Section({
  data: dataSkills,
  renderer: item => {
    const generatedCard = createSkillsCard(item, '.card-skills');
    skillsCardsList.setItem(generatedCard, true);
  }
},'.skills__programs-block');

skillsCardsList.renderItems();