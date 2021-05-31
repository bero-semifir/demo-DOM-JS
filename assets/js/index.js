// Récup d'élements
const bonGout = document.querySelector("p.bonGout");

const emailInput = document.querySelector("#email");

const alerteMail = document.getElementById("alerteMail");

// Écoute de l'événement "input" sur <input/>
emailInput.addEventListener("input", verifMail);

// la fonction qui vérifie que l'email correspond à la valeur indiquée
function verifMail(){
    console.log(emailInput.value);
    // Modification du DOM
    if(emailInput.value !== "poulet@gmail.com"){
        document.querySelector("button").disabled = true;
        alerteMail.classList.remove("hidden");
    }else{
        document.querySelector("button").disabled = false;
        alerteMail.classList.add("hidden");
    }
}

// écouteur d'événement sur l'élement bonGout
// il déclenche la fonction à chaques clics
bonGout.addEventListener("click", (event)=>{
    console.log(event);
    console.log(bonGout);
    bonGout.style.color = "red";
})