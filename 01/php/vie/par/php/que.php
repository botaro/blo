<?php

$ver=SQLite3::version();
echo $ver["versionString"]."<br>";

$dbn=rt."/db/php.db";
echo $dbn;

$db=new SQLite3($dbn);
$q="select * from php";
$r=$db->query($q);
echo "<br>";
while($row=$r->fetchArray()){
echo $row["typ"]."<br>";
echo $row["tit"]."<br>";
echo $row["ter"]."<br>";
echo $row["bod"];
echo "<br><br>";
}

?>
