function add(){
    var a=document.getElementById('a').value;
    var b=document.getElementById('b');
    let d=0;
    for(let i=0;i<a.length;i++){
        var c=a.charAt(i);
        if(c>='0'&& c<='9'){
            d++;
        }
    }
    b.textContent=d;
}