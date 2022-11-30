const { Router } = require('express');
const { getTourism, postTourism } = require('../controllers/Tourism.js');

const router = Router();

router.get('/', getTourism);
router.post('/', postTourism);

module.exports = router;