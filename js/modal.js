const modal = document.querySelector('.modal__wrie-us');
const writeUs = document.querySelector('.button__modal');
const modalClose = modal.querySelector('.modal__close');
const writeUsForm = modal.querySelector('.write-us__form');
const writeUsName = modal.querySelector('[name=ns]');
const writeUsEmail = modal.querySelector('[name=email]');
const writeUsText = modal.querySelector('[name=text]');


	


let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('ns');
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener('click', function open(evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');

  if (localStorage.getItem('email') && localStorage.getItem('ns')) {
    writeUsName.value = localStorage.getItem('ns');
    writeUsEmail.value = localStorage.getItem('email');
    writeUsText.focus();

  } else if (localStorage.getItem('ns')) {
    writeUsName.value = localStorage.getItem('ns');
    writeUsEmail.focus();

  } else {
    writeUsName.focus();
  }
});


const cleen = function () {
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
  modal.classList.remove('modal-exit');
}

const isStorage = function () {
  if (isStorageSupport) {
    localStorage.setItem('ns', writeUsName.value);
    localStorage.setItem('email', writeUsEmail.value);
    localStorage.setItem('text', writeUsText.value);
  }
}

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-exit');

  setTimeout(cleen, 600);
  isStorage();
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal-error');
  } else {
    isStorage();
  }
}
);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.add('modal-exit');

      setTimeout(cleen, 600);
      isStorage();
    }
  }
});
