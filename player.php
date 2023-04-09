<?php
session_start();
$_SESSION["player"]["name1"] = $_POST['name1-game'];
$_SESSION["player"]["name2"] = $_POST['name2-game'];
echo "el nombre uno es : ";
echo $_SESSION["player"]["name1"];
echo "el nombre dos es : ";
echo $_SESSION["player"]["name2"];
echo " sirve";
$archivo_uno = $_FILES['picture1'];
$archivo_dos = $_FILES['picture2'];
echo"el  archivo subido es: ";
var_dump($archivo_uno);
echo "<br>";
echo"el nombre es: ";
var_dump($archivo_uno['tmp_name']);
echo "<br>";
echo '<img src="dir/img/foto3.png" alt="imagen de prueba">';
$carpeta = "dir/img";
// $nombre_archivo = "$carpeta/nick.png";
$nombre_archivo = $carpeta."/nick.png";
echo "la ruta y nombre de archivo a mover sera en : ";
echo $nombre_archivo;
$name = $_POST['name-game'];
//$archivo = $_FILES['picture'];
$carpeta = "dir/img";
$nombre_archivo = "$carpeta/nameGame.png";
$nombre_archivo_dos = "$carpeta/nameGame_dos.png";
echo "la ruta y nombre de archivo a mover sera en : $nombre_archivo";
function copy_img($img,$pathh){
    if (move_uploaded_file ($img, "$pathh"))
    {
    echo "<br>";
    echo "se copio el archivo";
    }
    else
    {
        echo "<br>";
    echo "NO se copio el archivo";
    };
}

copy_img($archivo_uno['tmp_name'], $nombre_archivo);
copy_img($archivo_dos['tmp_name'], $nombre_archivo_dos);

header("Location: index.php");

?>