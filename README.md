# Service A — CI/CD Demo

![CI](https://github.com/<owner>/<repo>/actions/workflows/ci.yml/badge.svg)
![Delivery GHCR](https://github.com/<owner>/<repo>/actions/workflows/delivery-ghcr.yml/badge.svg)

## Локальний запуск
- **Встановлення:**
  - Node 20: `npm ci`
  - Запуск: `npm start` → http://localhost:3000
- **Контейнер:**
  - `docker build -t service-a:local ./service-a`
  - `docker run -p 3000:3000 service-a:local`

## Delivery підхід
- **Варіант A (GHCR):** образи публікуються у `ghcr.io/<owner>/<repo>-service-a:<tag>` (latest + short SHA).

## Посилання
- **Репозиторій:** https://github.com/<owner>/<repo>
- **CI/CD виконання:** https://github.com/<owner>/<repo>/actions
- **GHCR пакет:** https://github.com/<owner>?tab=packages
- **Артефакт:** див. останній успішний ран у Actions → Artifacts