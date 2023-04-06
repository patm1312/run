<?php
     session_start();
     //todo esto para hacer que el apache del navegador se actualice y no  guarde archivos obsoletos ya actualizados, no  se si sea bueno usar esta funcion, falta corregir mas aun ese error
     $today=date('Y-m-d H:i');
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
$numberPlayer = 0;

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carreteras</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
<h1 class="h2-game">Road Game </h1>
  <article class="main">
    <!-- caja que contiene el panel del juego -->
    <div class="lane1">
        <div id="0" class="circulo start">0</div>
        <!-- div de las fichas -->
        <div class="ficha fichaa-uno">
            <img class="nick ficha" src="dir/img/nameGame.png?1m=<?php echo $today; ?>" alt="imagen de prueba">
        </div>
        <div class="ficha fichaa-dos">
            <img class="nick ficha" src="dir/img/nameGame_dos.png?1m=<?php echo $today; ?>" alt="imagen de prueba">
        </div>
        
        <div id="1" class="cuadro uno">1</div>
        <div id="2" class="cuadro dos">2</div>
        <div id="3" class="cuadro tres">3</div>
        <div id="4" class="cuadro cuatro">4</div>
        <div id="5" class="cuadro cinco">5</div>
        <div id="6" class="cuadro seis">6</div>
        <div id="7" class="cuadro siete">7</div>
        <div id="8" class="cuadro ocho">8</div>
        <div id="9" class="cuadro nueve">9</div>
        <div id="10" class="cuadro diez">10</div>
        <div id="11" class="cuadro once">11</div>
        <div id="12" class="cuadro doce">12</div>
        <div id="13" class="cuadro trece">13</div>
        <div id="14" class="circulo end">14</div>
        
    </div>
    <!-- contiene el panel izquierdo  de informacion del juego -->
    <div class="box_data">
    <?php
    $number;
    //abro la funcion nick para ejecutarla despues si existe o no los usuarios en el juego.
       function nick($number){
         echo "";
    ?>
    <p ><?php $info_player; ?></p>
    <form action="player.php" enctype="multipart/form-data" method="POST">
        <input type="text " name="name<?php echo $number;?>-game" placeholder="Nombre de jugador numero <?php echo $number; ?>">
        <input type="file" name="picture<?php echo $number;?>" placeholder="Nombre">
        
    <?php
       };
       //si la variable session esta vacia, imprimo el formulario
       if(empty($_SESSION["player"]["name1"])){
           echo "<h2>Numero de jugadores</h2>";
           echo "<p id='info_players'>$numberPlayer</p>";
           for ($i=1; $i < 3 ; $i++) {
               echo "<h2>Por favor escribe los datos del jugador numero $i:</h2>"; 
               nick($i);
            }
            echo '<input type="submit" value="Enviar" />';
      }else{
          $numberPlayer = 2;
          echo "<h2 class='h2_players'>Numero de jugadores</h2>";
          echo "<p class='h2_players' id='info_players'>$numberPlayer</p>";
          $nameGame_uno = $_SESSION["player"]["name1"];
          $nameGame_dos = $_SESSION["player"]["name2"];
          ?>
          <div class="player_uno box_info_player">
              <h2 class='h2_player'>Player 1:</h2>
               <p class="playersP jugadoresP_uno"><img class="nick_info" src="dir/img/nameGame.png" alt=""><?php echo $nameGame_uno; ?></p>
               <p class="nivel nivelPlayerUno">0</p>
          </div>
          <div class="player_uno box_info_player">
               <h2 class='h2_player'>Player 2:</h2>
               <p class="playersP jugadoresP_dos"><img class="nick_info" src="dir/img/nameGame_dos.png" alt=""><?php echo $nameGame_dos; ?></p>
               <p>tu nivel es : <p class="nivel nivel_player_dos">0</p></p>
          </div>
      <div class="given">
          <h2 class="FichaPlay">Ficha:</h2>
          <p class="given__fichaj"></p>
          <h2 class="TurnoPlay">Turno:</h2>
          <p class="given__shift"></p>
          <form class="form__given" action="../../form-result.php">
          <button class="button__given" type="submit">Player</button>
          </form>
      </div>
      <?php
      echo "<p>$variable</p>";
      }
    ?>
    </form>
  </div>
  </article>
  <article class="form-game"> 
  </article>
  <?php
   //unset($_SESSION["player"]["name1"]);
?>
  <script src="empieza.js" type="module"></script>

</body>

</html>