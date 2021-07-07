let holidaysDate = new Date(2021, 7, 15);

let holidays = () => {
  let currentDate = new Date().getTime();
  let timeRemaining = holidaysDate - currentDate;
  let daysLeft = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesLeft = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondsLeft = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('dateCounter').innerHTML =
    daysLeft + 'd ' + hoursLeft + 'h ' + minutesLeft + 'm ' + secondsLeft + 's';
};

setInterval(holidays, 1000);
