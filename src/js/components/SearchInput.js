import { form, input, submitButton, errorBubble } from '../constants/constants';

export default class SearchInput {
    constructor(callback) {
      this.callback = callback;
    }
    hideError() {
      if (input.validity.valid) {
        errorBubble.className = "error-bubble";
      } else {
        errorBubble.className = "error-bubble error-bubble_active";
      }
    }
    validate() {
      if (!input.validity.valid) {
        errorBubble.className = "error-bubble error-bubble_active";
      } else return true;
    }
    blockForm(isBlocked) {
      if (isBlocked) {
        input.setAttribute('disabled', true);
        submitButton.setAttribute('disabled', true);
      } else {
        input.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
      }
    }
    setEventListeners() {
      form.addEventListener('input', this.hideError);
      form.addEventListener('submit', this.callback);
      submitButton.addEventListener('keydown', this.validate);
    }
}
