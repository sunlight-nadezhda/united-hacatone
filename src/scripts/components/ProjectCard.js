export default class ProjectCard {
  constructor(dataProject, selector) {
    this._linkImage = dataProject.link;
    this._nameProject = dataProject.text;
    this._selector = selector;
  }

  renderCard() {
    this._element = this._getTemplate();
    const elementImage = this._element.querySelector('.portfolio__image');
    const elementName = this._element.querySelector('.portfolio__project-name');

    elementImage.src = this._linkImage;
    elementName.textContent = this._nameProject;

    this._setEventListeners();

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

  _setEventListeners() {
    this._element.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
  }
}
