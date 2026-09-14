#!/bin/bash

# Recovered from historical feature/jenkins branch.
# Preserved as evidence; the original target environment may no longer exist.

docker pull jona2212/web-projek:latest

docker stop web-projek || true

docker rm web-projek || true

docker run -d \
  -p 80:3000 \
  --name web-projek \
  --env-file .env \
  --restart always \
  jona2212/web-projek:latest

echo "Deploy completed. Application container is exposed on host port 80."
