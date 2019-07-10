let userScore=0;
let compScore=0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const msg_div = document.querySelector(".msg>p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice(){
    const choices=["r", "p", "s"];
    return choices[Math.floor(Math.random()*3)];

}
dict = {
    "r":"Rock",
    "p":"Paper",
    "s":"Scissor"
}

function win(userChoice, computerChoice){
    userScore=userScore+1;
    userScore_span.innerHTML=userScore;
    miniUser = "user".fontsize(3).sub();
    miniComp = "comp".fontsize(3).sub();
    msg_div.innerHTML= dict[userChoice]+miniUser+" beats "+dict[computerChoice]+miniComp+". You Win!!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 400);
}
function lose(userChoice, computerChoice){
    compScore=compScore+1;
    compScore_span.innerHTML=compScore;
    miniUser = "user".fontsize(3).sub();
    miniComp = "comp".fontsize(3).sub();
    msg_div.innerHTML= dict[computerChoice]+miniComp+" beats "+dict[userChoice]+miniUser+". You Lose!!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 400);
}
function draw(userChoice, computerChoice){
    miniUser = "user".fontsize(3).sub();
    miniComp = "comp".fontsize(3).sub();
    msg_div.innerHTML= dict[computerChoice]+miniComp+" equals "+dict[userChoice]+miniUser+". It's Draw!!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 400);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);


    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissor_div.addEventListener('click', function(){
        game("s")
    })
}

main();
