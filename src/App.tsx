import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import WeatherDisplay from './components/WeatherDisplay';
import FashionRecommendation from './components/FashionRecommendation';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
  padding: 20px;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <MainContent>
          <Title>날씨 기반 패션 추천</Title>
          <WeatherDisplay />
          <FashionRecommendation />
        </MainContent>
      </AppContainer>
    </Provider>
  );
}

export default App;
