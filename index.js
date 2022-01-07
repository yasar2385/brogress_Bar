// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let prgressBar = document.querySelector('.circular-progress');
let valueConatainer = document.querySelector('.value-container');
let statusDiv = document.querySelector('.status');
let StatusInfo = {
  5: 'Loading ...',
  50: 'Fetching Info ...',
  75: 'Setting Profile ...',
  100: 'Completed',
};
let progressValue = 0;
let progressEndValue = 100;
let speed = 500;
let progress = setInterval(() => {
  progressValue++;
  valueConatainer.textContent = `${progressValue}%`;
  prgressBar.style.background = `conic-gradient(
    #${progressValue > 98 ? '72C245' : 'FF8E33'} ${progressValue * 3.6}deg,
    #F0F0F0 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
  if (StatusInfo[progressValue]) {
    statusDiv.textContent = StatusInfo[progressValue];
  }
}, speed);

console.log(new Date());

document.getElementById('demo').onclick = function (e) {
  document.getElementById('text1').value = 'DILiP';
  alert('YES');
};
