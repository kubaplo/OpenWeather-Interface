// Icons
import Sun from "@/ui/svg/Sun";
import Moon from "@/ui/svg/Moon";
import Gauge from "@/ui/svg/Gauge";
import Humidity from "@/ui/svg/Humidity";
import Wind from "@/ui/svg/Wind";
import Precipitation from "@/ui/svg/Precipitation";
import Sunrise from "@/ui/svg/Sunrise";
import Sunset from "@/ui/svg/Sunset";


type WeatherCardProps = {
  city?: string,
  temp?: number,
  description?: string,
  minTemp?: number,
  maxTemp?: number,
  pressure?: number,
  humidity?: number,
  windSpeed?: number,
  rain?: number,
  sunrise?: number,
  sunset?: number
};

function exists(variable: any): boolean {
  if (typeof(variable) === 'undefined' || typeof(variable) === null) {
    return false;
  }

  return true;
}

export default function WeatherCard({city, temp, description, minTemp, maxTemp, pressure, humidity, windSpeed, rain, sunrise, sunset}: WeatherCardProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[500px] border border-sl rounded-xl shadow-xl overflow-hidden">
      <div className="flex justify-between items-center w-full bg-sl p-5">
        <label className="text-p text-xl font-bold">{exists(city) ? city : 'City name'}</label>
        <div className="flex items-center gap-x-5">
          <label className="text-p text-xl font-bold">{exists(temp) ? `${temp} °C` : 'Temp °C'}</label>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-5 w-full p-5">
        <label className="text-xl text-center">{exists(description) ? description : 'Weather description'}</label>
        
        <div className="flex items-center gap-x-5">
          <Sun className="w-10 h-fit fill-sl" />
          <label className="text-xl text-center">{exists(minTemp) && exists(maxTemp) ? `${minTemp} °C / ${maxTemp} °C` : 'MAX °C / MIN °C'}</label>
          <Moon className="w-7 h-fit fill-sl" />
        </div>

        <div className="flex justify-center items-center gap-x-5 w-full my-3">
          <hr className="border-0 border-b border-sl w-full" />
          <label className="text-xl">Details</label>
          <hr className="border-0 border-b border-sl w-full" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="flex items-center gap-x-2">
            <Gauge className="w-8 h-fit stroke-2 stroke-sl fill-none" />
            <label>{exists(pressure) ? pressure : 'Pressure'}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <Humidity className="w-8 h-fit fill-sl" />
            <label>{exists(humidity) ? humidity : 'Humidity'}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <Wind className="w-8 h-fit fill-sl" />
            <label>{exists(windSpeed) ? windSpeed : 'Wind speed'}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <Precipitation className="w-8 h-fit fill-sl" />
            <label>{exists(rain) ? rain : 'Rain'}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <Sunrise className="w-8 h-fit fill-sl stroke stroke-sl" />
            <label>{exists(sunrise) ? sunrise : 'Sunrise'}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <Sunset className="w-8 h-fit fill-sl stroke stroke-sl" />
            <label>{exists(sunset) ? sunset : 'Sunset'}</label>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-20 mt-10 bg-sl rounded-xl cursor-pointer">
          <label className="text-p text-xl text-center font-semibold pointer-events-none">Air quality</label>
        </div>
      </div>
    </div>
  );
}