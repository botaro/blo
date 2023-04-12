<?php

for($j=0;$j<$cnt;$j++){
$r=$ar[$j][0];
echo "<form action=#p2-".$r." method=post>";
echo "<input type=hidden name=tip value=".$r.">";
echo "<input type=submit value=".$r.">";

echo "</form>";
echo "&nbsp;";
}

?>
