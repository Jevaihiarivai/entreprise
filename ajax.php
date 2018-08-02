<?php
require('../../connexion.php');

extract($_POST);//crée des variables nommées au nom des indices et qui comportent les valeurs correspondantes
// ceci fait $prenom = $_POST['prenom']

$requete = "INSERT INTO employes (prenom) VALUES ('$prenom')";
$resultat = $bdd -> query($requete);
