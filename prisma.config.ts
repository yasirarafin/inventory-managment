import { defineConfig } from '@prisma/config';
import { Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';

// Use the pooled URL from your .env for the application adapter
const neonPool = new Pool({ connectionString: process.env.DATABASE_URL });

export default defineConfig({
  datasource: {
    // REQUIRED: Provides the direct connection string for prisma migrate dev
    url: process.env.DIRECT_URL,
    // Provides the serverless adapter for the Prisma Client
    adapter: new PrismaNeon(neonPool),
  },
});