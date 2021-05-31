console.log("JS chargé");

// création d'un élement DOM: <h1></h1>
const titre = document.createElement('h1');

// modification de cet élement: Ajout tu texte
titre.innerText = "Recette de pâte à crêpes";

// Ajout de l'élement au DOM: j'attache le titre au body
const body = document.querySelector("body"); // récup du noeud <body><body>

body.appendChild(titre); // Attachement du titre au body

/*
ÉTAPE 1
Dans un saladier, mélanger la farine, le sel et le sucre.
ÉTAPE 2
Faire une fontaine.
ÉTAPE 3
Ajouter les oeufs et commencer à les incorporer à la farine avec une cuillère en bois, ajouter le beure fondu (tiédi) peu à peu et bien malaxer.
ÉTAPE 4
Incorporer le lait (par petites quantités au début pour éviter les grumeaux), ajouter le parfum.
ÉTAPE 5
Faire cuire les crêpes dans une poêle chaude huilée.
*/

// Etape 1
const et1 = document.createElement('h2');
et1.innerText = "Etape 1";
const et1Desc = document.createElement('p');
et1Desc.innerText = "Dans un saladier, mélanger la farine, le sel et le sucre.";
body.appendChild(et1);
body.appendChild(et1Desc);

const et2 = document.createElement('h2');
et2.innerText = "Etape 2";
const et2Desc = document.createElement('p');
et2Desc.innerText = "Faire une fontaine.";
body.appendChild(et2);
body.appendChild(et2Desc);

const et3 = document.createElement('h2');
et3.innerText = "Etape 3";
const et3Desc = document.createElement('p');
et3Desc.innerText = "Ajouter les oeufs et commencer à les incorporer à la farine avec une cuillère en bois, ajouter le beure fondu (tiédi) peu à peu et bien malaxer.";
body.appendChild(et3);
body.appendChild(et3Desc);

const et4 = document.createElement('h2');
et4.innerText = "Etape 4";
const et4Desc = document.createElement('p');
et4Desc.innerText = "Incorporer le lait (par petites quantités au début pour éviter les grumeaux), ajouter le parfum.";
body.appendChild(et4);
body.appendChild(et4Desc);

const et5 = document.createElement('h2');
et5.innerText = "Etape 5";
const et5Desc = document.createElement('p');
et5Desc.innerText = "Faire cuire les crêpes dans une poêle chaude huilée.";
body.appendChild(et5);
body.appendChild(et5Desc);
