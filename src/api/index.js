import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = url+'/countries/'+country;
    }
    try {
        //const {data: {confirmed, recovered, deaths, lastUpdate}} = axios.get('https://covid19.mathdro.id/api');
        const {data} = await axios.get(changeableUrl);
        const fetchedData = {
            confirmed:data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
       return fetchedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(url+'/daily');
        console.log(data);
        //return data;
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.confirmed.total,
            date: dailyData.confirmed.total,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(url+'/countries')
        const countryNames = countries.map((country) => country.name);
        return countryNames;
    } catch (error) {
        console.log(error);
    }
}