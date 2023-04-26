const funcs = require('./functions');

const digits=4;
const hidden= document.getElementById('hidden');
const playbtn= document.getElementById('playbutton');
playbtn.addEventListener('click', animateRandomNumber);
const guessbtn= document.getElementById('guessbutton');
guessbtn.addEventListener('click', makeGuess);

const guess = document.getElementById('guess')
const list = document.getElementById('guesslist')

let target;


function makeGuess(){
    const txt = guess.value
    let pm = funcs.getPlusMinus(txt,target)
    const isFound = (pm=="+ ".repeat(digits))
    if(isFound){
        showResult(target, "+ + + + ")
        foundAnimation()
    }else{
        showResult(txt, pm)
    }
}

function showResult(txt, pm){
    const newItem = document.createElement("li")    
    const tc = document.createTextNode(txt+" "+pm)
    newItem.appendChild(tc)
    list.insertBefore(newItem,null)
    console.log(list)
    guess.value=""
    //guessInput()
    guess.focus()

}

function startGame(){
    target=funcs.getRandomNumber();    
    hidden.textContent = target+"****";  
}



function animateRandomNumber(){
    //hidden.style.backgroundColor = 'bisque'
    let myinterval = setInterval(function(){     
        hidden.textContent = Math.floor(Math.random() * 9999);
    },100);
    setTimeout(function(){
        clearInterval(myinterval);
        hidden.textContent = "****";
        startGame();
    },1000)

}



