let gridC
let gridCelda
let posicionC
let gridCf
let gridFicha
let posicionf
//guarda el numero de  nivel de la celda a la que tiene que llegar la ficha
var numero_celda_final;
//guardo  el limite de la celda final, 
var limite_celda_final;
//guardo el limite de la limite_ficha, sus coordenadas;
var limite_ficha;
var numero_celda_actual;
//funcion que me calcula si el limite de la celda final es igual o menor a el limite de la fuicha, se actualiza cada vez que se mueva la ficha, sirve para evaluar hasta donde se tiene que mover la ficha. celda es la celda que se esta actualizando  cada vez que la ficha suba de nivel, y level_up_steam es el numero de la celda al que tiene que llegar la ficha,  limit_ficha es el limite o las coordenadas de la ficha actualizadas
export default function limit_celda(celda, level_up_string, limit_ficha, $given_shift, ficha){
    //en estas varibles se guardan el numero de la celda que esta parado la ficha en formato numerico.
    numero_celda_actual = celda.textContent
    numero_celda_actual = Number(numero_celda_actual)
    numero_celda_final = Number(level_up_string);
    //cuando la celda que esta parada la ficha es gual al numero de la celda a la que tiene que llegar:
    console.log(`booleano es ${$given_shift.new_result} la ficha esta en el nivel ${numero_celda_actual} y se movera hasta ${numero_celda_final}`)
    if(numero_celda_actual === numero_celda_final){
        //guardo la celda a la que tiene que llegar la ficha
        const $celda_final = document.getElementById(level_up_string);

        //esta funcion obtiene la ubicacion en la grid dela ficha y la celda, el paraametro grid es gridcolum o gridrow, segun sea el caso(ya qye la celda a necesito la ubucacion de gridcolumn el ultimo numero y y cuando  esta en la celda 4 gridrow la ubi del ultimo numero(3 / 4), o  si es la celda 7 nencesito gridcolumn pero el numero primero(3/4) necesito el 3) de manera que obtenga dos variables de las ubicaciones de la grid de la ficha y celda para determinar si ya estan en la misma ubicacion. caracter es que si es / busque los ultimos numero 3 / 4  extraiga el 4 de la grid column o row segun el caso, si es una letra que extraiga directamente el primer numero para comparar
        function parametros_mov(grid, caracter){
            // en grid celda guardo los valores de la propiedad gridcolumn o gridrow segun la celda en que este. lo mismo apara la fucha
            gridC = window.getComputedStyle($celda_final);
            gridCelda = gridC.getPropertyValue(grid);

            gridCf = window.getComputedStyle(ficha);
            gridFicha = gridCf.getPropertyValue(grid);
            //si es / para que extraiga los dos ultimos numeros y los guarde en la ficha y celda respectivamente
            if(caracter === "/"){
                posicionC = gridCelda.indexOf(caracter);
                posicionC = posicionC + 2;
                gridCelda = gridCelda.slice(posicionC)

                posicionf = gridFicha.indexOf('/');
                posicionf = posicionf + 2;
                gridFicha = gridFicha.slice(posicionf)

            }else{
                gridCelda = gridCelda.slice(0, 2)
                gridFicha = gridFicha.slice(0, 2)
            }
            //console.log(` la celda final LLEGA  HASTA en la grid es:  ${gridCelda} y la ficha es ${gridFicha}`)

        }
        //si la ficha es 1 o 2 o 3..., ejecuto la funcion parametros_mov para extraer la ubicacion en la grid de la celda y ficha respectivamente
        if(numero_celda_actual == 1 || numero_celda_actual == 2 || numero_celda_actual == 3 || numero_celda_actual == 11 || numero_celda_actual == 12 || numero_celda_actual == 13 ){
            parametros_mov('grid-column', '/')
        }else if(numero_celda_actual == 4 || numero_celda_actual == 5 ||  numero_celda_actual == 9 || numero_celda_actual == 10){
            parametros_mov('grid-row', '/');
        }else if(numero_celda_actual == 7 || numero_celda_actual == 8 || numero_celda_actual == 6){
            parametros_mov('grid-column', 'c')
        }
        
        //si la ubicacion de la grid de la celda y  ficha son iguales entonces deberia dejar de moverlas: para ello la propiedad del dado la igualo  a false
        function restringir(gridFicha, gridCelda){
            console.log(`gridficha es igual ${gridFicha} grid celda es igual a  ${gridCelda}`)
            if(gridFicha == gridCelda){
                console.log("ya son iguales")
                $given_shift.new_result = false;
            }else{
                console.log("no son iguales")
            }
        }
        restringir(gridFicha, gridCelda)
    }
}