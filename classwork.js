function product(a, b){
    let input= a ** 2 + b ** 2
    return input;
}

let firstInput= prompt('Enter First Input'); 
let secondInput= prompt('Enter Second Input');

let answer= product(parseInt(firstInput), parseInt(secondInput));

console.log(answer);
document.getElementById('answer').innerHTML = `The product of ${firstInput} and ${secondInput} is ${answer}`