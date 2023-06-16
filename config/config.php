<?php
$db_host = "us-cdbr-east-06.cleardb.net";
$db_user = "bae20ef9676297";
$db_pass = "03a3286c";
$db_name = "heroku_49af44143a45886";

$connect = mysqli_connect ($db_host, $db_user, $db_pass, $db_name) or die("database connection error");
