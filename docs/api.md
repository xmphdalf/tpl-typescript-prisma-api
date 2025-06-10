# API Documentation

## Endpoints

### Users

#### Get all users
```http
GET /api/users
```

#### Get user by ID
```http
GET /api/users/:id
```

#### Create a new user
```http
POST /api/users
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "User Name"
}
```

#### Update a user
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Updated Name"
}
```

#### Delete a user
```http
DELETE /api/users/:id
```

## Database Management

Connect to the database:
```bash
docker-compose exec postgres psql -U postgres -d tpl-typescript-prisma-api
```

Common PostgreSQL commands:
```sql
\dt          -- List all tables
\du          -- List all users
\l           -- List all databases
\d table_name -- Describe a table
``` 