import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from './store';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherFashion from './components/WeatherFashion';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <WeatherDisplay />
        <WeatherFashion />
      </AppContainer>
    </Provider>
  );
};

export default App;
