import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Optional: enable SSL automatically when DATABASE_URL comes from Heroku/Fly etc.
  ssl:
    process.env.NODE_ENV === 'production' &&
    !process.env.DATABASE_URL.includes('localhost')
      ? { rejectUnauthorized: false }
      : false
});
