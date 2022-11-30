const { Router } = require('express');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Country = require('./Country.js');
const Tourism = require('./Torism.js');
const CountryByName = require('./CountryByName.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(express.json());

router.use('/Country', Country);
router.use('/Tourism', Tourism);
router.use('/AllCountries', CountryByName);


module.exports = router;
