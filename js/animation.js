var supportedCSS;
var styles=document.getElementsByTagName("head")[0].style;
var toCheck="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");

for (var a=0; a<toCheck.length; a++) 
    if (styles[toCheck[a]] !== undefined) 
        supportedCSS = toCheck[a];
// Bad eval to preven google closure to remove it from code o_O
// After compresion replace it back to var IE = 'v' == '\v'
var IE = eval('"v"=="\v"');

function rotate1()
{
    alert("Rotate1 Called.");
    jQuery('#Rotate').rotate({
        angle:0,
        animateTo:360
    });
}