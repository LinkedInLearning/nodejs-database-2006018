#!/bin/bash
[ -d migrations ] || mkdir migrations
[ -d database ] || mkdir database

docker network create database >> /dev/null 2>&1 &

docker compose up -d 

chmod +x ./migrate.sh && echo 'Wait for container to be ready. 20 sec ...'
sleep 20

./migrate.sh

