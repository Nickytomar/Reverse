<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $company_name = $_POST['company_name'];
    $contact_name = $_POST["contact_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    $to = "rudragupta1410@gmail.com";
    $subject = "Form Submission from $contact_name";
    $headers = "From: $email";

    // Initialize the email message body
    $message_body = "";

    // Compose the email message
    $message_body .= "Company_name: $company_name\n";
    $message_body .= "Name: $contact_name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Phone: $phone\n";
    $message_body .= "Date: $date\n";
    $message_body .= "Time: $time\n";

    // Send the email
    $mail_success = mail($to, $subject, $message_body, $headers);

    if ($mail_success) {
        // Redirect the user to a thank-you page
        header("Location: thank_you.html");
    } else {
        // Handle the case when the email could not be sent
        echo "Error: Email could not be sent. Please try again later.";
    }
} else {
    // Handle the case when the form is not submitted
    echo "Form not submitted.";
}
?>
