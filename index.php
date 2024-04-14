<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style2.css">
    <title>Pierre Feuille Ciseaux</title>
  </head>
  <body>
    <div class="container">
        <h1 class="bandeau shadow-lg p-3 mt-2 mb-5 rounded text-center">
            Bonjour et bienvenue sur notre jeu culte ! </h1>
    </div>
    <div class="container text-center mb-5 ">
        <button type="button" class="bandeau p-2 mt-2 mb-2  rounded text-center" id="rejouer" >Rejouer</button>
    </div>
    <div class="container text-center ">
        <img src="/assets//img/Pierre.png" alt="pierre" id="pierre" class="green" >
        <img src="/assets/img/Feuille.png " alt="Feuille" id="feuille"  class="green" >
        <img src="/assets/img/Ciseaux.png " alt="Ciseaux" id="ciseaux"  class="green" >
    </div>

    <div class="container text-center mt-5 bandeau p-3 rounded" id="message">
        Messages
    </div>
    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>
<script src="/script2.js"></script>
  </body>
</html>
