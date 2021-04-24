let index = 0;

export default class Slider {

  constructor(selector, initialImages) {
    this._initialImages = initialImages;
    this._sliderImage = document.querySelector(selector);
  }

  _setSliderImage() {
    if (index == this._initialImages.length - 1) {
        index = 0;
    }
    const image = this._initialImages[index];
    this._sliderImage.style.backgroundImage = image.link;
    index++;
  }

  setTimerToChangeImage() {
    setInterval(this._setSliderImage.bind(this),5000);
  }
}
 