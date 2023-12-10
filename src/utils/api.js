import axios from 'axios';

const API_KEY = 'jjjhhh';       //This is Wrong API key, Use authorized key 
const BASE_URL ='https://youtube138.p.rapidapi.com';

const options = {
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const {data}  = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

