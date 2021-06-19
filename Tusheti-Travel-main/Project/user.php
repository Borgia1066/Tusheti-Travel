<?php 

if(isset($_POST['send'])){
    $fullname = $_POST['name'];
    $mail = $_POST['email'];
    $password = $_POST['Password'];
    $phone = $_POST['tel'];
    $about = $_POST['text'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];
    
    $sql = "INSERT INTO users (fullname, mail, password, phone, about, gender, country) VALUE(?, ?, ?, ?, ?, ?, ?)";
    
    $stmtinsert = $db->prepare($sql);
    $result = $stmtinsert->execute([$fullname, $mail, $password, $phone, $about, $gender, $country]);
    
    
    if($result){
        echo 'Successfully sent';
    }else{
        echo 'There was an Error, Sorry :(';
    }
}



?>