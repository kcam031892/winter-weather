import { useState, useEffect } from 'react';

export const useClock = () => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const getDayClock = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const getDayValue = new Date().getDay();
    setDay(days[getDayValue]);
  };

  const getTimeClock = () => {
    const date = new Date();
    const hr = date.getHours();
    const minutes = date.getMinutes();
    const suffix = hr >= 12 ? 'PM' : 'AM';
    const convertedHour = hr > 12 ? hr - 12 : hr;
    const convertedMinutes = minutes < 10 ? '0' + minutes : '' + minutes;

    const currentTime = `${convertedHour}:${convertedMinutes} ${suffix}`;

    setTime(currentTime);
  };

  useEffect(() => {
    const dayInterval = setInterval(() => {
      getDayClock();
    }, 100);
    return () => clearInterval(dayInterval);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      getTimeClock();
    }, 100);
    return () => clearInterval(timeInterval);
  }, []);

  return {
    day,
    time,
  };
};
