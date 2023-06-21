docker compose -f docker-compose.migration.yml up

docker restart pgDatabase > NUL 2>&1
