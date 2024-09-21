'use client';

// React
import { useState, useEffect } from 'react';

// Server Actions
import { getCurrentWeather, type GetCurrentWeatherReturnType } from '@/lib/actions/getCurrentWeather';
import { getAirPollution, type GetAirPollutionReturnType } from '@/lib/actions/getAirPollution';

// Icons
import Sun from "@/ui/svg/Sun";
import Moon from "@/ui/svg/Moon";
import Gauge from "@/ui/svg/Gauge";
import Humidity from "@/ui/svg/Humidity";
import Wind from "@/ui/svg/Wind";
import Rain from "@/ui/svg/Rain";
import Snow from "@/ui/svg/Snow";
import Sunrise from "@/ui/svg/Sunrise";
import Sunset from "@/ui/svg/Sunset";

// Types
import { type CityType } from '@/lib/types/CityType';
import { type Units } from '@/lib/types/Units';

// Components
import AirPollutionBadge from '@/ui/components/AirPollutionBadge';

// Skeletons
import WeatherCardSkeleton from '@/ui/skeletons/WeatherCardSkeleton';


type WeatherCardProps = {
  city?: string,
  icon?: string,
  temp?: number,
  description?: string,
  minTemp?: number,
  maxTemp?: number,
  pressure?: number,
  humidity?: number,
  windSpeed?: number,
  rain?: number,
  snow?: number,
  sunrise?: string,
  sunset?: string
};

function exists(variable: any): boolean {
  if (typeof(variable) === 'undefined' || typeof(variable) === null) {
    return false;
  }

  return true;
}

