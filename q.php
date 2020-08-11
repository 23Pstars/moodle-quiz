<?php

$_f = fopen('q.csv', 'a+');
$_d = isset($_REQUEST['d']) ? $_REQUEST['d'] : [];
fputcsv($_f, $_d);
fclose($_f);

echo 'Ok.';