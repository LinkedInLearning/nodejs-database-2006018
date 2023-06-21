#!/bin/bash
docker stop $(docker ps -aq)  > /dev/null & 
docker system prune -af & docker image prune -af &