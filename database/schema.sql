CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  twitch_name TEXT UNIQUE,
  discord_id TEXT UNIQUE,
  username TEXT,
  points INT DEFAULT 0,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE redemptions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  item TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);