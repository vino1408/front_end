const input = document.getElementById("in");
const but = document.getElementById("but");
const todolist = document.getElementById("todolist");

but.addEventListener("click", function() {

    if (input.value === "")
        return;

    // write code here
      var a=input.value;
      todolist.innerHTML +=<li>hb</li>;
      input.value = "";
    
  
})
function d(event){
    event.target.parentNode.remove();
}

;