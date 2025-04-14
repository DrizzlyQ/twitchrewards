const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),

  addPoints: async (twitchName, points) => {
    await pool.query(
      \`INSERT INTO users (twitch_name, points)
       VALUES ($1, $2)
       ON CONFLICT (twitch_name)
       DO UPDATE SET points = users.points + $2\`,
      [twitchName, points]
    );
  },

  getUserByDiscordId: async (discordId) => {
    const res = await pool.query(
      'SELECT * FROM users WHERE discord_id = $1',
      [discordId]
    );
    return res.rows[0];
  },

  redeemItem: async (discordId, item) => {
    const user = await module.exports.getUserByDiscordId(discordId);
    if (!user || user.points < 10) return false; // example threshold

    await pool.query('UPDATE users SET points = points - 10 WHERE discord_id = $1', [discordId]);
    await pool.query('INSERT INTO redemptions (user_id, item) VALUES ($1, $2)', [user.id, item]);
    return true;
  }
};