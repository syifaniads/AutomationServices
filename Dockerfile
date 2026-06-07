FROM oven/bun:1-alpine

WORKDIR /app

# 1. Copy file package dan folder prisma
COPY package.json bun.lock ./
COPY prisma ./prisma/

# 2. Install semua dependensi
RUN bun install

# 3. Copy seluruh sisa kodingan project
COPY . .

# 4. TERPENTING: Lakukan build project ke versi production
RUN bun run build

# Port production Nitro/Nuxt biasanya default di 3000
EXPOSE 3000

# 5. Jalankan aplikasi menggunakan file hasil build (Production Mode)
CMD ["node", ".output/server/index.mjs"]
