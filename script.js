// script.js

// Récupération des éléments du DOM
const inputTexte = document.getElementById("texte");
const affichage = document.getElementById("affichage");
const btnEnvoyer = document.getElementById("envoyer");
const btnAjouter = document.getElementById("bouton-add");
const btnModifier = document.getElementById("bouton-modif");
const btnEnregistrer = document.getElementById("bouton-enreg");
const formatEnreg = document.getElementById("format-enreg");

// Création dynamique du bouton Supprimer
const btnSupprimer = document.createElement("button");
btnSupprimer.textContent = "Supprimer";
btnSupprimer.id = "bouton-supprimer";
document.querySelector(".buttons").appendChild(btnSupprimer);

// Variable pour stocker le texte
let texteStocke = "";

// Bouton Envoyer : affiche le texte
btnEnvoyer.addEventListener("click", () => {
    texteStocke = inputTexte.value.trim();
    affichage.textContent = texteStocke || "Aucun texte saisi";
});

// Bouton Supprimer : vide le texte
btnSupprimer.addEventListener("click", () => {
    texteStocke = "";
    affichage.textContent = "";
    inputTexte.value = "";
});

// Bouton Modifier : permet de réécrire le texte
btnModifier.addEventListener("click", () => {
    if (texteStocke) {
        inputTexte.value = texteStocke;
    } else {
        alert("Aucun texte à modifier !");
    }
});