function timezoneSpecificTime(timestamp: number, shift: number): string {
  const date = (new Date(timestamp + shift)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', timeZone: 'utc'});
  return date;
}

export default function WeatherCard({city, units}: {city: CityType, units: Units}) {
  const [weather, setWeather] = useState<WeatherCardProps>({});
  const [airPollution, setAirPollution] = useState<GetAirPollutionReturnType>({});
  const [loading, setLoading] = useState(false);

  var unitsCollection = {
    temp: '',
    speed: ''
  };

  if (units === 'metric') {
    unitsCollection = {
      temp: '°C',
      speed: 'm/s'
    }
  }

  else if (units === 'imperial') {
    unitsCollection = {
      temp: '°F',
      speed: 'mph'
    }
  }

  else if (units === 'standard') {
    unitsCollection = {
      temp: 'K',
      speed: 'm/s'
    }
  }

  useEffect(() => {
    async function fetchWeather() {
      if ('lat' in city && 'lon' in city) {
        setLoading(true);

        // Get current weather:
        const data: GetCurrentWeatherReturnType = await getCurrentWeather(city.lat, city.lon, units);
      
        const newWeather: WeatherCardProps = {};
        if ('main' in data) {
          newWeather.city = data.name;
          newWeather.icon = data.weather[0].icon;
          newWeather.temp = parseInt(data.main.temp.toFixed());
          newWeather.description = data.weather[0].description;
          newWeather.minTemp = parseInt(data.main.temp_min.toFixed());
          newWeather.maxTemp = parseInt(data.main.temp_max.toFixed());
          newWeather.pressure = data.main.pressure;
          newWeather.humidity = data.main.humidity;
          newWeather.windSpeed = data.wind.speed;
          newWeather.rain = data.rain ? data.rain['1h'] : undefined;
          newWeather.snow = data.snow ? data.snow['1h'] : undefined;
          newWeather.sunrise = timezoneSpecificTime(data.sys.sunrise * 1000, data.timezone * 1000);
          newWeather.sunset = timezoneSpecificTime(data.sys.sunset * 1000, data.timezone * 1000);
        }
        setWeather(newWeather);

        // Get air pollution:
        const airPollutionData: GetAirPollutionReturnType = await getAirPollution(city.lat, city.lon);
        setAirPollution(airPollutionData);

        setLoading(false);
      }
    }

    fetchWeather();
  }, [city, units]);

  if (loading) {
    return (
      <WeatherCardSkeleton />
    );
  }

  else {
    return (
      <div className="flex flex-col items-center w-full max-w-[500px] border border-sl rounded-xl shadow-xl overflow-hidden">
        <div className="flex justify-between items-center w-full min-h-20 bg-sl px-5">
          <label className="text-p text-xl font-bold break-words overflow-hidden">{exists(weather.city) ? weather.city : 'City name'}</label>
          <div className="group flex flex-col sm:flex-row items-center">
            { (weather.icon) ?
              <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} className='w-20 h-20 min-w-20 min-h-20' /> : null
            }
            <label className="relative group-has-[img]:top-[-15px] sm:top-0 text-p text-xl font-bold">{exists(weather.temp) ? `${weather.temp} ${unitsCollection.temp}` : 'Temp'}</label>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-5 w-full p-5">
          <label className="text-xl text-center">{exists(weather.description) ? weather.description?.toUpperCase() : 'Weather description'}</label>
          
          <div className="hidden sm:flex items-center gap-x-5">
            <Sun className="w-10 h-fit fill-sl" />
            <label className="text-xl text-center">{exists(weather.maxTemp) && exists(weather.minTemp) ? `${weather.maxTemp} ${unitsCollection.temp} / ${weather.minTemp} ${unitsCollection.temp}` : 'MAX / MIN'}</label>
            <Moon className="w-7 h-fit fill-sl" />
          </div>
          <div className="flex flex-col items-center gap-y-5 sm:hidden">
            <div className="flex items-center justify-center gap-x-5">
              <Sun className="w-10 h-fit fill-sl" />
              <label className="text-xl text-center">{exists(weather.maxTemp) ? `${weather.maxTemp} ${unitsCollection.temp}` : 'MAX'}</label>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <Moon className="w-7 h-fit fill-sl" />
              <label className="text-xl text-center">{exists(weather.minTemp) ? `${weather.minTemp} ${unitsCollection.temp}` : 'MIN'}</label>
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-5 w-full my-3">
            <hr className="border-0 border-b border-sl w-full" />
            <label className="text-xl">Details</label>
            <hr className="border-0 border-b border-sl w-full" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="flex items-center gap-x-2">
              <Gauge className="w-8 h-fit stroke-2 stroke-sl fill-none" />
              <label>{exists(weather.pressure) ? weather.pressure + ' hPa' : 'Pressure'}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <Humidity className="w-8 h-fit fill-sl" />
              <label>{exists(weather.humidity) ? weather.humidity + ' %' : 'Humidity'}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <Wind className="w-8 h-fit fill-sl" />
              <label>{exists(weather.windSpeed) ? weather.windSpeed + ` ${unitsCollection.speed}` : 'Wind speed'}</label>
            </div>
            { (weather.rain) ?
            <div className="flex items-center gap-x-2">
              <Rain className="w-8 h-fit fill-sl" />
              <label>{exists(weather.rain) ? weather.rain + ' mm' : 'Rain'}</label>
            </div> : null
            }
            { (weather.snow) ?
            <div className="flex items-center gap-x-2">
              <Snow className="w-8 h-fit stroke-sl" />
              <label>{exists(weather.snow) ? weather.snow + ' mm' : 'Snow'}</label>
            </div> : null
            }
            <div className="flex items-center gap-x-2">
              <Sunrise className="w-8 h-fit fill-sl stroke stroke-sl" />
              <label>{exists(weather.sunrise) ? weather.sunrise : 'Sunrise'}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <Sunset className="w-8 h-fit fill-sl stroke stroke-sl" />
              <label>{exists(weather.sunset) ? weather.sunset : 'Sunset'}</label>
            </div>
          </div>

          <AirPollutionBadge data={airPollution} />
        </div>
      </div>
    );
  }
}