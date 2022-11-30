const { Router } = require('express');
const { getCountries, getCountriesById } = require('../controllers/country.js');

const router = Router();

router.get('/', getCountries);
router.get('/:id', getCountriesById);



module.exports = router;
