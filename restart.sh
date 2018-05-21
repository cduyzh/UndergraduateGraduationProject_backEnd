#!/bin/sh
app=${PWD##*/}
eval pm2 stop ${app}_api
eval pm2 start pm2.config.js --only ${app}_api
echo "restart $app successfully !"
