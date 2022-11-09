const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const calcController = require ('../controllers/calcController');


router.get ('/calculadora', calcController.index);
router.get('/', homeController.index);

module.exports = router;