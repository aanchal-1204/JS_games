let timerDisplay = document.querySelector('.timer')
let scoreDisplay =document.querySelector('.score')
let targetDisplay =document.querySelector('.target')
let bubble=document.querySelector('.bubble')
let bubble_container=document.querySelector('.bubble_container')


let leftTime = 10;
let score = 0;
let bubbleCount = 60;
const OriginalTiming = 10;
let targetVal = "";

function createBubbles() { 
    bubble_container.innerHTML = '';
    for (let i = 0; i <= bubbleCount; i++) { 
        const bubble = document.createElement('div');
        bubble.classList.add("bubble");

        let value=Math.floor((Math.random()*10))
        bubble.textContent = value;
        bubble_container.appendChild(bubble)
    }
}
 


function generateTarget() { 
    targetVal = Math.floor((Math.random() * 10));
    targetDisplay.textContent = `target : ${targetVal}`;
}

function startTimer() { 
    const timeInterval = setInterval(() => {
        timerDisplay.textContent=`Time left : ${leftTime} sec`
       
        if (leftTime === 0) { 
            clearInterval(timeInterval);
            bubble_container.innerHTML = `
            <div class="append-container" id="gameOverScreen">
  <div class="game-status">🎮Game Over</div>
  <div class="final-score">Your Score:<span id="finalScore">${score}</span></div>
  <button class="reset-btn" onclick=ResetGame()>🔄 Play Again</button>
</div>
            `
        }
         leftTime--;
    },1000)
}



function ResetGame() {
    leftTime = OriginalTiming;
    timerDisplay.textContent = `Time left : ${leftTime} sec`;
    score = 0;
    scoreDisplay.textContent = `Score:${score}`;
    startGame();
    
}


bubble_container.addEventListener('click', (e) => { 
    if (e.target.classList.contains('bubble')) {
     
        if (targetVal === Number(e.target.textContent)) {
            score += 10;
            
        } else {
            score=score- 5;
        }
    }
            scoreDisplay.textContent = `Score : ${score}`;
               generateTarget();
                createBubbles();
        
    
})



function startGame() { 
    createBubbles();
     generateTarget(); 
    startTimer();
}
      
startGame();



