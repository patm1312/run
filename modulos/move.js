//son las medidas de los ejes inicales x e y  de la ficha y la casilla nivel
import limit_celda from "./alimites_celdas.js";
//import mover_defecto from "./lxxmove_default.js";
let x = 13;
let x2 = 19;
let y = 8;
let y2 = 12;
const d = document;
//muestra el nivel actualizado
let level_up;
let level_up_string;
//accedo al dif que referencia a la casilla que esta la ficha
export default function move(e, ficha, objeto_player, paragraph_class, $given_shift){
    //levelstre¡ing es para enviarse a la funcion limitcelda
    level_up_string = $given_shift.levelEnd;
    level_up = Number(level_up_string)
    level_up = level_up
 x = objeto_player.x;
 y = objeto_player.y;
    //en box guardo el contenido del parrafo que contiene el nivel de la ficha, el valor inicial es cero, luego se modifica su contenido textcontent cuando se mueva la ficha.
const $box = d.querySelector(paragraph_class);
//en box level, guardo ese contenido  del parraf.
let $box_level = $box.textContent;
// en level guardo el div o casilla que marca el nivel, y que es actualizado cuando se modifica el textcontent del parrafo.
const level = d.getElementById($box_level);
    //guardo el iv de la ficha.
    const $ficha = d.querySelector(ficha);
    //guardo las coordenadas iniciales de la ficha y de la casilla o caja.
    let limit_ficha = $ficha.getBoundingClientRect();
    let limit_box = level.getBoundingClientRect();
    //esta funcion modifica el valor booleano  del dado para ver cuando ya debe dejar de moverse la ficha como segunda condicion 
    limit_celda(level, level_up_string, limit_ficha, $given_shift, $ficha)

    const $info_players = d.getElementById("info_players").textContent;
    //nombre de los jugadores uno y dos respectivamente.
    if($info_players == 2){
        
    
    //guardo el centro del eje x e y de la ficha
    const centerX = limit_ficha.left + (limit_ficha.width / 2);
    const centerY = limit_ficha.top + (limit_ficha.height / 2);
    //asigno el valor de n como el contenido del parrafo, el valor inicial es 0. y lo  convierto  a entero, para poderlo sumar cuando mueva la ficha.
    let n = parseInt($box.textContent);
    //poner clase a cada casilla q pase la ficha.
    //level.classList.add("run");
    //en caso de que oprima las teclas de direccion:
    //console.log(`boxlevel  = ${$box_level} level_up es igual a ${level_up} y  el booleano es ${$given_shift.new_result} la ficha esta en el nivel ${$box_level} y se movera hasta ${level_up}`)
    if(($box_level <= level_up && ($given_shift.new_result == true))){
        //console.log("if $box_level <= level_up")
        switch (e.keyCode) {
            //tecla izquierda
            case 37:
                //console.log(`center x = ${centerX} limitboxright es igual a ${limit_box.left} box leves es igual a ${$box.textContent}`)
            e.preventDefault()
            //si la coordenada del centro del eje x de la ficha es mayor a la coord, de la arista izquierda del elemento(el primero es el circulo), ademas el nivel es 6,  o 7, o 8, muevo la ficha hacia la izquierda.
            if((centerX > limit_box.left) && ($box.textContent == 6 || $box.textContent == 7 || $box.textContent == "8")){
                x--;
                //igual q el anterior  pero se valida con la arista izquierda de la ficha, al tratarse de la casilla nueve para que corra siempre y  cuando sea mayor o igual, con el fin de que no sobresalga la ficha de la casilla.
            }else if((limit_ficha.left >= limit_box.left) && ($box.textContent == 9)){
                x--;
            }
            //una vez que ha llegado al limite de cada casilla o caja, se modifica el textcontent del parrafo para qque suba de nivel. pero solo cuando ya pase el limite y  este en el nivel 6, 7 y 8 para la tecla 37.
            else if ((centerX < limit_box.left) && ($box.textContent == "6" || $box.textContent == "7" || $box.textContent == "8")){
                $box.textContent = n + 1;
            }
            //prevenir comportamiento por defecto cuando se ejecuta el  scroll
            break;
            case 39:
            e.preventDefault()
            //console.log(`center x = ${centerX} limitboxright es igual a ${limit_box.right} box leves es igual a ${$box_level}`)
            if((centerX <= limit_box.right) && ($box_level == 0 || $box_level == 1 || $box_level == 2 || $box_level == 3 || $box_level == 11 || $box_level == 12 || $box_level == 13)){
                x = x + 1 ;
            }else if((limit_ficha.right < limit_box.right) && ($box.textContent == "4")){  //console.log("entra a 39 mas if else ");
                x = x + 1 ; 
            }else if((centerX > limit_box.right) && ($box.textContent == "0" || $box.textContent == "1" || $box.textContent == "2" || $box.textContent == "3" || $box.textContent == "11" || $box.textContent == "12" || $box.textContent == "13" || $box.textContent == "14")){
                x = x + 1 ;
                $box.textContent = n + 1;
            };
            
            break;
    
            case 40:
            e.preventDefault()
            //console.log(`center x = ${centerY} limitboxright es igual a ${limit_box.bottom} box leves es igual a ${$box.textContent}`)
            if((centerY <= limit_box.bottom) && ($box.textContent == "4" || $box.textContent == "5" || $box.textContent == "9" || $box.textContent == "10")){
                y++
            }else if((limit_ficha.bottom < limit_box.bottom) && ($box.textContent == "6" || $box.textContent == "11")){
                y++
            }else if((centerY >= limit_box.bottom) && ($box.textContent == "4" || $box.textContent == "5" || $box.textContent == "9" || $box.textContent == "10")){
                $box.textContent = n + 1;
            };
            break;
        }
        //console.log(`el valor de boslevel es: ${$box.textContent}`)
            //mover_defecto($ficha, $box.textContent)
    }
    if($box.textContent == "4" || $box.textContent == "5"){
        try {
            x = 46;
            x2 = 50
        } catch (error) {
        
        }
    }else if($box.textContent == "9" || $box.textContent == "10"){

        try {
            x = 22;
            x2 = 26
        } catch (error) {
        }
    }
    
        x2 = x + 4
        $ficha.style.gridColumn =  `${x} / ${x2}`;
        y2 = y + 4
        //console.log($ficha)
        $ficha.style.gridRow =  `${y} / ${y2}`;
    }
    level_up = $box.textContent;
    level_up = Number(level_up)
    //la funcion retorna las coordenadas x   e y de la ficha, para que se guarden constantemente en la instancia del jugador.
    return [limit_ficha.x, limit_ficha.y, $ficha, x, y, level_up]
    }