<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json;charset=utf-8");

$DB_HOST = 'localhost';
$DB_USER = 'root';
$DB_PASSWORD = 'root';
$DB_TABLE = 'city';

try{
    $conn =  new PDO("mysql:host=$DB_HOST;dbname=$DB_TABLE", $DB_USER, $DB_PASSWORD);

    $stmt = $conn->prepare("SELECT * FROM location");
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo "Connection error: $e <br>";
}