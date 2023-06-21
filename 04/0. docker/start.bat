@echo off
setlocal

CALL .\stop.bat /wait
docker compose up -d & docker ps -a


endlocal
