export default class Slider {
  constructor(initialImages) {
    this._initialImages = initialImages;
  }

  setSliderImage() {
    if (index == this._initialImages.length - 1) {
        index = 0;
    }
    const image = this._initialImages[index];
    sliderImage.style.backgroundImage = image.link;
    index++;
}
}
