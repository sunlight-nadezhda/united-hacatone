
export default class SkillsCard {
  constructor({image, text, initialRate}, selector) {
    this._image = image;
    this._name = text;
    this._initialRate = initialRate;
    this._selector = selector;
  }

  _setEventListeners() {
    this._elementsOfCard.cardSkillsRate.addEventListener('click', (evt) => this._handleRate(evt)); 
  }

  _handleRate(evt) {
    if (!evt.target.classList.contains('skills__star')) return;

    let posOfStar = Number(evt.target.id.slice(4));
    const skillRate = evt.target.closest('.skills__rate');

    this._setStars(posOfStar,skillRate);
  }

  _setInitialStars() {
    for (let i=0;i<this._initialRate;i++) {
      this._elementsOfCard.cardSkillsRate.children[i].classList.add('skills__star_active');
    }
  }

  _checkFirstStar(posOfStar,skillRate) {
    if ((posOfStar === 0) &&
       (skillRate.children[0].classList.contains('skills__star_active')) &&
       !(skillRate.children[1].classList.contains('skills__star_active'))) {
         skillRate.children[0].classList.remove('skills__star_active');
         skillRate.children[0].classList.remove('appear');
         return true;
    }
  }

  _setStars(posOfStar,skillRate) {
    if (this._checkFirstStar(posOfStar,skillRate)) return;

    for (let i=0; i<=posOfStar; i++) {
      if(!skillRate.children[i].classList.contains('skills__star_active')){
        skillRate.children[i].classList.add('skills__star_active');
        skillRate.children[i].classList.add('appear');
      }
    }

    for (let j=posOfStar+1; j<5; j++) {
      if (skillRate.children[j].classList.contains('skills__star_active')) {
        skillRate.children[j].classList.remove('skills__star_active');
        skillRate.children[j].classList.remove('appear');
      }
    }
  }


  _getElementsOfCard() { 
    const elementsOfCard = { 
     cardImg: this._element.querySelector('.skills__image'),
     cardTitle: this._element.querySelector('.skills__description'),
     cardSkillsRate: this._element.querySelector('.skills__rate'),
    } 
 
    return elementsOfCard; 
  } 

  generateCard() {
    this._element = this._getTemplate();
    this._elementsOfCard = this._getElementsOfCard(); 

    this._elementsOfCard.cardImg.src = this._image;
    this._elementsOfCard.cardImg.alt = `Иконка программы ${this._name}`;
    this._elementsOfCard.cardTitle.textContent = this._name;

    this._setInitialStars();
    this._setEventListeners();


    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.skills__program-item')
      .cloneNode(true);
    return cardElement;
  }

}
