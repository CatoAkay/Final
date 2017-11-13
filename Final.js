//copiert fra w3c må omskrives
var imageIndex = 1;

function indexPlus(n){
    showIndex(imageIndex += n)
}
function showIndex(){
    var x = document.getElementsByClassName();
    if(n>x.length){imageIndex = 1;}
    if(n<1){imageIndex = x.length}
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }
    x[imageIndex-1].style.display = "block";
    setTimeout(imageIndex++, 8000);
}
//omskrivning


