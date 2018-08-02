// neutraliser le bouton submit

document.addEventListener("DOMContentLoaded", function(event){

  document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault(); // annule le comportement par defaut du submit
    ajax();
  });
  function ajax(){

    if (window.XMLHttpRequest) {  // Tous navigateurs sauf explorer
      xhttp = new XMLHttpRequest();
    }
    else{
      xhttp = ActiveXObject("Microsoft.XMLHTTP"); // Pour internet explorer
    }
    var infos = document.getElementById('employe');
    var prenom = infos.value;
    var parametre ="prenom="+prenom; // On va passer ce parametre à notre fichier PHP (en POST)
    //et donc le fichier ajax.php => $_POST = array('prenom'=>'valeur de la variable prenom')
    xhttp.open('POST', 'ajax.php', true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(parametre);
    console.log(xhttp.responseText);
    document.getElementById('reponse').innerHTML='<div style="padding:5px; color:white; background:green">Employé '+infos.value+' enregistré</div>';

    document.getElementById('employe').value='';
  }
});
