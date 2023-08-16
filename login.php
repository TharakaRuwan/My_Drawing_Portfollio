<?php
session_start(); 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    // Validate and sanitize user inputs
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = $_POST["password"];

    // Query the database
    $query = "SELECT * FROM user WHERE User_name = ? AND Password = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // Successful login
        $_SESSION['username'] = $username;
        
        header("Location: Portflio.html"); // Redirect to the portfolio page
        exit();
    } else {
        // Invalid login
        echo "Invalid username or password.";
    }

    $stmt->close();
}

$conn->close();
?>