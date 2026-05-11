let form = document.getElementById("loginAccess");
form.addEventListener("submit" , function(e){
e.preventDefault()


let number = document.getElementById("number").value.trim();
let result = "";

if(number === ""){
    result = "Enter your Account number";
    result.style.color = "red";
} else if(number.length != 10){
    result = "Please enter a valid account Number";
} else{
    let slice1 = number.slice(0,3);
    let slice2 = number.slice(6);

    number = `${slice1}xxx${slice2}`

}
    



})
