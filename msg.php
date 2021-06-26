<?php

$msg = file_get_contents('/home/alex/PycharmProjects/flaskProject/php.txt');

$key = 555;
$queue = msg_get_queue($key);
msg_send($queue, 1, $msg);
echo $msg;


?>