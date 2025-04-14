const DiscordStrategy = require('passport-discord').Strategy;

module.exports = (passport) => {
  passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify']
  }, async (accessToken, refreshToken, profile, done) => {
    // Replace with DB logic
    const user = {
      id: profile.id,
      username: profile.username,
      is_admin: ['admin_discord_id'].includes(profile.id),
      points: 0
    };
    done(null, user);
  }));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    // Replace with DB lookup
    done(null, { id, username: "TestUser", is_admin: true, points: 100 });
  });
};