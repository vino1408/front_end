const input = document.getElementById("in");
const but = document.getElementById("but");
const todolist = document.getElementById("todolist");

but.addEventListener("click", function() {

    if (input.value === "")
        return;
    var a=input.value;
    todolist.innerHTML+=`<li>${a} <button onclick='d(event)'>x</button></li>`
    
  
})
function d(event){
    event.target.parentNode.remove();
}
;