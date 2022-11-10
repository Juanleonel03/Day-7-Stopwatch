let second = 00;
let miliSecond = 00;
let miliSecondSpan = document.getElementById('miliSecond');
let secondSpan = document.getElementById('second');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
let play; 

startButton.addEventListener('click', () =>{
  clearInterval(play)
  play = setInterval(startTime, 10)
} )

pauseButton.addEventListener('click', () =>{
  clearInterval(play)
})

resetButton.addEventListener('click', ()=>{
  clearInterval(play)
  second = '00';
  miliSecond = '00';
  secondSpan.innerHTML = second;
  miliSecondSpan.innerHTML = miliSecond;
})

const startTime = () =>{
  miliSecond++;
  if(miliSecond <= 9){
    miliSecondSpan.innerHTML = '0' + miliSecond;
  }else{
    miliSecondSpan.innerHTML = miliSecond;
  }
  if(second > 9){
    secondSpan.innerHTML = second;
  }
  if(miliSecond > 99){
    second++;
    secondSpan.innerHTML = '0' + second;
    miliSecond = 0;
    miliSecondSpan.innerHTML = '0' + miliSecond
  }
}