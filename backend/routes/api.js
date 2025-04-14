const router = require('express').Router();

router.get('/me', (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
  res.json({ user: req.user });
});

router.post('/points/add', async (req, res) => {
  const { twitchName, points } = req.body;
  // Add points to user logic here
  res.sendStatus(200);
});

router.post('/redeem', async (req, res) => {
  const { discordId, item } = req.body;
  // Handle item redemption logic here
  res.json({ success: true });
});

module.exports = router;