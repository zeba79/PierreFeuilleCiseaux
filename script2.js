// Création des constantes de récupération des items par leur Id
const imagePierre = document.getElementById("pierre");

const imageFeuille = document.getElementById("feuille");

const imageCiseaux = document.getElementById("ciseaux");

const message =document.getElementById("message");

const rejouer = document.getElementById("rejouer");

// Ajout d'évènement à chaque image
imagePierre.addEventListener("click", clickPierre);
imageFeuille.addEventListener("click", clickFeuille);
imageCiseaux.addEventListener("click", clickCiseaux );

// Définition du choix de l'ordi et les choix possibles
let choixOrdinateur;
const choixPoissible = ["PIERRE", "FEUILLE", "CISEAUX"];


choixOrdinateur = (Math.random()*2).toFixed(0); // toFixed(0)= arrondir les valeurs à 0
message.innerHTML = "Le choix de l'ordinateur est fait, à vous de jouer...";

// Création des fonctions
function clickPierre(){
    imagePierre.style.border = "thick solid #0000FF";

    verification(0);
}
function clickFeuille(){
    imageFeuille.style.border = "thick solid #0000FF";
    verification(1);
}
function clickCiseaux(choixJoueur){
    imageCiseaux.style.border = "thick solid #0000FF";
    verification(2);
}

function verification(choixJoueur){
    let gagnant;
    if(choixJoueur == choixOrdinateur){
        gagnant = "Match nul !";
    } else if((choixJoueur == 0 && choixOrdinateur == 2) || (choixJoueur == 1 && choixOrdinateur == 2) || (choixJoueur == 2 && choixOrdinateur == 1)){
        gagnant = "Vous avez gagné";
    } else {
        gagnant = "L'ordinateur à gagné";
    }
    message.innerHTML = "Le choix de l'ordinateur est : " + choixPoissible[choixOrdinateur] + "<br>" + "Votre choix est " + choixJoueur + "<br>" + gagnant;


    verification(1);
}
function clickFeuille(){
    imageFeuille.style.border = "thick solid #0000FF";
    verification(2);
}
function clickCiseaux(){
    imageCiseaux.style.border = "thick solid #0000FF";
    verification(3);
}


