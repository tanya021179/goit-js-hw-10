import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let newSelectedDate = null;

const btnSelector = document.querySelector('[data-start]');
const daysSelector = document.querySelector('[data-days]');
const hoursSelector = document.querySelector('[data-hours]');
const minutesSelector = document.querySelector('[data-minutes]');
const secondsSelector = document.querySelector('[data-seconds]');
const timePickerSelector = document.querySelector('#datetime-picker');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        newSelectedDate = selectedDates[0];

        const currentDate = new Date();

        if (newSelectedDate < currentDate) {
            iziToast.error({
                title: 'Error',
                titleColor: '#fff',
                backgroundColor: '#ef4040',
                message: 'illegal operation',
                messageColor: '#fff',
            });
            btnSelector.disabled = true;
        } else {
            btnSelector.disabled = false;
        }
    },
};

flatpickr('#datetime-picker', options);

btnSelector.addEventListener('click', startTimer);

let timerId = null;

function startTimer() {
    btnSelector.classList.add('disabled');
    btnSelector.disabled = true;
    timePickerSelector.classList.add('disabled');
    timePickerSelector.disabled = true;

    timerId = setInterval(() => {
        const currentDate = new Date();
        const deltaDate = newSelectedDate - currentDate;

        if (deltaDate <= 0) {
            clearInterval(timerId);
            updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            timePickerSelector.classList.remove('disabled');
            timePickerSelector.disabled = false;
            return;
        }
        const timeComponent = convertMs(deltaDate);
        updateTimer(timeComponent);
    }, 1000);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function pad(value) {
    return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
    daysSelector.textContent = pad(days);
    hoursSelector.textContent = pad(hours);
    minutesSelector.textContent = pad(minutes);
    secondsSelector.textContent = pad(seconds);
}
