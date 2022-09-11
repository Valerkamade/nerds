const modal = document.querySelector('.modal');
const writeUs = document.querySelector('.button__modal');
const modalClose = modal.querySelector('.modal__close');
const writeUsForm = modal.querySelector(".write-us__form");
const writeUsName = modal.querySelector("[name=name]");
const writeUsEmail = modal.querySelector("[name=email]");
const writeUsText = modal.querySelector("[name=text]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("writeUsName");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");

  // условие  не работает

  if (storage) {
    writeUsName.value = storage;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
    console.log(writeUsName.value);
  }
});

const cleen = function () {
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  modal.classList.remove("modal-exit");
}

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-exit");

  setTimeout(cleen, 600);

});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeUsName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.add("modal-exit");

      setTimeout(cleen, 600);
    }
  }
});
