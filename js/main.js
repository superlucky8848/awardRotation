let querys = new URLSearchParams(window.location.search);

let options = [];

var awards=[];
var awardValues=[];
var total=0;

for (let i=1; i<=8; ++i)
{
    let key = "key" + i;
    let value = "value" + i;
    if(querys.has(key) && querys.has(value))
        options.push(
            {
                "key" : querys.get(key), 
                "value" : querys.get(value)
            });
}

let ulRotate = document.querySelector("ul#Rotate");
options.forEach((item, index) =>
{
    let li = document.createElement("li");
    li.className="option op"+(index+1).toString();
    li.innerHTML = item.key;
    ulRotate.appendChild(li);
    awards.push(item.key);
    total+=Number(item.value);
    awardValues.push(total);
});

//window.onload = windowLoad;