console.log("hello world") /* Probando la conexión con javascript*/


/* Ejercicio Counting Sheeps*/

function countSheeps(list) {
    let sheepCount = 0;  /* Se inicializa el contador de ovejas en 0 */

    /*  Se recorremos la lista*/
    for (let i = 0; i < list.length; i++) {
        /*Si el valor actual es "true", se cuenta como oveja*/
        if (list[i] === true) {
            sheepCount++;
        }
    }

    /* Condicional if*/
    if (sheepCount > 0) {
        console.log (`There are ${sheepCount} sheep in total`);
    } else {
        console.log ('Oops! Wolves have eaten all the sheep!');
    }
}


/*Caso 1: los "true" son ovejas, los "false" son lobos */
let list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
countSheeps(list1); 
/*Caso 2: lista de solo lobos*/
let list2 = [false, false, false, true];
countSheeps(list2); 