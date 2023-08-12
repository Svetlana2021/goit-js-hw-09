import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener(
  'input',
  throttle(onFieldInput, 500, { leading: false, trailing: true })
);
formEl.addEventListener('submit', clearData);

const STORAGE_KEY = 'feedback-form-state';
let formState = {};

function onFieldInput(e) {
  formState[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function clearData(e) {
  e.preventDefault();
  console.log(formState);
  formState = {};
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const onLoad = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    formState = JSON.parse(data);
    Object.entries(formState).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};
window.addEventListener('load', onLoad);
