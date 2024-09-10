'use server';

type CurrentWeather = {
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  rain?: {
    '1h'?: number,
    '3h'?: number
  },
  snow?: {
    '1h'?: number,
    '3h'?: number
  }
  clouds: {
    all: number
  },
  sys: {
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  name: string,
  cod: number
};

type Error = {
  code: number, 
  message: string
};

export type GetCurrentWeatherReturnType = CurrentWeather | Error | {};

export async function getCurrentWeather(lat: number, lon: number, units: 'standard' | 'metric' | 'imperial' = 'metric'): Promise<GetCurrentWeatherReturnType> {
  const query: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.API_KEY}`;

  var response = await fetch(query);
  var data = await response.json();

  if (!response.ok) {
    return {code: data.cod, message: data.message};
  }

  // Remove unnecessary information from fetched data:
  delete data.coord;
  delete data.base;
  delete data.dt;
  delete data.sys.type;
  delete data.sys.id;
  delete data.id;

  return data;
}