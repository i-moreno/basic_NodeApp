var models = require("../models");
var bcrypt = require("bcrypt");
var passport = require("passport");
var myPassport = require("../passport_setup")(passport);
var flash = require("connect-flash");

exports.show_login = function(req, res, next) {
	res.render('user/login', { formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next) {
	res.render('user/signup', { formData: {}, errors: {} });
}

exports.signup = function(req, res, next) {
   const newUser = models.User.build({
     email: req.body.email,
     password: generateHash(req.body.password)
   });
   
   return newUser.save().then(result => {
     passport.authenticate('local', {
       successRedirect: "/",
       failureRedirect: "/singup",
       failureFlash: true
     })(req, res, next);
   })
}

exports.login = function(req, res, next) {
  
}

const generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.getSaltSync(8), null);
}