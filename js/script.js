$('.slider-for').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});

const previousBtn = document.querySelector('.slick-prev');
const nextBtn = document.querySelector('.slick-next');
const containerDiv = document.querySelector('.container');
const counterEl = document.querySelector('.counter');

let counterValue = 1;

previousBtn.innerHTML = `<svg width="56" height="56" class="slick-arrow-icon"><use href="./images/sprite.svg#icon-arrow_left"></use></svg>`;
nextBtn.innerHTML = `<svg width="56" height="56" class="slick-arrow-icon"><use href="./images/sprite.svg#icon-arrow_right"></use></svg>`;

containerDiv.appendChild(previousBtn);
containerDiv.appendChild(nextBtn);

previousBtn.addEventListener('click', decrement);
nextBtn.addEventListener('click', increment);

previousBtn.setAttribute('disabled', 'true');

// счетчик слайдов
function decrement() {
  counterValue -= 1;

  if (counterValue === 1) {
    previousBtn.setAttribute('disabled', 'true');
    previousBtn.setAttribute('z-index', '-2');
    counterValue = 1;
    counterEl.textContent = counterValue;
  } else {
    previousBtn.removeAttribute('disabled');
    nextBtn.removeAttribute('disabled');
    previousBtn.removeAttribute('z-index');
    nextBtn.removeAttribute('z-index');
    counterEl.textContent = counterValue;
  }
}

function increment() {
  counterValue += 1;

  if (counterValue === 5) {
    nextBtn.setAttribute('disabled', 'true');
    nextBtn.setAttribute('z-index', '-2');
    counterValue = 5;
    counterEl.textContent = counterValue;

    // nextBtn.style.zIndex = -1;
  } else {
    nextBtn.removeAttribute('disabled');
    previousBtn.removeAttribute('disabled');
    previousBtn.removeAttribute('z-index');
    nextBtn.removeAttribute('z-index');
    counterEl.textContent = counterValue;
  }
}
