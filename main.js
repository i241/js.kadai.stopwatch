const stopwatch = document.getElementById('stopwatch')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let timerid ;
let elapsedMs = 0;

function timeToString(millis) {
  const ms = millis % 1000;
  const s = Math.floor(millis / 1000) % 60;
  const m = Math.floor(millis / 1000 / 60) % 60;
    
  const formattedMs = ms.toString().padStart(3, '0');
  const formattedS = s.toString().padStart(2, '0');
  const formattedM = m.toString().padStart(2, '0');
    
  return formattedM + ':' + formattedS + ':' + formattedMs;
}

start.addEventListener('click' , () => {
  let startMs =Date.now();
  startMs -= elapsedMs;
  
  timerid = setInterval(() => {
    const nowMs = Date.now();
    elapsedMs = nowMs - startMs;
    
    stopwatch.textContent = timeToString(elapsedMs);
  }, 10);
});

stop.addEventListener('click', () => {
  clearInterval(timerid);
});

reset.addEventListener('click' , () => {
  clearInterval(timerid);
  elapsedMs = 0;
  stopwatch.textContent = '00:00:000'
})
