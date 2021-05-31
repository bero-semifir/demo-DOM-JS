const bonGout = document.querySelector("p.bonGout");

const emailInput = document.querySelector("#email");

const alerteMail = document.getElementById("alerteMail");

emailInput.addEventListener("input", verifMail);

function verifMail(){
    console.log(emailInput.value);
    if(emailInput.value !== "poulet@gmail.com"){
        document.querySelector("button").disabled = true;
        alerteMail.classList.remove("hidden")
    }else{
        document.querySelector("button").disabled = false;
        alerteMail.classList.add("hidden")
    }
}

// écouteur d'événement sur l'élement bonGout
// il déclenche la fonction à chaques clics
bonGout.addEventListener("click", (event)=>{
    console.log(event);
})