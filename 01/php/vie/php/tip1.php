<?php

/* $d=getcwd(); */
/* $dbn=$d."/vie/php/db/go.db"; */
/* $db=new SQLite3($dbn); */

$stm="select distinct(typ) from go;";
$r=$db->query($stm);

$ar=array();

while($ro=$r->fetchArray()){
array_push($ar,$ro);
}
$cnt=count($ar);

sort($ar);
?>


