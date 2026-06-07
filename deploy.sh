#!/bin/bash

# 1. Tarik image paling segar dari Docker Hub cloud
docker pull jona2212/web-projek:latest

# 2. Hentikan container lama yang sedang berjalan (jika ada)
docker stop web-projek || true

# 3. Hapus bangkai container lama agar tidak bentrok nama
docker rm web-projek || true

# 4. Jalankan container baru dengan menyuntikkan file .env milikmu
docker run -d \
  -p 80:3000 \
  --name web-projek \
  --env-file .env \
  --restart always \
  jona2212/web-projek:latest

echo "🚀 Deploy Sukses! Aplikasi kamu sudah berjalan di port 80."
