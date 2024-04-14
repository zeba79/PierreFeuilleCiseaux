<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Pierre Feuille Ciseaux</title>
  </head>
  <body>
    <div class="container">
        <h1 class="bandeau shadow-lg p-3 mt-2 mb-5 rounded text-center">
            Bonjour et bienvenue sur notre jeu culte ! </h1>
    </div>
    <div class="container text-center mb-3 ">
      <a href="#regles" class="nav nav-link bandeau p-2 mt-2 mb-2 rounded" id="reglesDuJeu">
          Accéder aux règles du jeu
      </a>
        <button type="button" class="bandeau p-2 mt-2 mb-2  rounded" id="rejouer" >Rejouer</button>
    </div>
    </div>
    <div class="container text-center ">
        <img src="/assets//img/Pierre.png" alt="pierre" id="pierre" class="green" >
        <img src="/assets/img/Feuille.png " alt="Feuille" id="feuille"  class="green" >
        <img src="/assets/img/Ciseaux.png " alt="Ciseaux" id="ciseaux"  class="green" >
      </div>

<div class="container " id="regles">
<h3  class="mt-5" >Règles du jeu</h3>
  <ol class="list-group list-group-numbered">
    <li class="list-group-item" >Pour jouer, faites votre choix sur les 3 images(Pierre - Feuille et Ciseaux)</li>
    <li class="list-group-item" >Le résultat s'affiche en bas de l'écran</li>
    <li class="list-group-item" >Fin de la partie</li>
    <li class="list-group-item" >Pour refaire une nouvelle partie, cliquez sur "Rejouer" au-dessus 3 des images</li>
  </ol>
  <div class="container text-center mb-3 ">
    <button type="button" class="bandeau p-2 mt-4 mb-2  rounded" id="acherLesRegles" >Cacher les règles du jeu</button>
  </div>
</div>

    <div class="container text-center mt-5 bandeau p-3 rounded" id="message"></div>

    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>
<script src="/script.js"></script>
  </body>
</html>
