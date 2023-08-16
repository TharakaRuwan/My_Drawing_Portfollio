<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    // Validate and sanitize user inputs
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = $_POST["password"];

    // Check if the username already exists
    $checkUsernameQuery = "SELECT ID FROM user WHERE User_name = ?";
    $stmt = $conn->prepare($checkUsernameQuery);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        echo "Username already exists. Please choose a different username.";
    } else {
        // Insert user data without password hashing
        $insertQuery = "INSERT INTO user (User_name, Password) VALUES (?, ?)";
        $insertStmt = $conn->prepare($insertQuery);
        $insertStmt->bind_param("ss", $username, $password);

        if ($insertStmt->execute()) {
            // Successful registration message
            echo "Registration successful!";
            
            // Redirect to home.html after successful registration
            header("Location: home.html");
            exit;
        } else {
            echo "Error: " . $insertStmt->error;
        }

        $insertStmt->close();
    }

    $stmt->close();
}

$conn->close();
?>