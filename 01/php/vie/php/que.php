<?php

$ver=SQLite3::version();
echo $ver["versionString"];
echo "<br>";
$d=getcwd();
$dbn=$d."/vie/php/db/go.db";
echo $dbn;

$db=new SQLite3($dbn);
$q="select * from go;";
//$r=

?>
