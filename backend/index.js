const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('./passport')(passport);

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));

app.listen(3001, () => console.log('Backend running on port 3001'));