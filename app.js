const user1 = document.querySelector('#user1');
const user2 = document.querySelector('#user2');
const user1Inc = document.querySelector('#user1Inc');
const user2Inc = document.querySelector('#user2Inc');
const reset =  document.querySelector('#reset');
const h2 = document.querySelector('#h2');
const playToScore = document.querySelector('#playTo')
let user1Score = 0;
let user2Score = 0;
let winningScore = 3;
let gameOver = false;
    user1Inc.addEventListener('click', () => {
        if(!gameOver){
            user1Score += 1;
            if(user1Score === winningScore){
                gameOver = true;
                user1.classList.add('winner');
                user2.classList.add('loser');
            }
            user1.textContent = user1Score;
        }
    });
    user2Inc.addEventListener('click', () => {
        if(!gameOver){
            user2Score += 1;
            if(user2Score === winningScore){
                gameOver = true;
                user2.classList.add('winner');
                user1.classList.add('loser');
            }
            user2.textContent = user2Score;
        }
    });

    playToScore.addEventListener('change', function(){
        winningScore = parseInt(this.value);
        resetFunc();
    });
reset.addEventListener('click', resetFunc);
    function resetFunc() {
    gameOver = false;
    user1Score = 0;
    user2Score = 0;
    user1.textContent = '0';
    user2.textContent = '0';
    user1.classList.remove('winner', 'loser');
    user2.classList.remove('winner', 'loser');
}
