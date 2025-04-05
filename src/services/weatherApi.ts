import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // OpenWeather API 키를 여기에 입력하세요
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });

    return {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };
  } catch (error) {
    throw new Error('날씨 정보를 가져오는데 실패했습니다.');
  }
}; 