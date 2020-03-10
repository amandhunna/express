const express = require('express');
const router = express.Router();

// const auth = require("./controllers/auth");
const message = require("./controllers/message");
const users = require("./controllers/users");
console.log(users.get)

router.get('/users', users.get)
router.get('/messages', message.get)

router.post('/user', users.create);
router.post('/sendMessage', message.send) 

module.exports = router;