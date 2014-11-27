<?php
include_once('database.php');

	$user_id = (string)$_POST["user_id"];
	$sql = "SELECT user_name FROM users WHERE user_id = '$user_id'";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result)){
		echo $row['user_name'];
	}

	$date = date("Y-m-d-H-i-s");
	$sql = "INSERT INTO visits (name_id, date_r) VALUE ('$user_id', '$date')";
	$result = mysql_query($sql);