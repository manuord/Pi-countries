const { Country, Tourism } = require('../db.js');
// const axios = require('axios');
const { Sequelize } = require('sequelize');

const getCountries = async (req, res, next) => {
    let { name } = req.query;
    try {
        if(name){
            let countries = await Country.findAll({
                include: {
                    model: Tourism
                }, 
                where: {
                    name: {[ Sequelize.Op.iLike ]: `%${name}%`}
                }
            })
            console.log(name)
            res.json(countries);
        }else{
            let countries = await Country.findAll({
                include: {
                    model: Tourism
                }
            });
            console.log('pais no encontrado')
            res.json(countries);
        }
    }catch(err){
        next(err)
        console.log('hubo un error buscando el pais')
        return
    }
};

const getCountriesById = async (req, res, next) => {
    const { id } = req.params;
    try{
        const countryId = await Country.findByPk(id.toUpperCase(), {
            include:{
                model: Tourism
            }
        });
        console.log('buscando por ID')
        res.json(countryId || 'ID not Found!');
        return
    }catch(err){
        next(err)
        console.log('error buscando por ID')
        return
    }
}

module.exports = {
    getCountries,
    getCountriesById
}