export default class ProjectCard {
  constructor(dataProject, selector) {
    this._link = dataProject.link;
    this._image = dataProject.image;
    this._nameProject = dataProject.text;
    this._selector = selector;
  }

  
  _getElementsOfCard() { 
    const elementsOfCard = { 
     cardImg: this._element.querySelector('.portfolio__image'),
     cardTitle: this._element.querySelector('.portfolio__project-name'),
     cardLink: this._element.closest('.portfolio__project-link')
    } 
 
    return elementsOfCard; 
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._elementsOfCard = this._getElementsOfCard(); 

    this._elementsOfCard.cardImg.src = this._image;
    this._elementsOfCard.cardTitle.textContent = this._nameProject;
    this._elementsOfCard.cardLink.href = this._link;

    this._delay = 1/6;
    this._element.style.animationDelay = `${this._delay}s`;

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.portfolio__project-link')
      .cloneNode(true);
    return cardElement;
  }

}
