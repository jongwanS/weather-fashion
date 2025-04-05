import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  temperature: number;
  humidity: number;
  description: string;
  icon: string;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  temperature: 0,
  humidity: 0,
  description: '',
  icon: '',
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<Omit<WeatherState, 'loading' | 'error'>>) => {
      state.temperature = action.payload.temperature;
      state.humidity = action.payload.humidity;
      state.description = action.payload.description;
      state.icon = action.payload.icon;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setWeatherData, setLoading, setError } = weatherSlice.actions;
export default weatherSlice.reducer; 