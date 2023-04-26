const funcs = require('./functions');

const index_pars={
    digits:4,
    target : '',
    
    playbutton: document.getElementById('playbutton'),
    guessbutton: document.getElementById('guessbutton'),

    hiddentext: document.getElementById('hiddentext'),
    guesstext: document.getElementById('guesstext'),
    warningtext: document.getElementById('warningtext'),
    
    guesslist: document.getElementById('guesslist'),

    inputform: document.getElementById("inputform"),
    
    tadasound: new Audio("tada.mp3")
}

index_pars.playbutton.addEventListener('click', playClick);
index_pars.guessbutton.addEventListener('click', makeGuess);

index_pars.tadasound.volume=0.1;

index_pars.inputform.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   makeGuess();
  }
});


function playClick(){
    clearList();        
    animateRandomNumber(startGame);
}

function clearList(){
    var child = index_pars.guesslist.lastElementChild;    
    while (child) {
        index_pars.guesslist.removeChild(child);
        child = index_pars.guesslist.lastElementChild;
    }
}

function animateRandomNumber(runAfter){
    index_pars.hiddentext.style.backgroundColor="white";
    let myinterval = setInterval(function(){     
        index_pars.hiddentext.textContent = Math.floor(Math.random() * 9999)
    },100);
    setTimeout(function(){
        clearInterval(myinterval);
        runAfter();
    },1000)
}

function startGame(){           
    index_pars.target=funcs.getRandomNumber();    
    index_pars.hiddentext.textContent = index_pars.target+"****"; 
    setMode(true); 
}

function getVisibility( isVis ){
    return isVis ? 'visible' : 'hidden';
}
function setMode(isStarted){
    index_pars.guesstext.style.visibility = getVisibility(isStarted);
    index_pars.guessbutton.style.visibility = getVisibility(isStarted);
    if(isStarted){
        index_pars.guesstext.value="";
        index_pars.guesstext.focus();
    }
}


function getWarning(txt){
    return (txt.length!=4) ? "Guess should have 4 digits" :
    (!funcs.isValid(txt)) ? "Repeating digits not allowed" :        
    "";
}

function makeGuess(){
    const txt = index_pars.guesstext.value;
    const warning= getWarning(txt);
    index_pars.warningtext.textContent =warning;
    if(warning==""){
        let pm = funcs.getPlusMinus(txt,index_pars.target);
        const isFound = (pm=="+ ".repeat(index_pars.digits));
        showResult(txt, pm);
        if(isFound){
            animateSuccess(finishSuccessfull);        
        }
    }else{
        index_pars.guesstext.focus();
    }
}

function showResult(txt, pm){
    const newItem = document.createElement("li");    
    const tc = document.createTextNode(txt+" "+pm);
    newItem.appendChild(tc);
    index_pars.guesslist.insertBefore(newItem,null);
    index_pars.guesstext.value="";
    index_pars.guesstext.focus();
}



function finishSuccessfull(){
    index_pars.hiddentext.style.backgroundColor="green"; 
    setMode(false); 
}




function animateSuccess(runAfter){
    index_pars.tadasound.play();
    let digs=0;
    let myinterval = setInterval(function(){     
        digs++;
        index_pars.hiddentext.textContent = index_pars.target.substring(0,digs);
    },200);
    setTimeout(function(){
        clearInterval(myinterval);
        runAfter();      
    },900)
}



