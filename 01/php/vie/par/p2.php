<?php
<<<<<<< HEAD
if($met=="POST"){$tip=$_POST["tip"]; }
?>
<div class=card id=p2-<?php echo $tip;?> >
<div class=card-body>
=======
$met=$_SERVER["REQUEST_METHOD"];

if($met=="POST"){
$r=$_POST["tip"];

if(isset($r)){
echo "<div class=card id=p2-".$_POST["tip"]." >";
}else{echo "no"; }
}
>>>>>>> 0f8b8d8465ef8fa0dc619cd063650240a83ec75b

?> 
<div class=card-body>
<br>
<br>
<<<<<<< HEAD
<div class="text-white bg-bl1 p-2 text-center">
<?php echo $tip; ?> 
=======
<div class="p-2 text-center text-white bg-bl2">

<?php
if(isset($r)){
echo $r;
}else{echo "no"; }

?> 
>>>>>>> 0f8b8d8465ef8fa0dc619cd063650240a83ec75b
</div>

<?php include $d."/vie/php/tip3.php"; 
 ?> 
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

