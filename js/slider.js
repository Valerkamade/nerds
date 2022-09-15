const btnSlider = document.querySelectorAll('.button__slider');
const sliderControls = document.querySelector('.slider-controls');
const sliderItem = document.querySelectorAll('.slider__item');

sliderControls.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('button__slider')) {
    for (let i = 0; i < btnSlider.length; i++) {

      btnSlider[i].classList.remove('current');
      sliderItem[i].classList.remove('slide-current');
    }

    target.classList.add('current');

    for (let j = 0; j < btnSlider.length; j++) {
      if (btnSlider[j].classList.contains('current')) {
        sliderItem[j].classList.add('slide-current')
      };
    };
  };

});
