const { Country, Tourism } = require('../db.js');
const { Router } = require('express');
const router = Router();

const getTourism = async (req, res, next) => {
    try{
        const tourismActivity = await Tourism.findAll({
            include: Country
        });
        if(!tourismActivity){
            res.send('No hay actividades de turismo');
        }else{
            res.status(200).send(tourismActivity);
        }
    }catch(err){
        console.log(err)
        next(err)
        return
    };
};

const postTourism = async (req, res, next) => {
    const { name, difficulty, span, season, country } = req.body;
    try{
        const tourism = await Tourism.create({
            name,
            difficulty,
            span,
            season,
        })
        let countries = await Country.findOne({
            where: {
                name: country
            }
        })

        await tourism.addCountry(countries);
        return res.json({message: 'Tourism activity succesfully added'})
    }catch(err){
        next(err)
        return
    }
}

module.exports = {
    router,
    getTourism,
    postTourism,
}