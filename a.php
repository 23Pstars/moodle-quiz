<?php echo json_encode( array_map('str_getcsv', file('a.csv')) );