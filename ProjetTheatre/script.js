
// script.js
function BonneReponse() {
    document.getElementById("status").textContent = "Bonne Réponse";
}

function MauvaiseReponse() {
    document.getElementById("status").textContent = "Mauvaise Réponse";
    var button = document.createElement("button");
    button.textContent = "Réponse Correcte";
    button.onclick = BonneReponse;
    document.body.appendChild(button);
}
