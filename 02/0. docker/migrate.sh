docker compose -f docker-compose.migration.yml up &

docker restart pgDatabase >> /dev/null 2>&1 &


