# Recovered from historical feature/jenkins branch.
FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json bun.lock ./
COPY prisma ./prisma/

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
