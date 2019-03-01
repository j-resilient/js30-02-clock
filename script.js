const secondHand = document.querySelector('.second-hand');
console.log(secondHand);
// get current seconds
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
}
// run setDate every second aka 1000 milliseconds
setInterval(setDate, 1000);
