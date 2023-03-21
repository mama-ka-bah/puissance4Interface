const tour = document.querySelector("#tour");
var joueurEncours = 1;
var finJeu = false;
const alert = document.querySelector(".alert");
const messageJ1 = document.querySelector("#j1");
const messageJ2 = document.querySelector("#j2"); 

var pointJ1 = 0;
var pointJ2 = 0;

initialisationTableau();

// function choixCaractere(joueur){
//     var txt = "Veuillez choisir le caractere que vous voulez pour le joueur " + joueur + " : ";
//     return toolbox.saisieString(txt);
// }



function jouer(colonne){ 
    if(!finJeu){
        var ligneVide = jeu.retournerLigneCaseVideColonne(colonne);
        if(ligneVide !== -1){
            jeu.jouerCase(joueurEncours, ligneVide, colonne); 
            jeu.afficherPuissance4();
            if(jeu.verificationFinJeu(joueurEncours)){
                // console.log("Le joueur " + joueurEncours + " a gagné");
                gererFinJeu();
            }
    
            if(joueurEncours === 1){
                joueurEncours = 2;  
                tour.innerHTML = "Tour du joueur 2";
            }else{
                joueurEncours = 1;
                tour.innerHTML = "Tour du joueur 1";
            }
        }
    }

}

function initialisationTableau(){
    finJeu = false;
    joueurEncours = 1;
    alert.classList.add("d-none"); 
    var contentJ1 = "<img src='./images/J1.png' class='bg-danger rounded-circle'> <br> ";
    contentJ1 += pointJ1;
    messageJ1.innerHTML = contentJ1;

    var contentJ2 = "<img src='./images/J2.png' class='bg-info rounded-circle'> <br> ";
    contentJ2 += pointJ2;
    messageJ2.innerHTML = contentJ2;

    jeu.initialisation();
    jeu.afficherPuissance4();
}

function gererFinJeu(){
    finJeu = true;
    var contentAlert = "Partie terminée, le gagnant est : " + joueurEncours + "<br />";
    contentAlert += "<button type='button' class='btn btn-secondary' onClick='initialisationTableau()'>Recommencez</button>";
    alert.innerHTML = contentAlert;
    alert.classList.remove("d-none");

    if(joueurEncours === 1){
        pointJ1++;
    }else{
        pointJ2++;
    }
}








