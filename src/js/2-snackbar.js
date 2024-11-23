import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const promiseState = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Ok',
        backgroundColor: '#59a10d',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        backgroundColor: '#ef4040',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    })
    .finally(() => {
      form.reset();
    });
}
