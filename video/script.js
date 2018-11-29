window.onload = function init(){
    document.getElementById("btn1").style.visibility = 'hidden';
    document.getElementById("btn2").style.visibility = 'hidden';
    document.getElementById("Text").style.visibility = 'hidden';
}
document.getElementById("video").addEventListener("ended", myFunction);

function myFunction() {
   
    document.getElementById("btn1").style.visibility = 'visible';
    document.getElementById("btn2").style.visibility = 'visible';
    document.getElementById("Text").style.visibility = 'visible';
}