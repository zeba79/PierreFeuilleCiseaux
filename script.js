// Création des constantes de récupération des images par leur Id
const imagePierre = document.getElementById("pierre");
imagePierre.addEventListener("click", clickPierre );

function clickPierre(){
    imagePierre.setAttribute("style", "border:yellow;");
}


console.log(imagePierre);

const imageFeuille = document.getElementById("feuille");
imageFeuille.addEventListener("click", function(){ alert('Yess') })
console.log(imageFeuille);

const imageCiseaux = document.getElementById("ciseaux");
imageCiseaux.addEventListener("click", function(){ alert('Ok') })
console.log(imageCiseaux);

// Création constante de récupération la section d'affichage score
const message =document.getElementById("message");
console.log(message);

// Création constante de récupération bouton rejouer
const rejouer = document.getElementById("rejouer");
console.log(rejouer);
rejouer.addEventListener("click", function(){ alert('arrêtes de cliquer sur moi et joue !')})

// Ajout d'évènement à chaque image

