# TypeScript Prisma API Template

A minimal TypeScript API template with Prisma ORM and Express.

## Features

- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL Database
- Docker Compose
- ESLint & Prettier
- Hot-reload Development

## Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start the application
docker-compose up -d
```

## Documentation

- [Setup Guide](docs/setup.md) - Installation and configuration
- [Development Guide](docs/development.md) - Development workflow and commands
- [API Documentation](docs/api.md) - API endpoints and database management

## License

ISC

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- PostgreSQL (via Docker)

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

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and update the database URL:
```bash
cp .env.example .env
```

3. Start the application using Docker Compose:
```bash
docker-compose up -d
```

4. Run database migrations:
```bash
docker-compose exec api npm run prisma:migrate
```

5. Seed the database with sample data:
```bash
docker-compose exec api npm run prisma:seed
```

## Development

The application will automatically start in development mode when using Docker Compose. To view logs:
```bash
docker-compose logs -f api
```

To stop the application:
```bash
docker-compose down
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

## Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Database Management

The project uses PostgreSQL running in Docker. To manage the database:

1. Connect to the database:
```bash
docker-compose exec postgres psql -U postgres -d tpl-typescript-prisma-api
```

2. Common PostgreSQL commands:
```sql
\dt          -- List all tables
\du          -- List all users
\l           -- List all databases
\d table_name -- Describe a table
```
