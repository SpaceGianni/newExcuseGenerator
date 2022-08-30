

var who = ['the dog','my granma','his turtle','my bird'];
var what = ['eat','pissed','crushed','broked'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

var randomWho = who[Math.floor(Math.random()*3)];
var randomWhat = what[Math.floor(Math.random()*3)];
var randomWhen = when[Math.floor(Math.random()*4)];

function onLoad () {
    //console.log(randomWho + " "+ randomWhat + " "+ randomWhen);
    document.querySelector("#excuse").innerHTML = randomWho + " "+ randomWhat + " "+ randomWhen;
}

onLoad();


 
