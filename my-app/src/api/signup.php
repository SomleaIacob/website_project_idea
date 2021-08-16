<?php
// echo 'Sign-Up logic ...';

$signUpName = $_POST['userName'];
$signUpPass = $_POST['password'];
$signUpEmail = $_POST['email'];

// var_dump($_POST);

$userName = 'myuser';
$userPass = '123';
$dbName = 'webdev';
$conn = new mysqli('localhost', $userName, $userPass, $dbName);
if($conn->connect_error){
    die('eroare!'.$conn->error); // se oprește execuția scriptului
}

$hashedPass = password_hash($signUpPass, PASSWORD_DEFAULT);

//$interogare = "INSERT INTO `users`(`userName`, `userPass`, `hashedPass`) VALUES ('$signUpName','$signUpPass','$hashedPass')";
$interogare = "INSERT INTO `users`(`userName`, `userPass`, `userEmail`) VALUES ('$signUpName','$signUpPass','$signUpEmail')";

$result = $conn->query($interogare);

if(!$result){
    echo "<h1>Bad query!</h1>";
    //header("Location: index.html");
}
// else echo "<h1>User added!</h1>";

echo "User added ... redirect to your page!";
//header("refresh:4; url=indexAuth.php");