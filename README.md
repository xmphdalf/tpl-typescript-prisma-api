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

# Start the application (Docker recommended)
docker-compose up -d
```

## Documentation

- [Setup Guide](docs/setup.md) - Installation and configuration
- [Development Guide](docs/development.md) - Workflow, commands, and project structure
- [API Documentation](docs/api.md) - Endpoints and database management

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- PostgreSQL (via Docker)

## Setup & Development

See [Setup Guide](docs/setup.md) for full instructions on installing dependencies, configuring environment variables, and running the app (with or without Docker).

See [Development Guide](docs/development.md) for project structure, development commands, and code quality tools.

## API Endpoints

See [API Documentation](docs/api.md) for detailed endpoint usage and examples.

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Database Management

See [API Documentation](docs/api.md#database-management) for connecting to the database and common SQL commands.

---

For more details, refer to the documentation in the [docs/](docs/) folder.
