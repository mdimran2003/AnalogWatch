const analougeWatch = () => {
  let timeData = new Date();
  let hour = timeData.getHours();
  let minute = timeData.getMinutes();
  let second = timeData.getSeconds();
  let hourStick = document.getElementById("hourstick");
  let minnuteStick = document.getElementById("minnutestick");
  let secondStick = document.getElementById("secondstick");

  let min = 6 * minute;
  let sec = 6 * second;
  let hr = 30 * hour + minute / 2;

  hourStick.style.transform = `rotate(${hr}deg)`;
  minnuteStick.style.transform = `rotate(${min}deg)`;
  secondStick.style.transform = `rotate(${sec}deg)`;
};
setInterval(analougeWatch, 1000);
