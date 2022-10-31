const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

const User = new mongoose.model("User", userSchema)
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;