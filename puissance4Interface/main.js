const tour = document.querySelector("#tour");
var joueurEncours = 1;
var finJeu = false;
const alert = document.querySelector(".alert");

jeu.initialisation();
jeu.afficherPuissance4();



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

function gererFinJeu(){
    finJeu = true;
    alert.innerHTML = "Fin du jeu";
    alert.classList.remove("d-none");
}








