const day_in = document.querySelector('.day-in');
const month_in = document.querySelector('.month-in');
const year_in = document.querySelector('.year-in');
const button = document.querySelector('.btn');
const years_out = document.querySelector('.years-out');
const month_out = document.querySelector('.month-out');
const day_out = document.querySelector('.day-out');
const input_container = document.querySelectorAll('.input-container');

let date2 = new Date();
let currentYear = date2.getFullYear();


const calculateYearsOld = () => {
    let date1 = new Date(year_in.value, month_in.value -1, day_in.value);

    let miliseconds = date2 - date1;
    let daysDiference = miliseconds / (1000 * 60 * 60 * 24);

    let years = Math.floor( daysDiference / 365.25);
    daysDiference -= years * 365.25;

    let months = Math.floor( daysDiference / 30.44);
    daysDiference -= months * 30.44;

    let days = Math.floor(daysDiference);

    years_out.innerText = years;
    month_out.innerText = months;
    day_out.innerText = days;
}

button.addEventListener('click', () => {

    if (day_in.value > 0 && day_in.value < 31 && month_in.value > 0 && month_in.value < 12 && year_in.value > 0 && year_in.value < currentYear){
        calculateYearsOld();
        day_in.classList.remove('required-border');
        input_container[0].classList.remove('required');

        month_in.classList.remove('required-border');
        input_container[1].classList.remove('required');

        year_in.classList.remove('required-border');
        input_container[2].classList.remove('required');
    } else {
        if (day_in.value == "") {
            day_in.classList.add('required-border');
            input_container[0].classList.add('required');
        }
        if (month_in.value == "") {
            month_in.classList.add('required-border');
            input_container[1].classList.add('required');
        }
        if (year_in.value == "") {
            year_in.classList.add('required-border');
            input_container[2].classList.add('required');
        }
    }
})