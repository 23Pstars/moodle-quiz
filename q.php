<?php

$_f = fopen('q' . date('Ymd') . '.csv', 'a+');
$_d = isset($_REQUEST['d']) ? $_REQUEST['d'] : [];
fputcsv($_f, $_d);
fclose($_f);

echo 'Ok.';
