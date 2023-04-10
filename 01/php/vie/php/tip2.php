<?php
for($j=0;$j<$cnt;$j++){
$r=$ar[$j][0];
echo "<div class='btn btn-info'>";
echo "<form action=#p2-".$r." method=post>";
echo "<input type=hidden value=".$r.">";
echo "<input type=submit value=".$r.">";

echo "</form>";
echo "</div>";
echo "&nbsp;";
}

?>
