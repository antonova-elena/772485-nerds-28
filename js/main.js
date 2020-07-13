'use strict';

(function () {
  const ESCAPE = `Escape`;

  const toggleVisuallyHidden = function (evt) {
    evt.preventDefault();
    popupFormElement.classList.toggle(`popup-form-show`);
    popupFormElement.classList.remove(`popup-form-error`);
  };

  const onDocumentKeyDown = function (evt) {
    if (evt.key === ESCAPE && popupFormElement.classList.contains(`popup-form-show`)) {
      toggleVisuallyHidden(evt);
    }
  }

  const onCloseForm = function (evt) {
    toggleVisuallyHidden(evt);
  }

  const onFormSubmit = function (evt) {
    if (! nameFieldElement.value || ! emailFieldElement.value || !reviewFieldElement.value) {
      evt.preventDefault();
      popupFormElement.classList.remove(`popup-form-error`);
      popupFormElement.offsetWidth;
      popupFormElement.classList.add(`popup-form-error`);
    }
  }

  const feedbackButtonElement = document.querySelector(`.button-footer-contacts`);
  const popupFormElement = document.querySelector(`.popup-form`);
  const popupCloseButtonElement = popupFormElement.querySelector(`.popup-close`);
  const nameFieldElement = popupFormElement.querySelector(`[name="name"]`);
  const emailFieldElement = popupFormElement.querySelector(`[name="email"]`);
  const reviewFieldElement = popupFormElement.querySelector(`[name="review"]`);

  feedbackButtonElement.addEventListener(`click`, onCloseForm);
  popupCloseButtonElement.addEventListener(`click`, onCloseForm);
  popupFormElement.addEventListener(`submit`, onFormSubmit);
  document.addEventListener(`keydown`, onDocumentKeyDown);


})();
