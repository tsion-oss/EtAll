const express = require('express')
const Router = express.Router()
const passport = require('passport');

// // Google OAuth login route
// router.get('/auth/google', passport.authenticate(
//     // Which passport strategy is being used?
//     'google',
//     {
//       // Requesting the user's profile and email
//       scope: ['profile', 'email'],
//       // Optionally force pick account every time
//       // prompt: "select_account"
//     }
//   ));

// Google OAuth callback route
// router.get('/oauth2callback', passport.authenticate(
//     'google',
//     {
//       successRedirect: '/movies',
//       failureRedirect: '/movies'
//     }
//   ));


const coffeeRouter = require('./coffeeRouter')
const spiceRouter =  require('./spiceblendRouter')
const teffRouter = require('./teff-flourRouter')



Router.use('/coffees', coffeeRouter)
Router.use('/spices', spiceRouter)
Router.use('/teffs', teffRouter)




module.exports = Router