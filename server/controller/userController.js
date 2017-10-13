const User = require('../dbModels/user.js');

const userController = {
  indexOfUsers: (req, res) => {
    User
      .find({})
      .exec(function(err, users) {
        if (err) return console.log(err);
        res.json({ success: true, message: 'all users', users: users });
      })
  },

  createUser: (req, res) => {
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
      if (!user) return res.json({ success: false, message: 'user already exists' });
      if (err) return console.log(err);
      res.json({ success: true, message: 'user successfully created', user: user });
    }) 
  },

  findUser: (req, res) => {
    User
      .findOne({ _id: req.params.id })
      .exec(function(err, user) {
        if (err) return console.log(err);
        res.json({ success: true, message: 'user found', user: user });
      })      
  },

  updateUser: (req, res) => {
    console.log('req.params.id:', req.params.id)
    User
      .findOne({ _id: req.params.id })
      .exec(function(err, user) {
        if (err) return console.log(err);
        if (req.body.email) {
          user.email = req.body.email;
        }
        if (req.body.photoURL) {
          user.photoURL = req.body.photoURL;
        }
        user.save(function(err, user) {
          if (err) return console.log(err);
          res.json({ success: true, message: 'user info updated', user: user });
        })
      })
  },

  deleteUser: (req, res) => {
    User
      .findOneAndRemove({ _id: req.params.id }, function(err) {
        if (err) return console.log(err);
        res.json({ success: true, message: 'user successfully deleted' });
      })
  }

}

module.exports = userController;
