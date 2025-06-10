# Setup Guide

## Prerequisites

- Node.js (v22.16.0 or higher)
- Docker and Docker Compose
- PostgreSQL (via Docker)

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

3. Start the application:
```bash
docker-compose up -d
```

4. Run migrations and seed:
```bash
docker-compose exec api npm run prisma:migrate
docker-compose exec api npm run prisma:seed
```

## Manual Setup (without Docker)

1. Start PostgreSQL:
```bash
docker run --name postgres-tpl -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tpl-typescript-prisma-api -p 5432:5432 -d postgres:latest
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Run migrations:
```bash
npm run prisma:migrate
```

5. Start development server:
```bash
npm run dev
``` 