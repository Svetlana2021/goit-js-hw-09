const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
let currentState = {};

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedState) {
  currentState = savedState;
  emailInput.value = currentState.email || '';
  messageInput.value = currentState.message || '';
}

form.addEventListener('input', () => {
  currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';

  console.log(currentState);
});
