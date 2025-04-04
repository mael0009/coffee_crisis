
///////// knap 1
document.querySelector("#topcircle").addEventListener("mouseover",headHighlight);
document.querySelector("#topcircle").addEventListener("mouseout",headUnHighlight)

function headHighlight (){
    console.log("headUnHighlight")
    document.querySelector("#topcircle").style.fill = "#f00";
}

function headUnHighlight (){
    console.log("headUnhighlight");
    document.querySelector ("#topcircle").style.fill = "#fff";
}


document.querySelector("#topcircle").addEventListener("click", function() {
    document.querySelector("#sideMessage").style.display = "block";
});

////////// knap 2
document.querySelector("#midcircle").addEventListener("mouseover",headHighlight2);
document.querySelector("#midcircle").addEventListener("mouseout",headUnHighlight2)
function headHighlight2 (){
    console.log("headUnHighlight")
    document.querySelector("#midcircle").style.fill = "#f00";
}

function headUnHighlight2 (){
    console.log("headUnhighlight");
    document.querySelector ("#midcircle").style.fill = "#fff";
}

document.querySelector("#midcircle").addEventListener("click", function() {
    document.querySelector("#sidemessage").style.display = "block";
});

////////// knap 3
document.querySelector("#bottomcircle").addEventListener("mouseover",headHighlight3);
document.querySelector("#bottomcircle").addEventListener("mouseout",headUnHighlight3)

function headHighlight3 (){
    console.log("headUnHighlight")
    document.querySelector("#bottomcircle").style.fill = "#f00";
}

function headUnHighlight3 (){
    console.log("headUnhighlight");
    document.querySelector ("#bottomcircle").style.fill = "#fff";
}

document.querySelector("#bottomcircle").addEventListener("click", function() {
    document.querySelector("#side-message").style.display = "block";
});

//////////

function headInfo() {
    console.log ("headInfo");
    document.querySelector(".info-text > h2").textContent = "top";
   document.querySelector(".info-text > article > p").textContent = 
"lorem"
}

