# Development Guide

## Project Structure

```
.
├── prisma/               # Prisma schema and migrations
├── src/                  # Source code
│   ├── routes/          # API routes
│   └── server.ts        # Application entry point
├── .env                 # Environment variables
├── .env.example         # Example environment variables
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile          # Docker configuration
└── package.json         # Project dependencies and scripts
```

## Development Commands

### Using Docker

Start the application:
```bash
docker-compose up -d
```

View logs:
```bash
docker-compose logs -f api
```

Stop the application:
```bash
docker-compose down
```

### Without Docker

Start development server:
```bash
npm run dev
```

## Code Quality

Format code:
```bash
npm run format
```

Check code formatting:
```bash
npm run format:check
```

Lint code:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
``` 