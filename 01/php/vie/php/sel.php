<?php

$ver=SQLite3::version();
echo $ver["versionString"];
echo "<br>";
$d=getcwd();
$dbn=$d."/vie/php/db/go.db";
echo $dbn;

$db=new SQLite3($dbn);
$stm="select * from go;";
$r=$db->query($stm);

echo $q."<br>";
$ar=array();

echo "<br>";
while($ro=$r->fetchArray()){
array_push($ar,$ro);
}

$son=json_encode($ar);
echo count($ar)."<br>";
echo count($ar[0])."<br>";

echo $ar[0][0];
echo "<br>";

?>
