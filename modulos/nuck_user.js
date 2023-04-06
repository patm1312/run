import move from "./mov.js";
export function nickk(){
   
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
         const $level_uno = d.querySelector(".nivelPlayerUno");
         const $level_dos = d.querySelector(".nivel_player_dos");
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
    const $player_uno_obj = new Players($player_uno, $level_uno, 0, 0, 0, 0);
    const $player_dos_obj = new Players($player_dos, $level_dos, 0, 0, 0, 0);
 
    //dado:
    class Given{
        constructor(ficha, turno, fichad){
            this.ficha = ficha
            this.turno = turno
            this.fichad = fichad
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
        if(e.target.matches(".button__given")){
            e.preventDefault();
            //genera un numero aleatorio para el dado
            given = Math.floor(Math.random() * (7 - 1) + 1);
            $given_shift.turno = given
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
                console.log(`el nombre del jugador es ${$given_shift.ficha} y la ficha es la 1`) 
            }else{
                i += 1;
                clase = ".fichaa-dos";
                objeto_player = $player_dos_obj
                nivel_juego = $level_dos;
                paragraph_class = ".nivel_player_dos"
                $given_shift.ficha = $player_dos_obj.nombre
                console.log(`el nombre del jugador es ${$given_shift.ficha} y la ficha es la 2`) 
            }
            //mostrar informacion del turno o  del dado  en pantalla
            console.log(`el nombre del jugador es ${$given_shift.ficha} fuera del if` ) 
            $FichaPlay.textContent = $given_shift.ficha;
            $TurnoPlay.textContent = $given_shift.turno;
        }
        })
            let clase;
                document.addEventListener("keydown", (e)=>{
                    //si le di click al dao o lo tire
                    if(typeof(given)== "number"){
                        
                        function movimiento(clase, objeto_player, nivelJuego){
                            //el objeto player es el objeto jugador que guarda nombre,  nivel...
                            objeto_player.nivel = nivelJuego.textContent;
                        //me retorna las coordenadas x y y  del objeto
                        let coor = move(e,clase, objeto_player, paragraph_class);
                        objeto_player.x = coor[0];
                        objeto_player.y = coor[1];
                        objeto_player.ubX = coor[3];
                        objeto_player.ubY = coor[4];
                    }
                    movimiento(clase, objeto_player,nivel_juego)
                    }
                })
            
        }  
}