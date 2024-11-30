import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = document.querySelector("input[name='delay']");
delayInput.step = 1000;
delayInput.min = 1000;

form.addEventListener('submit', submitFoo);

function submitFoo(event) {
  event.preventDefault();

  const state = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  function createDelay(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (state === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            iziToast.success({
            title: '✅ Ok',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#59A10D',
            messageColor: '#ffffff',
            titleColor: '#ffffff',
            icon: false,
          });
          } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            iziToast.error({
            title: '❌ Error',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#ef4040',
            messageColor: '#ffffff',
            titleColor: '#ffffff',
            icon: false,
          });
        }
      }, delay);
    });
  }

  createDelay(delay)
    .then(success => console.log(success))
    .catch(error => console.log(error));

  form.reset();
}