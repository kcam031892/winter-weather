interface ICurrentWeather {
  feelslike_c: number;
  condition: ICurrentCondition;
}
interface ICurrentCondition {
  icon: string;
  text: string;
}

interface ILocationWeather {
  country: string;
  name: string;
}

export interface IForecastDay {
  date: Date;
  day: {
    maxtemp_c: number;
    condition: {
      icon: string;
    };
  };
}
export interface IForecast {
  forecastday: IForecastDay[];
}

export interface IWeather {
  current: ICurrentWeather;
  location: ILocationWeather;
  forecast: IForecast;
  error: Record<string, unknown>;
}
