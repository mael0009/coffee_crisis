document.querySelector("#formsubmit").addEventListener("click", function(e){
    e.preventDefault();
    createSummary()
});

function createSummary(){
    console.log("createSummary");

const userName = document.querySelector("#name").value;
const eMail = document.querySelector("#email").value;
const child = document.querySelector("#Kids").value;
const coffee = document.querySelector("#kaffe").value;
const stemning = document.querySelector("#situation").value;
const consultation = document.querySelector('input[name="consultation1"]:checked');
let consultationValue = consultation ? consultation.nextElementSibling.textContent : "Not selected";


document.querySelector("#form-summary article").innerHTML = `<p>${userName}</p>`;
document.querySelector("#form-summary article").innerHTML += `<p>${eMail}</p>`;
document.querySelector("#form-summary article").innerHTML += `<p>${child}</p>`;   
document.querySelector("#form-summary article").innerHTML += `<p>${coffee}</p>`;   
document.querySelector("#form-summary article").innerHTML += `<p>${stemning}</p>`;  
///Radio button///
document.querySelector("#form-summary article").innerHTML += `<p>${consultationValue}</p>`;
}


