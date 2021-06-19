<?php

$file = file('/home/alex/PycharmProjects/flaskProject/php.txt');

$key = 555;
$queue = msg_get_queue($key);
msg_send($queue, 1, $file);
echo($file);

?>