import axios from 'axios';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_DETAILS = 'GET_DETAILS';
export const ORDER_BY_COUNTRY = 'ORDER_BY_COUNTRY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_POPULATION = 'FILTER_BY_POPULATION';
export const GET_ONLY_COUNTRIES = 'GET_ONLY_COUNTRIES';
export const GET_TOURISM = 'GET_TOURISM';
export const COUNTRY_BY_TOURISM = 'COUNTRY_BY_TOURISM';

export function getCountry(){
    return async function (dispatch){
        try{
            let country = await axios.get('http://localhost:3001/Country');
            return dispatch({
                type: 'GET_COUNTRY',
                payload: country.data,
            })
        }catch(err){
            console.los(err)
        }
    }
};

export function getCountryName(name){
    return async function(dispatch){
        try{
            let country = await axios.get('http://localhost:3001/Country?name=' + name);
            return dispatch({
                type: 'GET_COUNTRY_NAME',
                payload: country.data
            })
        }catch(err){
            console.log(err)
            alert('Country not found')
        }
    }
};

export function getDetails(id){
    return async function(dispatch){
        try{
            let details = await axios.get(`http://localhost:3001/Country/${id}`);
            return dispatch({
                type: 'GET_DETAILS',
                payload: details.data
            })
        }catch(err){
            console.log(err)
        }
    }
};

export function orderByCountry(payload){
    return {
        type: 'ORDER_BY_COUNTRY',
        payload
    }
};

export function filterByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
};

export function filterByPopulation(payload){
    return{
        type: 'FILTER_BY_POPULATION',
        payload
    }
};

export function getOnlyCountries(){
    return async function(dispatch){
        try{
            let countries = await axios.get('http://localhost:3001/AllCountries');
            return dispatch({
                type: 'GET_ONLY_COUNTRIES',
                payload: countries.data,
            })
        }catch(err){
            console.log(err)
        }
    }
};

export function getTourism(){
    return async function(dispatch){
        try{
            let tourism = await axios.get('http://localhost:3001/Tourism');
            return dispatch({
                type: 'GET_TOURISM',
                payload: tourism.data,
            })
        }catch(err){
            console.log(err)
        }
    }
};

export function postTourism(payload){
    return async function(dispatch){
        try{
            // console.log(payload)
            let tourism = await axios.post('http://localhost:3001/Tourism', payload);
            return dispatch({
                type: 'GET_TOURISM',
                payload: tourism.data
            })
        }catch(err){
            console.log(err)
        }
    }
};

export function countryByTourism(payload){
    return {
        type: 'COUNTRY_BY_TOURISM',
        payload,
    }
};