let index = 0;

export default class Faded {

  constructor(selector, initialImages) {
    this._initialImages = initialImages;
    this._fadedImage = document.querySelector(selector);
  }

  _setFadedImage() {
    if (index == this._initialImages.length - 1) {
        index = 0;
    }
    const image = this._initialImages[index];
    this._fadedImage.style.backgroundImage = image.link;
    index++;
  }

  setTimerToChangeImage() {
    setInterval(this._setFadedImage.bind(this),8000);
  }
}
 