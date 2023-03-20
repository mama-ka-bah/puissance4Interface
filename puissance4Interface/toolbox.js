/**
 * Contient les fonctions independant et reutilisable partout
 */

// const prompt = require ( 'prompt-sync' ) ( ) ;


var toolbox = {
    // saisieString: function saisiString(txt){
    //     return prompt(txt);
    // },
    /**
 * permet d'initiliser un tableau à  multiple dimesnsion en fonction des parametre "nombre de ligne" et "nombre de colonne"
 * @param {number} nbLigne 
 * @param {number} nbColonne 
 * @param {*} car 
 * @returns 
 */
 initialiserTableauVide: function (nbLigne, nbColonne, car=''){
    var tab = [];

    for(var i  = 0; i<nbLigne; i++ ){
        var lignes = [];
        for(var j = 0; j<nbColonne; j++){
            lignes.push(car);
        }
        tab.push(lignes);
    }

    return tab;
}
}

