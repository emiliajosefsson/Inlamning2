
var valueList = [];

function calculateTotal(event){
event.preventDefault();


var options  = document.querySelector("#count-option")


if (options.value==="+"){ //när användare väljer plus
    var desc = document.querySelector("#description").value;
    var adding = document.querySelector("#values").value;
    
    valueList.push( Number(adding) ) //konverterar till siffra

    var incomeData =  document.querySelector(".income-data")
    incomeData.innerText = adding;

    var li = document.createElement("li");

    li.innerText = desc + " : " + adding; 

    var ul = document.querySelector(".list-income")

    ul.appendChild(li);
}
else if(options.value==="-"){ //när användare väljer minus
    var desc = document.querySelector("#description").value;
    var adding = document.querySelector("#values").value;

    valueList.push( Number(-adding) ); //konverterar till siffra


    var costData =  document.querySelector(".cost-data")
    costData.innerText = adding;
    
    var li = document.createElement("li");

    li.innerText = desc + " : " + adding;
    var ul = document.querySelector(".list-cost");

    ul.appendChild(li);

}

var summa = 0;
for (var i = 0; i < valueList.length; i++ ) {
    summa +=valueList[i];

    
}



var savingTotal = document.querySelector("#saving-data")
savingTotal.innerText = summa;

if( summa < 0) { //Gör texten röd in det är minusbelopp
    
    document.getElementById("saving-data").style.color = "red";
    
   
} else {
    document.getElementById("saving-data").style.color = "black";
}


}


var btn = document.querySelector("#add")
btn.addEventListener("click", calculateTotal);

//function för att rensa sidan 
function eraseList () {
    location.reload();
}

var erase = document.querySelector(".eraseList")

erase.addEventListener("click", eraseList)

