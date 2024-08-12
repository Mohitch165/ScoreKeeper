const user1 = document.querySelector('#user1');
const user2 = document.querySelector('#user2');
const user1Inc = document.querySelector('#user1Inc');
const user2Inc = document.querySelector('#user2Inc');
const h2 = document.querySelector('#h2');
let user1Score = 0;
let user2Score = 0;
let winningScore = 5;
while(user1Score || user2Score !== winningScore){
    user1Inc.addEventListener('click', () => {
        user1Score += 1;
        user1.innerText = user1Score;
    });
    user2Inc.addEventListener('click', () => {
        user2Score += 1;
        user2.innerText = user2Score;
    });
}
if(user1Score === winningScore){
    h2.innerText = "And the winner is Player 1";
} else {
    h2.innerText = "And the winner is Player 2";
}
const reset =  document.querySelector('#reset');
reset.addEventListener('click', () => {
    user1Score = 0;
    user2Score = 0;
    user1.innerText = '0';
    user2.innerText = '0';
    h2.innerText = "And the winner is ..."
})
