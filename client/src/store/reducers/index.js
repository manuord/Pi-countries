import {

    GET_COUNTRY,
    GET_COUNTRY_NAME,
    GET_DETAILS,
    ORDER_BY_COUNTRY,
    FILTER_BY_CONTINENT,
    FILTER_BY_POPULATION,
    GET_ONLY_COUNTRIES,
    GET_TOURISM,
    COUNTRY_BY_TOURISM,

} from '../actions/index.js'

const initialState = {
    country: [],
    allCountries: [],
    details: [],
    onlyCountries: [],
    tourism: [],
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
                allCountries: action.payload
        };

        case GET_COUNTRY_NAME:
            return{
                ...state,
                country: action.payload,
        };

        case GET_DETAILS:
            return{
                ...state,
                details: action.payload,
        };

        case ORDER_BY_COUNTRY:
            let sortCountries = action.payload === 'asc' ?
            state.country.sort(function (a, b){
                if(a.name > b.name){
                    return 1
                }else if(a.name < b.name){
                    return -1
                }else return 0;
            }) :
            state.country.sort(function (a,b){
                if(a.name > b.name){
                    return -1
                }else if(a.name < b.name){
                    return 1
                }else return 0
            })
            return {
                ...state,
                country: sortCountries
            }
        
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filtered = action.payload === 'All' ?
            allCountries :
            allCountries.filter(e => e.continent === action.payload);
            return {
                ...state,
                country: filtered
            }

        case FILTER_BY_POPULATION:
            let sorted = action.payload === 'less' ?
            state.country.sort(function (a, b){
                if(a.population > b.population){
                    return 1
                }else if ( a.population < b.population){
                    return -1
                }else return 0
            })  : 
            state.country.sort(function(a, b){
                if(a.population > b.population){
                    return -1
                }else if (a.population < b.population){
                    return 1
                }else return 0
            })
            return {
                ...state,
                country: sorted
            }

        case GET_ONLY_COUNTRIES:
            return {
                ...state,
                onlyCountries: action.payload
            }

        case GET_TOURISM:
            return {
                ...state,
                tourism: action.payload
            }

        case COUNTRY_BY_TOURISM:
            const countries = state.country;
            const filteredCountries = action.payload === "All" ? 
            countries : 
            countries.filter(e => e.tourism.findAll(q => q.name === action.payload))
            return {
                ...state,
                country: filteredCountries
            }

        default:
            return state
    }
};