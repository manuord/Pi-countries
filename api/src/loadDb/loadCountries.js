const axios = require('axios');
const { Country } = require('../db.js');

const loadDb = async () => {
    try{
        const validator = await Country.findOne({
            where: {name: 'Argentina'}
        });
        const getApi = await axios.get('https://restcountries.com/v3.1/all');
        // console.log(Object.entries(getApi))
        const infoApi = await getApi.data.map(e => {
            return {
                id: e.cca3,
                name: e.name.common,
                flag: e.flags.png,
                continent: e.region,
                capital: e.capital || ['No tiene capital'],
                subregion: e.subregion,
                area: e.area,
                population: e.population,
            }
        })
        // console.log(infoApi[1])
        if(!validator){
            await infoApi.map(async q => {
                Country.create({
                    id: q.id,
                    name: q.name,
                    flag: q.flag,
                    continent: q.continent,
                    capital: q.capital,
                    subregion: q.subregion,
                    area: q.area,
                    population: q.population,
                })
            })
            // console.log('esto funca')
            return
        }
    }catch(err){
        console.log(err)
        return
    }
}

module.exports = loadDb;