#! /bin/bash
cd /home/alain/dev/apsio/antora-jmb/node

while [ 1 ]
do
	echo Running node node-server.js ...
	node node-server.js | tee `date +'%Y-%m-%d,%H:%M:%S'`.log
	echo Crash... waiting 3 seconds
	sleep 3
done


