// Création des constantes de récupération des items par leur Id
const imagePierre = document.getElementById("pierre");
const imageFeuille = document.getElementById("feuille");
const imageCiseaux = document.getElementById("ciseaux");
const message =document.getElementById("message");
const rejouer = document.getElementById("rejouer");
const regles = document.getElementById("regles");
const reglesDuJeu = document.getElementById("reglesDuJeu");
const cacherLesRegles = document.getElementById("acherLesRegles");

cacherLesRegles.addEventListener("click", cacherLesReglesDuJeu);

function cacherLesReglesDuJeu(){
    regles.setAttribute("style","visibility:hidden;  height:1px;");

}

reglesDuJeu.addEventListener("click", afficherRegles);

function afficherRegles(){
    regles.setAttribute("style","visibility:visible;  height: 100%;");
}

// Ajout d'évènement sur e bouton "Rjouer"
rejouer.addEventListener("click", function(){init();})

// Définition du choix de l'ordi et les choix possibles
let choixOrdinateur;
const choixPoissible = ["PIERRE", "FEUILLE", "CISEAUX"];

function init(){     
    // Ajout d'évènement à chaque image
    imagePierre.addEventListener("click", clickPierre);
    imageFeuille.addEventListener("click", clickFeuille);
    imageCiseaux.addEventListener("click", clickCiseaux );

    imagePierre.style.border = "1px solid green";
    imageFeuille.style.border = "1px solid green";
    imageCiseaux.style.border = "1px solid green";
    
    choixOrdinateur = (Math.random()*2).toFixed(0); // toFixed(0)= arrondir les valeurs à 0
    message.innerHTML = "Le choix de l'ordinateur est fait, à vous de jouer...";
    
}

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
//  Création de la fonction pour comparer les choix entre jouer et ordinateur
function verification(choixJoueur){
    let gagnant;
    if(choixJoueur == choixOrdinateur){
        gagnant = "Match nul, retantez votre choix !";
    } else if((choixJoueur == 0 && choixOrdinateur == 2) || (choixJoueur == 1 && choixOrdinateur == 2) || (choixJoueur == 2 && choixOrdinateur == 1)){
        gagnant = "Bravo vous avez gagné";
    } else {
        gagnant = "Dommage, l'ordinateur à gagné";
    }
    message.innerHTML = "Le choix de l'ordinateur est : " + choixPoissible[choixOrdinateur] + "<br>" + "Votre choix est " + choixJoueur + "<br>" + gagnant;

    // Suppression des évènements
    imagePierre.removeEventListener("click", clickPierre);
    imageFeuille.removeEventListener("click", clickFeuille);
    imageCiseaux.removeEventListener("click", clickCiseaux);
}

init();