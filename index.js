const digits=4
const hidden= document.getElementById('hidden')
const playbtn= document.getElementById('playbutton')
playbtn.addEventListener('click', animateRandomNumber)
let randomNumber;


function startGame(){
    randomNumber=getRandomNumber()    
    hidden.textContent = randomNumber+"****"  
}

function animateRandomNumber(){
    //hidden.style.backgroundColor = 'bisque'
    let myinterval = setInterval(function(){     
        hidden.textContent = Math.floor(Math.random() * 9999)
    },100);
    setTimeout(function(){
        clearInterval(myinterval)
        hidden.textContent = "****"
        startGame()
    },1000)

}

function getRandomNumber(){
    let rawNums=[0,1,2,3,4,5,6,7,8,9]
    let res = ""
    for(let i=0;i<digits;i++){
        const pos = 10-i
        const randomNumber = Math.floor(Math.random() * pos)        
        res = rawNums[randomNumber] + res
        rawNums[randomNumber] = rawNums[pos-1]
    }
    return res
}
