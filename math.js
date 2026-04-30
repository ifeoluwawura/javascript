
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function completeSolution(){
let randomNumber1 = getRandom(1,100);
let randomNumber2 = getRandom(1,100);
let min = Math.min(randomNumber1, randomNumber2)
let final = min * (randomNumber1 + randomNumber2)
                                                                                                                                                                                                                                                                                                 

document.getElementById('solution').innerHTML = `The first generated number is ${randomNumber1} and the second is ${randomNumber2} . The minimum between the two of them is ${min} . The final computation based on the assignment is ${final}`
}


    

