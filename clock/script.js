function startClock() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.sec-hand');
  let hourHandDegree = (currentHour * 30) + 90; //Each hour degree difference is 30deg so hour multiply 30
  let minHandDegree = (currentMinute * 6) + 90; //Each min degree difference is 6deg so min multiply 6
  let secHandDegree = (currentSecond * 6) + 90; //Each sec degree difference is 6deg so sec multiply 6
  hourHand.style.transform = `rotate(${hourHandDegree}deg)`;
  minuteHand.style.transform = `rotate(${minHandDegree}deg)`;
  secondHand.style.transform = `rotate(${secHandDegree}deg)`;
}
startClock();
setInterval(startClock, 1000);
