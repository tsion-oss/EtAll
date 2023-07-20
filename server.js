const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./back-end/db/index')
const PORT = process.env.PORT || 3001
const AppRouter = require('./back-end/Router/AppRouter.js')
// var logger = require('morgan');
// new code below
// var session = require('express-session');
// var passport = require('passport');

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// server.js

// require('./config/database');
// // new code below
// require('./config/passport');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send('landing page')
})

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))

app.use('/api', AppRouter)
