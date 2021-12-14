// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let prgressBar = document.querySelector('.circular-progress');
let valueConatainer = document.querySelector('.value-container');
let progressValue = 0;
let progressEndValue = 65;
let speed = 500;
let progress = setInterval(() => {
  progressValue++;
  valueConatainer.textContent = `${progressValue}`;
  prgressBar.style.background = `conic-gradient(
    #${progressValue > 98 ? 'FF8E33' : '72C245'} ${progressValue * 3.6}deg,
    #72C245 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
