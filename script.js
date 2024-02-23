const day_in = document.querySelector('.day-in');
const month_in = document.querySelector('.month-in');
const year_in = document.querySelector('.year-in');
const button = document.querySelector('.btn');
const years_out = document.querySelector('.years-out');
const month_out = document.querySelector('.month-out');
const day_out = document.querySelector('.day-out');


button.addEventListener('click', () => {
    let date1 = new Date(year_in.value, month_in.value -1, day_in.value);
    let date2 = new Date();
    console.log(date1);
    console.log(date2);

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

})