<?php

//$d=getcwd();
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


