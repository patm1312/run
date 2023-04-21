import move from "./move.js";
//b guarda la sumatoria de el turno mas el nivel para mover la ficha.
var b;
var partida = [];

export function nickk(){
   //variable que inicialmente es cero, guardara el numero de fichas permitido  a recorrer
var stop = 0;
    const d = document;
    //guarda el numero 2 en cao  de que se envie informacion de los jugadores por php
    const $info_players = d.getElementById("info_players").textContent;
    const $FichaPlay = d.querySelector(".given__fichaj")
    const $TurnoPlay = d.querySelector(".given__shift")
    //si existe una variable session de php con informacion de usuarios empiezo a extraer la ifromacion a js.
    if($info_players == "2"){
        //gurado los nombres de los jugadores desde el html
        const $player_uno = d.querySelector(".jugadoresP_uno").textContent;
        const $player_dos = d.querySelector(".jugadoresP_dos").textContent;
        //niveles de los jugadores uno y dos respectivamente.
         const $level_uno = d.querySelector(".nivelPlayerUno").textContent;
         const $level_dos = d.querySelector(".nivel_player_dos").textContent;
         //cre obketo  que guarda informacion de jugador
        class Players{
            constructor(nombre, nivel, x, y, ubX, ubY){
                this.nombre = nombre
                this.nivel = nivel
                this.x = x
                this.y = y
                this.ubX = ubX
                this.ubY = ubY
                //this.path = path
            }
        }
    //instancias de los jugadores:
    //objeto  de los jugadores con nombre y nivel, coordenadas y  variable x para mover laficha
    const $player_uno_obj = new Players($player_uno, $level_uno, 13, 8, 0, 0);
    const $player_dos_obj = new Players($player_dos, $level_dos, 13, 8, 0, 0);
 
    //dado: new_result es el valor de true,  es decir permitir que se mueva la fucha  en la funcion mover.
    class Given{
        constructor(ficha, turno, fichad, levelEnd, new_result){
            this.ficha = ficha
            this.turno = turno
            this.fichad = fichad
            this.levelEnd = levelEnd
            this.new_result = new_result
            //this.path = path fichaa-uno
        }
    }
    //crea informacion de cada tirada de dado.
    const $given_shift = new Given();
    //guarda un numero para validar si es par o impar
    let i = 0;
    let given;
    let objeto_player;
    let nivel_juego;
    //variable que guarda la clase del parrafo q contiene el nivel segun sea el turno
    let paragraph_class;
    const $form = d.querySelector(".form__given");
    $form.addEventListener("click",(e)=>{
        //si coincide con el boton de player
        if(e.target.matches(".button__given")){
            e.preventDefault();
            //genera un numero aleatorio para el dado
            given = Math.floor(Math.random() * (7 - 1) + 1);
            $given_shift.turno = given;
            $given_shift.new_result = true;
            //cada vez que pulse el boton incremento la i para que sea impar y  me guarde en el objeto dado el nombre de la ficha que tiene el turno  de moverse
            
            if(i%2==0){
                i += 1;
                //le paso la clase de la ficha q se mueve con la funcion de move
                clase = ".fichaa-uno";
                //objeto_player es usado en la funcion movimiento
                objeto_player = $player_uno_obj;
                nivel_juego = $level_uno;
                paragraph_class = ".nivelPlayerUno"
                $given_shift.ficha = $player_uno_obj.nombre 
                console.log($player_uno_obj)
                b = objeto_player.nivel
                b = Number(b);
                stop = given + b
                $given_shift.levelEnd = stop;
            }else{
                i += 1;
                clase = ".fichaa-dos";
                objeto_player = $player_dos_obj
                nivel_juego = $level_dos;
                paragraph_class = ".nivel_player_dos"
                $given_shift.ficha = $player_dos_obj.nombre
                console.log(`el nombre del jugador es ${$given_shift.ficha} y la ficha es la 2`) 
                console.log($player_dos_obj.nivel)
                b = Number($player_dos_obj.nivel)
                stop = given + b;
                //cada vez que tiro los dados, guardo en el objeto dado, hasta donde se va a mover la ficha dependiendo  de su nivel actual.
                $given_shift.levelEnd = stop;
            }
            //mostrar informacion del turno o  del dado  en pantalla 
            $FichaPlay.textContent = $given_shift.ficha;
            $TurnoPlay.textContent = $given_shift.turno;
        }
        })
            let clase;
                document.addEventListener("keydown", (e)=>{
                    //si le di click al dao o lo tire
                    if(typeof(given)== "number"){
                        
                        function movimiento(clase, objeto_player, nivelJuego, $given_shift){
                            //el objeto player es el objeto jugador que guarda nombre,  nivel...
                            //objeto_player.nivel = nivelJuego;
                        //me retorna las coordenadas x y y  del objeto
                        let coor = move(e,clase, objeto_player, paragraph_class, $given_shift);
                        objeto_player.x = coor[3];
                        objeto_player.y = coor[4];
                        objeto_player.ubX = coor[3];
                        objeto_player.ubY = coor[4];
                        objeto_player.nivel = coor[5]
                    }
                    movimiento(clase, objeto_player,nivel_juego, $given_shift)
                    }
                })
                partida = [$player_uno_obj]
                return  partida 
        } 
        
}