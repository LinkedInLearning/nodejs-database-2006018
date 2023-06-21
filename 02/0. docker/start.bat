@echo off
setlocal

SET db=database
SET migrations=migrations

if not exist ".\%migrations%" mkdir %migrations%
if not exist ".\%db%" mkdir %db%

docker network create database > NUL 2>&1
docker compose up -d

docker compose -f docker-compose.migration.yml up

echo 'Wait for container to be ready. 20 sec ...'
timeout 20

CALL .\migrate.bat

endlocal
