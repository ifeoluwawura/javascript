let convertTo = document.getElementById('convertTo');


convertTo.addEventListener("submit", function(e) {
    e.preventDefault();

    let userInput = document.getElementById('userInput');
    let message = document.getElementById('message');

    let minutes = Number(userInput.value);

    if (minutes === ""){
        message.innerHTML = "Enter a number in minutes to be converted to seconds"
        message.style.color = "black"
    }    
   else if (Number.isInteger(minutes)){
        let seconds = minutes * 60;
        message.innerText = minutes + " minutes is " + seconds + " seconds";
        message.style.color = "green";
    } else{
        message.innerText = "Please enter a whole number (integer).";
        message.style.color = "red";
    }
    

})


  