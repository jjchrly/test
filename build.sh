
#!/bin/bash
buildInfo=`date +%F_%H-%M`'_'`git rev-parse --verify HEAD --short=12`
 
echo "building..." $buildInfo
docker build -f ./docker/app.Dockerfile -t server:latest .
wait