import { env } from 'cloudflare:workers'
import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  driver: "d1-http",
  dbCredentials: {
    accountId: env.CF_ACCOUNT_ID,
    databaseId: env.D1_DATABASE_ID,
    token: env.CF_TOKEN
  },
})
