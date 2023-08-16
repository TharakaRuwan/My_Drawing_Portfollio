<?php
	$server_name = "localhost";
	$user_name = "root";
	$password = "";
	$database = "portfolio";
	
	$conn = new mysqli($server_name, $user_name, $password, $database);
	
	if($conn -> connect_error){
		die("Connection error");
	} 	
	
function insertProject($id, $title, $description, $image) {
    global $conn;
    $sql = "INSERT INTO projects (ID, Title, Description, Image) VALUES ('$id', '$title', '$description', '$image')";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}


function getProject($id) {
    global $conn;
    $sql = "SELECT * FROM projects WHERE ID = $id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row;
    } else {
        return false;
    }
}


function updateProject($id, $title, $description, $image) {
    global $conn;
    $sql = "UPDATE projects SET Title='$title', Description='$description', Image='$image' WHERE ID=$id";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}


function deleteProject($id) {
    global $conn;
    $sql = "DELETE FROM projects WHERE ID=$id";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}



function closeConnection() {
    global $conn;
    $conn->close();
}
?>