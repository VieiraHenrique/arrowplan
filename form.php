<?php

if(isset($_POST['submit'])){
    
    $name = htmlspecialchars($_POST['name']);
    $emailFrom = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlentities($_POST['message']);

    if (!empty($name)&&!empty($emailFrom)&&!empty($message)){
        $mailTo = "me@henriquevieira.com";
        $headers = "From: ". $emailFrom;
        $txt = "You have received an email from " . $name . "- $company.\n\n".$message;

        mail($mailTo, 'Email from arrowplan website', $txt, $headers);
        header("Location: index.php#contact");
    } else {
        
    }
}

?>