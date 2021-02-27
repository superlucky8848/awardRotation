var awards=[];
var awardValues=[];
var total=0;

function fillPrizeWheel(options)
{
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
}

function getPrizePool(poolName)
{
    //console.log("GetPrizePool");
    let req = new XMLHttpRequest();
    req.open("GET", "pool/" + poolName + ".json");
    req.responseType="json";
    req.send();
    req.onload=function()
    {
        let options = req.response.options;
        //console.log(options);
        fillPrizeWheel(options);
    }
}

let poolName = "sample";

let querys = new URLSearchParams(window.location.search);
if(querys.has("poolName"))
{
    poolName = querys.get("poolName");
    getPrizePool(poolName);
}
else
{
    let options=[];
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
    fillPrizeWheel(options);
}


//window.onload = windowLoad;