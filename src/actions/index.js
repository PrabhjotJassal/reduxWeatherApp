import Axios from 'axios';

const API_KEY = '3add9147cdf378a3fccbe407dae61da8';
const WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(cityName) {
	const request =  Axios.get(`${WEATHER_ENDPOINT}&q=${cityName},aus`);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

