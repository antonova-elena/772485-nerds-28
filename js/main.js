'use strict';

(() => {
  const ESCAPE = `Escape`;

  const toggleVisuallyHidden = (evt) => {
    evt.preventDefault();
    popupFormElement.classList.toggle(`visually-hidden`);
  };

  const onDocumentKeyDown = (evt) => {
    if (evt.key === ESCAPE && !popupFormElement.classList.contains(`visually-hidden`)) {
      toggleVisuallyHidden(evt);
    }
  }

  const onCloseForm = (evt) => {
    toggleVisuallyHidden(evt);
  }

  const feedbackButtonElement = document.querySelector(`.button-footer-contacts`);
  const popupFormElement = document.querySelector(`.popup-form`);
  const popupCloseButtonElement = popupFormElement.querySelector(`.popup-close`);

  feedbackButtonElement.addEventListener(`click`, onCloseForm);
  popupCloseButtonElement.addEventListener(`click`, onCloseForm);
  document.addEventListener(`keydown`, onDocumentKeyDown);
})();
