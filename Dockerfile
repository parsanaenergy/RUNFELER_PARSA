# Dockerfile for Parsa Energy — Next.js 16 standalone
# Node.js 20 Alpine — سبک و سریع
FROM node:20-alpine AS builder

WORKDIR /app

# کپی package.json و نصب وابستگی‌ها
COPY package.json ./
RUN npm install --legacy-peer-deps

# کپی کل سورس کد
COPY . .

# تولید Prisma client (برای موفقیت build)
RUN npx prisma generate

# بیلد Next.js (خروجی standalone + static + public)
RUN npm run build

# مرحله اجرا — فقط فایل‌های ضروری
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# خروجی standalone شامل static و public است (build script آن‌ها را کپی می‌کند)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
