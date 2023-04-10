<?php
$met=$_SERVER["REQUEST_METHOD"];

if($met=="POST"){
$r=$_POST["tip"];

if(isset($r)){
echo "<div class=card id=p2-".$_POST["tip"]." >";
}else{echo "no"; }
}

?> 
<div class=card-body>
<br>
<br>
<div class="p-2 text-center text-white bg-bl2">

<?php
if(isset($r)){
echo $r;
}else{echo "no"; }

?> 
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


</div>
</div>

