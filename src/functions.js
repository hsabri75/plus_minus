
const digits=4;

function getRandomNumber(){
    let rawNums=[0,1,2,3,4,5,6,7,8,9];
    let res = "";
    for(let i=0;i<digits;i++){
        const pos = 10-i;
        const randomNumber = Math.floor(Math.random() * pos); 
        res = rawNums[randomNumber] + res;
        rawNums[randomNumber] = rawNums[pos-1];
    }
    return res;
}

function isValid(num) {
    console.log(num);
    for(let i=0;i<num.length;i++){
        if(!/\d/.test(num[i])){
            console.log("not number");
            return false;
        }else{
            for(let j=0; j<i;j++){
                if(num[i]==num[j]){
                    console.log("repeating");
                    return false;
                }
            }
        }
    }
    return true;
}

function getPlusMinus(num, target){
    let pl=0;
    let mn=0;
    for(let i=0;i<num.length;i++){
        if(num[i]==target[i]){
            pl++;
        }else{
            for(let j=0;j<num.length;j++){               
                if(num[i]==target[j]){
                    mn++
                }              
            } 
        }
    }
    return "+ ".repeat(pl)+"- ".repeat(mn);
}

const funcs= {isValid, getRandomNumber, getPlusMinus}

module.exports= funcs;

//export {funcs};