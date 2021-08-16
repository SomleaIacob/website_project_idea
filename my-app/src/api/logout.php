<?php

session_start();
session_destroy();
// echo '<h2>You are redirected to landpage!</h2>';
// header("refresh:4; url=index.html");

header("Location: index.html");
