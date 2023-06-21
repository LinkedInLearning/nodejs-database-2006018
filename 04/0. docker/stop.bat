echo off

setlocal

powershell.exe -NoProfile -ExecutionPolicy ByPass -Command "docker stop $(docker ps -qa) | docker system prune -af"
endlocal