<?php

$userName = 'myuser';
$userPass = '123';
$dbName = 'webdev';

// variabila conexiune
                    // domeniu userName userPass dbName
$conn = new mysqli('localhost', $userName, $userPass, $dbName);

if($conn->connect_error){
    die('eroare!'.$conn->error); // se oprește execuția scriptului
}
// else echo 'Conexiune ok!';

$interogare = "SELECT * FROM users";
$result = $conn->query($interogare);

$dataArray = $result->fetch_all(MYSQLI_ASSOC); // fetch_assoc();
// $dataArray = $result->fetch_assoc(); // doar PRIMA inregistrare din DB
// echo '<pre>';
// var_dump($dataArray);
// echo '</pre>';

// var_dump($_GET);

$userName = $_POST['userName'];
$userPass = $_POST['userPass'];
// autentificarea user-ului
$interogare = "SELECT * FROM users WHERE `userName` = '$userName' ";
$result = $conn->query($interogare);
$dataArray = $result->fetch_assoc();
// echo '<pre>';
// var_dump($dataArray);
// echo '</pre>';

$hash = $dataArray['hashedPass'];
if(password_verify($userPass, $hash)) {
    echo "<h1 style='color:green'>You are logged in!";
    session_start();
    $_SESSION[$userName] = 'logged-in';
    header("refresh:4; url=indexAuth.php");
}
else {
    echo '<h1 style="color:red">You are NOT logged in!';
    header("refresh:4; url=index.html");
}

