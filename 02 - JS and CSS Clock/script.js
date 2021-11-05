const setTime = () => {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds === 0 || mins === 0 || hour === 00 || hour === 24) {
        secondHand.style.transition = 'all 0s';
        minuteHand.style.transition = 'all 0s';
        hourHand.style.transition = 'all 0s';
    }
    
    
    const time = document.getElementById('time');


    if (seconds < 10 && mins < 10 ) {
        time.innerHTML = `${hour}:0${mins}:0${seconds}`
    } else if (seconds < 10 && mins > 10) {
        time.innerHTML = `${hour}:${mins}:0${seconds}`
    } else if(seconds > 10 && mins < 10) {
        time.innerHTML = `${hour}:0${mins}:${seconds}`
    } else {
        time.innerHTML = `${hour}:${mins}:${seconds}`
    }
}

setInterval(setTime, 1000);

const setDate = () => {

    const current = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Intl.DateTimeFormat('en-US', options).format(current)

    const todayDate = document.getElementById('todayDate')

    todayDate.innerHTML = `${today}`

}

setDate();

