<?php header('Access-Control-Allow-Origin: *');
echo json_encode(array_map('str_getcsv', file('a' . date('Ymd') . '.csv')));
