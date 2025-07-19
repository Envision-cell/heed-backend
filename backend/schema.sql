CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email       VARCHAR(255) UNIQUE NOT NULL,
  type        VARCHAR(50)        NOT NULL,
  created_at  TIMESTAMPTZ        NOT NULL DEFAULT NOW()
);