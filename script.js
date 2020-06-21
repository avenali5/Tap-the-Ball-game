const instructions = document.querySelector(".instructions")
const ok = document.querySelector(".ok")

let pointsDisplay = document.querySelector("#points")
let timeDisplay = document.querySelector("#time")
let timeDisplay2 = document.querySelector("#time2");
let timeDisplay3 = document.querySelector("#time3");

let field = document.querySelector(".field");

const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const player3 = document.querySelector("#player3")

let gameResult = document.querySelector(".text")
let yourPoints1 = document.querySelector(".points1")
const playAgain = document.querySelector(".reload")

const goToLevel2 = document.querySelector(".next1")
const goToLevel3 = document.querySelector(".next2");


points = 0
time = 60
ned = 50

ok.onclick = function level1(){

ok.style.display = "none"
instructions.style.display = "none"


setInterval(restTime, 1000);
    
player1.onclick = function sumPoints(){
    points++;
    pointsDisplay.innerHTML = "Points: <b>" + points + "/" + ned + "</b>" 
    randNum = Math.round(Math.random() * 510)
    player1.style.marginTop = randNum + "px"
    randNum2 = Math.round(Math.random() * 310)
    player1.style.marginLeft = randNum2 + "px"
}

function restTime(){{
    time--
    timeDisplay.innerHTML = " &nbsp;&nbsp;&nbsp;Time: " + time;
    
    
    if (time == 0) {
        gameResult.innerHTML = "Time is over!"
        ++time
        player1.style.display = "none"
        yourPoints1.innerHTML = "Your points: " + points;
        playAgain.style.display = "block";
    }
    if (points >= 50) {
        gameResult.innerHTML = "You Win!!"
        ++time
        player1.style.display = "none"
        playAgain.style.display = "block";
        goToLevel2.style.display = "block";
    }
}}
}

goToLevel2.onclick = function level2(){

setInterval(restTime2, 1000);


points = 0
points2 = 0
time = 100000
time2 = 70
ned2 = 60


pointsDisplay.innerHTML = "Points: <b>" + points2 + "/" + ned2 + "</b>";
player2.style.display = "block"
playAgain.style.display = "none";
goToLevel2.style.display = "none";
gameResult.innerHTML = "";
field.style.background = `url("images/tennis\ field.jpg") no-repeat center center/cover`;

player2.onclick = function sumPoints2(){
    points2++;
    pointsDisplay.innerHTML = "Points: <b>" + points2 + "/" + ned2 + "</b>" 
    randNum = Math.round(Math.random() * 510)
    player2.style.marginTop = randNum + "px"
    randNum2 = Math.round(Math.random() * 310)
    player2.style.marginLeft = randNum2 + "px"
}


function restTime2(){{
    time2--
    timeDisplay.style.display = "none"
    timeDisplay2.innerHTML = " &nbsp;&nbsp;&nbsp;Time: " + time2;
    if (time2 == 0) {
        ++time2
        gameResult.innerHTML = "Time is over!"
        player2.style.display = "none"
        yourPoints1.innerHTML = "Your points: " + points2;
        playAgain.style.display = "block";
    }
    if (points2 >= 60) {
        gameResult.innerHTML = "You Win!!"
        ++time2
        player2.style.display = "none"
        playAgain.style.display = "block";
        goToLevel3.style.display = "block";
    }
}}}

goToLevel3.onclick = function level3() {
  setInterval(restTime3, 1000);

  points = 0;
  points2 = 0;
  points3 = 0;
  time = 100000;
  time2 = 100000;
  time3 = 55
  ned3 = 65;

  pointsDisplay.innerHTML = "Points: <b>" + points3 + "/" + ned3 + "</b>";
  player2.style.display = "none";
  player3.style.display = "block"
  playAgain.style.display = "none";
  goToLevel2.style.display = "none"; goToLevel3.style.display = "none"
  gameResult.innerHTML = "";
  field.style.background = `url("images/soccer\ field.jpg") no-repeat center center/cover`;

  player3.onclick = function sumPoints3() {
    points3++;
    pointsDisplay.innerHTML = "Points: <b>" + points3 + "/" + ned3 + "</b>";
    randNum = Math.round(Math.random() * 510);
    player3.style.marginTop = randNum + "px";
    randNum2 = Math.round(Math.random() * 310);
    player3.style.marginLeft = randNum2 + "px";
  };


  function restTime3() {
    {
      time3--;
      timeDisplay.style.display = "none"; timeDisplay2.style.display = "none"
      timeDisplay3.innerHTML = " &nbsp;&nbsp;&nbsp;Time: " + time3;
      if (time3 == 0) {
        ++time3;
        gameResult.innerHTML = "Time is over!";
        player3.style.display = "none";
        yourPoints1.innerHTML = "Your points: " + points3;
        playAgain.style.display = "block";
      }
      if (points2 >= 65) {
        gameResult.innerHTML = "Congratulations! You finished the game";
        ++time3;
        player3.style.display = "none";
        playAgain.style.display = "block";
      }
    }
  }
};