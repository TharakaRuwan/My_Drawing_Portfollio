<?php
    // Include the functions file
    require_once 'functions.php';

    // Check if form is submitted
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $action = $_POST['action'];

        switch ($action) {
            case 'add':
                // Get form inputs (project_id, title, description, image_url)
                $project_id = $_POST['project_id'];
                $title = $_POST['title'];
                $description = $_POST['description'];
                $image_url = $_POST['image_url'];

                // Call the insertProject function
                $result = insertProject($project_id, $title, $description, $image_url);

                if ($result) {
                    echo "Project added successfully.";
                } else {
                    echo "Failed to add project.";
                }
                break;

            case 'select':
    $project_id = $_POST['project_id'];

    // Call the getProject function to retrieve the selected project
    $selectedProject = getProject($project_id);

    if ($selectedProject) {
        // Display the selected project details
        echo "<h2>Selected Project</h2>";
        echo "<table>";
        echo "<tr><th>ID</th><th>Title</th><th>Description</th><th>Image</th></tr>";
        echo "<tr>";
        echo "<td>{$selectedProject['ID']}</td>";
        echo "<td>{$selectedProject['Title']}</td>";
        echo "<td>{$selectedProject['Description']}</td>";
        echo "<td>{$selectedProject['Image']}</td>";
        echo "</tr>";
        echo "</table>";
    } else {
        echo "Project not found.";
    }
    break;

            case 'update':
                // Get form inputs (project_id, title, description, image_url)
                $project_id = $_POST['project_id'];
                $title = $_POST['title'];
                $description = $_POST['description'];
                $image_url = $_POST['image_url'];

                // Call the updateProject function
                $result = updateProject($project_id, $title, $description, $image_url);

                if ($result) {
                    echo "Project updated successfully.";
                } else {
                    echo "Failed to update project.";
                }
                break;

            case 'delete':
                // Get form input (project_id)
                $project_id = $_POST['project_id'];

                // Call the deleteProject function
                $result = deleteProject($project_id);

                if ($result) {
                    echo "Project deleted successfully.";
                } else {
                    echo "Failed to delete project.";
                }
                break;
        }
    }

    $conn->close();


?>