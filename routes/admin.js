const router = require('express').Router();
const AdminController = require('../controllers/adminController')

router.post('/register', UserController.register)

module.exports = router;