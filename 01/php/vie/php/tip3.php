<?php
//echo $tip;
$tit="select tit from go where typ=:typ";
$stm=$db->prepare($tit);
$stm->bindValue(":typ",$tip);
$r=$stm->execute();
$ar=array();

while($ro=$r->fetchArray(SQLITE3_NUM)){
echo "<div class='btn btn-info'>";
echo $ro[0];
echo "</div><br>";
array_push($ar,$ro);
}
$cnt=count($ar);
echo $cnt."<br>";

sort($ar);

/* for($j=0;$j<$cnt;$j++){ */
/* print_r($ar[$j][0]."<br>"); */

/* } */


?>


