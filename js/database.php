<?php

$host = 'localhost';
$user = 'root';
$pass = 'xapc';
$dbname = 'autorisation';

$connect = mysql_connect($host, $user, $pass, $dbname);
if(!$connect){
	echo 'error with connect database';
}

$database = mysql_select_db($dbname);
if(!$database){
	echo 'error with connect database name';
}