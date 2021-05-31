// alternative pour créer toutes les étape en une seule fois

console.log("JS chargé");

// création d'un élement DOM: <h1></h1>
const titre = document.createElement('h1');

// modification de cet élement: Ajout tu texte
titre.innerText = "Recette de pâte à crêpes";

// Ajout de l'élement au DOM: j'attache le titre au body
const body = document.querySelector("body"); // récup du noeud <body><body>

body.appendChild(titre); // Attachement du titre au body

// tableau qui contient les étapes
const etapes = [
    "Dans un saladier, mélanger la farine, le sel et le sucre.",
    "Faire une fontaine.",
    "Ajouter les oeufs et commencer à les incorporer à la farine avec une cuillère en bois, ajouter le beure fondu (tiédi) peu à peu et bien malaxer.",
    "Incorporer le lait (par petites quantités au début pour éviter les grumeaux), ajouter le parfum.",
    "Faire cuire les crêpes dans une poêle chaude huilée.",
];
// compteur: pour compter les étapes
let i = 1;

// itération sur les étapes
etapes.forEach(etape => {
    ajouterEtape(etape);
    // incrémentaton du compteur
    i++;
})

function ajouterEtape(etape) {
    // création du titre
    const h2 = document.createElement('h2');
    // remplissage du titre
    h2.innerText = `Etape ${i}`;
    // création de la descrption
    const desc = document.createElement('p');
    // remplissage de la description
    desc.innerText = etape;
    // attachement des noeuds DOM
    body.appendChild(h2);
    body.appendChild(desc);
}
