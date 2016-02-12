//slider 
function _(x){
    console.log(x);
    return document.getElementById(x);}
var ba, bi=0, intrvl;

var bca = [
    '<div id="rey1"><img  width="100%" height="500px" src="imagenes/1.jpg"></div>',
    '<div id="rey2"><img  width="100%" height="500px" src="imagenes/2.jpg"></div>',
    '<div id="rey3"><img  width="100%" height="500px" src="imagenes/3.jpg"></div>'
    
];

function bubbles(bi){
   
    _("bubblecontent").style.opacity = 0;
   
    for(var i=0; i < ba.length; i++){
        ba[i].style.background = "rgba(0,0,0,.1)";
    }
   
    ba[bi].style.background = "#222";
    
    setTimeout(function(){
      
        _("bubblecontent").innerHTML = bca[bi];
      
        _("bubblecontent").style.opacity = 1;
    }, 10);
}

function bubbleSlide(){
    
    bi++; 

    if(bi == ba.length){
        bi = 0; 
    }
    
    bubbles(bi);
}

window.addEventListener("load", function(){

    ba = _("bubbles").children; 
    intrvl = setInterval(bubbleSlide, 6000);
});