import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';
import { setWeatherData, setLoading, setError } from '../store/weatherSlice';
import { getWeather } from '../services/weatherApi';

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const Temperature = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 10px;
`;

const Humidity = styled.div`
  font-size: 1rem;
  color: #888;
`;

const WeatherDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { temperature, humidity, description, icon, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        dispatch(setLoading(true));
        // 실제 앱에서는 사용자의 위치를 가져와서 사용해야 합니다
        const weatherData = await getWeather(37.5665, 126.9780); // 서울의 위도/경도
        dispatch(setWeatherData(weatherData));
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : '날씨 정보를 가져오는데 실패했습니다.';
        dispatch(setError(errorMessage));
      }
    };

    fetchWeather();
  }, [dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <WeatherContainer>
      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <Temperature>{Math.round(temperature)}°C</Temperature>
      <Description>{description}</Description>
      <Humidity>습도: {humidity}%</Humidity>
    </WeatherContainer>
  );
};

export default WeatherDisplay; 