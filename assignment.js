function convert(minute) {
    let calculate = minute * 60;
    return calculate;

}

let input = prompt("Enter in minute to be converted to seconds")

let solution = convert(Number(input));

console.log(solution);
document.getElementById('solution').innerHTML = `${input} minute is equals to ${solution} seconds`