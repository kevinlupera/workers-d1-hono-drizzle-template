# Workers, D1, Hono, Drizzle Template
---
This template provides a solid foundation for building modern web applications using Cloudflare Workers, Cloudflare D1 database, the Hono web framework, and the Drizzle ORM. It's ideal for developers looking for a full-stack solution at the edge.

## Initial Setup

### 1. Update Wrangler configurations and environment variables

Update the `wrangler.jsonc` file to configure your Cloudflare Workers project. This file is crucial for defining your Worker's bindings, including D1 databases.

Copy the example file `.dev.vars.example` to `.dev.vars` and update the values with your specific credentials and configurations. This file is used for local environment variables.

### 2. Create a D1 database

To create a D1 database on Cloudflare, run the following command:

```bash
pnpm run db:create <your-db-name> # Creates a D1 database on Cloudflare
```

Once the database is created, Cloudflare will provide you with a `database_id`. You will need to update `wrangler.jsonc` with this ID and your database name in the `d1_databases` section:

```json
{
  "d1_databases": [
        {
			"binding": "DB",
			"database_name": "<your-db-name>",
			"database_id": "<your-db-id>"
	    }
  ]
}
```

### 3. Migrate the D1 database

To manage your database schemas with Drizzle, follow these steps:

```bash
pnpm run db:generate # Generates Drizzle migration files
pnpm run db:apply <your-db-name> # Applies pending migrations to your D1 database on Cloudflare
```

## Running the Project

### 4. Run the project locally

To start the project in your local environment, which includes a local D1 database by default, run the following command:

```bash
pnpm run dev
```

## Deployment

### 5. Deploy the project to Cloudflare Workers

Once your project is ready for production, you can deploy it to Cloudflare Workers:

```bash
pnpm run deploy
```

## Useful Scripts

Here's a list of useful `pnpm` commands for development:

- `pnpm run dev`: Starts the local development server with the local D1 database.
- `pnpm run deploy`: Deploys the project to Cloudflare Workers.
- `pnpm run db:create <your-db-name>`: Creates a new D1 database on Cloudflare.
- `pnpm run db:generate`: Generates Drizzle migration files from your models.
- `pnpm run db:apply <your-db-name>`: Applies pending migrations to your D1 database on Cloudflare.