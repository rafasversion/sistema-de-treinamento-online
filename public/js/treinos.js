var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("ver-video");
var span = document.getElementsByClassName("close");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}