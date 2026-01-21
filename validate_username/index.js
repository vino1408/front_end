const input = document.getElementById("username");
const message = document.getElementById("message");

input.addEventListener("input", function () {

    /* TODO 1: Get the current value of the input */

    /* TODO 2: Check if username length is at least 6 characters */

    /* TODO 3: Display "Valid Username" or "Invalid Username" accordingly */
    let len=false;
    let digit=false;
    var a=input.value;
    if(a.length>=6){
        // message.textContent="at least 6 characters"
        len=true;
    }
    for(let i=0;i<a.length;i++){
        if(!(a[i]>='a'&& a[i]<='z')){
            // message.textContent="Invalid Username"
            digit=true;
        }
    }
    if(!len){
        message.textContent="at least 6 characters"
    }
    if(digit){
        message.textContent="Invalid Username"
    }
    else if(len && !digit){message.textContent="valid Username"}

});
