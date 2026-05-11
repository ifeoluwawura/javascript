let convertTo = document.getElementById('convertTo');
let userInput = document.getElementById('userInput');
message = document.getElementById('message');

convertTo.addEventListener("submit", function(e) {
    e.preventDefault();

    let minutes = Number(userInput.value);
    let seconds = userInput * 60;

    message.innerText =  minutes + "minutes is" + seconds + "seconds";
})


  