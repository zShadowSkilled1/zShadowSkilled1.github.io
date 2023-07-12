<?php
$filename = "main/usernames.txt";
$username = $_GET["username"];

$lines = file($filename, FILE_IGNORE_NEW_LINES);
if (in_array($username, $lines)) {
    echo "exists";
} else {
    file_put_contents($filename, $username . PHP_EOL, FILE_APPEND);
    echo "added";
}
?>
