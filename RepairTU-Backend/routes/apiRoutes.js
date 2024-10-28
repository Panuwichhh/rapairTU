const express = require('express');
const login = require('./login');
const upload = require('./upload');
const logout = require('./logout');
const router = express();
const authenticateToken = require('./authenticateToken');


router.get('/upload', upload);
router.post('/upload', upload);
router.post('/login', login);
router.post('/login/token', login);
router.get('/upload/login', upload);
router.post('/logout', logout)



module.exports = router;