<?php

<<<<<<< HEAD
//$d=getcwd();
=======
$ver=SQLite3::version();

$ve2=$ver["versionString"];
$d=getcwd();
>>>>>>> 0f8b8d8465ef8fa0dc619cd063650240a83ec75b
$dbn=$d."/vie/php/db/go.db";

$db=new SQLite3($dbn);
$tip="select distinct(typ) from go;";
$r=$db->query($tip);

$ar=array();

while($ro=$r->fetchArray()){
array_push($ar,$ro);
}
$cnt=count($ar);

sort($ar);
?>


