export default class ProjectCard {
  constructor(dataProject, selector) {
    this._link = dataProject.link;
    this._image = dataProject.image;
    this._nameProject = dataProject.text;
    this._selector = selector;
  }

  renderCard() {
    this._element = this._getTemplate();
    const elementImage = this._element.querySelector('.portfolio__image');
    const elementName = this._element.querySelector('.portfolio__project-name');
    const elementLink = this._element.closest('.portfolio__project-link');

    elementImage.src = this._image;
    elementName.textContent = this._nameProject;
    console.log(this._link);
    elementLink.href = this._link;
    console.log(elementLink.href);

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
