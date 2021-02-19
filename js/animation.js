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
    let choise = Math.floor(Math.random()*8+1);
    
    jQuery('#Rotate').rotate({
        'angle' : 0,
        'animateTo' : 382.5 + 3600 - 45*choise,
        'duration': 5000
    });

    alert("抽到奖品 "+ choise.toString());
}