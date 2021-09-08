import { API_URL } from 'config';
import { useQuery } from 'react-query';
import { IWeather } from 'interface/Weather';
import { useState } from 'react';

export const useWeather = () => {
  const [location, setLocation] = useState('Navotas City');

  const fetchWeather = async (location: string) => {
    const response = await fetch(`${API_URL}&q=${location}&days=7&aqi=no&alerts=no`);
    const weather = response.json();
    return weather;
  };
  const { data, isLoading, refetch, isError, error } = useQuery<IWeather, Error>(
    ['weather', location],
    () => fetchWeather(location),
    {
      staleTime: 60 * 1000,
    }
  );
  return {
    data,
    isLoading,
    refetch,
    setLocation,
    isError,
    error,
  };
};
