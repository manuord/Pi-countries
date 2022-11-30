const { Router } = require('express');
const { Country } = require('../db.js');
const express = require('express');

const router = Router();

router.use(express.json());

router.get('/', async (req, res, next) => {
    try{
        const countries = await Country.findAll({
            attributes: ['name'],
            order: [['name', 'ASC']]
        });
        res.status(200).send(countries);
    }catch(err){
        console.log(err);
        next(err);
        return
    }
});


module.exports = router;