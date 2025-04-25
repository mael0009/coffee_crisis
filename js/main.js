
///////// knap 1//
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
    hideSideMessages();
    document.querySelector("#sideMessage").style.display = "block";

});



////////// knap 2//
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
    hideSideMessages();
    document.querySelector("#sidemessage").style.display = "block";
});

////////// knap 3//
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
    hideSideMessages();
    document.querySelector("#side-message").style.display = "block";
});


function hideSideMessages() {
    document.querySelector("#sideMessage").style.display = "none";
    document.querySelector("#sidemessage").style.display = "none";
    document.querySelector("#side-message").style.display = "none";
}


///// NEWS //////
// document.querySelector("#cta_btn1").addEventListener("click", openDialog1);
// function openDialog1() {
//   document.querySelector("#cta_btn1").showModal();
// }

// const closeBtn=document.querySelector("#closeBtn");closeBtn.addEventListener("click", closeDialog1);
// functioncloseDialog() {
// document.querySelector("#cta_btn1").close();
// }



/// DIALOG ////
// const openBtn = document.querySelector(".news_card .read-more");
 

// function openDialog(){
//     dialog.showModal();
// }

// function closeDialog(){
//     dialog.close();
// }

//////////

// function headInfo() {
//     console.log ("headInfo");
//     document.querySelector(".info-text > h2").textContent = "top";
//    document.querySelector(".info-text > article > p").textContent = 
// "lorem"
// }

///////SUMMARY CODE///////
// console.log(document.querySelector("#").value);

// const submit=document.querySelector("#submit_btn");
// const street=document.querySelector("#sumName");

// submit.addEventListener("click" ,submitform);

// function submitform(){
//     Name.textContent = document.querySelector("#")
//     document.querySelector("#").textContent = document.querySelector("#").value;

///// SELECT / OPTION////////
    // document.querySelector("#sumType").textContent = document.querySelector("#zombie-type")

/////// RADIO BUTTONS///////
// document.querySelector("#form-group-radio").textContent = document.querySelector('input[name="konsultation"]:checked').value;

//////// CHECKBOXES//////
// const checkboxes = document.querySelectorAll('input=[name="behavior"]:checked');
// console.log(checkboxes.value);
// const myArray = [];
// checkboxes.forEach(lavListe);
// function lavListe(element){
//     myArray.push(Element.value);
// }
// console.log(myArray);
// document.querySelector("#sumBehaviour").textContent = myArray.join(",");

// document.querySelector("#reset_btn").addEventListener("click", reset);
// function reset(){
// document.querySelector("#webform").reset();
// document.querySelector("#sum").style.display = "none";
// }