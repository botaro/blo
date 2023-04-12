<?php
$d=getcwd();
$met=$_SERVER["REQUEST_METHOD"];

$dbn=$d."/vie/php/db/go.db";
$db=new SQLite3($dbn);
$ar=array();

?>


