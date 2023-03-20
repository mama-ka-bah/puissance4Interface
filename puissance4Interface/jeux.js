// const toolbox = require("./toolbox");

var jeu = {
    
    puissance4 : [],
    nbColonne : 7,
    nbLigne : 6,
    joueur1Car : "x",
    joueur2Car : "o",

 
    initialisation: function(){
        this.puissance4 = toolbox.initialiserTableauVide(this.nbLigne, this.nbColonne, 0);
    },


    /**
     * 
     * @param {Array<String>} tab 
     * @param {String} j1car le car de j1
     * @param {String} j2car le car de j2
     */

    afficherPuissance4 : function ( ){
        const jeu = document.querySelector("#jeu");
        jeu.innerHTML = "";

        var content = "<table>";

        for(var i = 0; i<this.nbLigne; i++){
            content += "<tr>";
            for(var j = 0; j < this.nbColonne; j++){
                    content +=  "<td class='border text-center' style='width:100px; height:100px'>";

                    if(this.puissance4[i][j] === 0){
                        content += "";
                    }else if(this.puissance4[i][j] === 1 ){
                        content += "<img src='./images/J1.png' class='bg-danger rounded-circle'>";
                    }else if(this.puissance4[i][j] === 2){
                        content +=  "<img src='./images/J2.png' class='bg-info rounded-circle'>";
                    }

                    content += "</td>";
            }
            content += "</tr>";
        }

        content += "<tfoot>"
        content += '<tr>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(1)" >Colonne 1</button> </td>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(2)">Colonne 2</button> </td>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(3)">Colonne 3</button> </td>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(4)">Colonne 4</button> </td>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(5)">Colonne 5</button> </td>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(6)">Colonne 6</button> </td>';
            content += '<td> <button type="button" class="btn btn-secondary" onClick="jouer(7)">Colonne 7</button> </td>';
        content += '</tr>';
        content += "</tfoot>"

        content += "</table>";
        jeu.innerHTML = content;

    },

     jouerCase: function (joueur, ligne, colonne){
          this.puissance4[ligne][colonne-1] = joueur;
    },

    /**
     * Fonction permettant de retourner la premiere ligne vide d'une colonne
     * @param {Number} colonne retourne -1 si la colonne est pleine
     * @returns Number
     */
    retournerLigneCaseVideColonne: function (colonne){
        for(var i = this.nbLigne-1; i>=0; i--){
            if(this.verifCaseVide(i, colonne)) return i;
        }
        return -1;
    },

    /**
     * Permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en paramètre
     * @param {Number} ligne 
     * @param {Number } colonne 
     * @returns 
     */ 
    verifCaseVide: function (ligne, colonne){
        //return true if this condition is valid else it return false
        return this.puissance4[ligne][colonne - 1] === 0; 
    },

    /**
 * Fonction permettant de saisir une colonne
 * @returns number
 */
 saisirColonne: function(){
   
    return parseInt(toolbox.saisieString("Quelle colonne ? "));
   
},

    /**
     * 
     * @returns Boolen
     */
    verificationFinJeu: function (joueur){
        if(this.verificationLigneFinJeu(joueur) || this.verificationColonneFinJeu(joueur) || this.verificationDiagonaleFinJeu(joueur))
            return true;

        return false;
    },

    /**
     * Fonction permettant de verifier si on a gagné  en ligne
     * @param {Number} joueur 
     * @returns void
     */
    verificationLigneFinJeu : function (joueur){
        for(var i = this.nbLigne-1; i>=0;  i--){
            for(var j=0; j<this.nbColonne-3; j++){
                if(this.puissance4[i][j] === joueur &&
                this.puissance4[i][j + 1] === joueur &&
                this.puissance4[i][j + 2] === joueur &&
                this.puissance4[i][j + 3] === joueur) return true;
                
            }
        }

        return false;
    },

    /**
     * Fonction permettant de verifier si on a gagné en colonne
     * @param {Number} joueur 
     * @returns void
     */
    verificationColonneFinJeu: function (joueur){
        for(var i = 0; i < this.nbColonne;  i++){
            for(var j= this.nbLigne-4; j>=0; j--){
                if(this.puissance4[j][i] === joueur &&
                this.puissance4[j + 1][i] === joueur &&
                this.puissance4[j + 2][i] === joueur &&
                this.puissance4[j + 3][i] === joueur) return true;
                                
            }
        }
    
        return false;
    },


    /**
     * Fonction permettant de verifier si on a gagné en diagonal
     * @param {Number} joueur 
     * @returns void
     */
    verificationDiagonaleFinJeu : function (joueur){
        for(var i = this.nbLigne; i <= 3;  i--){
            for(var j= 0; j<this.nbColonne; j++){
                if(this.puissance4[i][j] === joueur &&
                this.puissance4[i - 1][j + 1] === joueur &&
                this.puissance4[i - 2][j+2] === joueur &&
                this.puissance4[i - 3][j + 3 ] === joueur) return true;

                if(this.puissance4[i][j] === joueur &&
                this.puissance4[i - 1][j - 1] === joueur &&
                this.puissance4[i - 2][j - 2] === joueur &&
                this.puissance4[i - 3][j - 3 ] === joueur) return true;
                                
            }
        }
    
        return false;
    }



}

// module.exports = jeu;