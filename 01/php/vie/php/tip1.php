<?php

$ver=SQLite3::version();
echo $ver["versionString"];
echo "<br>";
$d=getcwd();
$dbn=$d."/vie/php/db/go.db";
echo $dbn;

$db=new SQLite3($dbn);
$stm="select distinct(typ) from go;";
$r=$db->query($stm);

$ar=array();

echo "<br>";
while($ro=$r->fetchArray()){
array_push($ar,$ro);
}
$cnt=count($ar);
echo $cnt;
echo "<br>";

sort($ar);
?>


