'use server';

// Types
import { type APIError } from "@/lib/types/Errors";


type AirPollution = {
  main: {
    aqi: number
  },
  components: {
    co: number,
    no: number,
    no2: number,
    o3: number,
    so2: number,
    pm2_5: number,
    pm10: number,
    nh3: number
  }
};

export type GetAirPollutionReturnType = AirPollution | APIError | {};

export async function getAirPollution(lat: number, lon: number): Promise<GetAirPollutionReturnType> {
  const query: string = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;

  var response = await fetch(query);
  var data = await response.json();

  if (!response.ok) {
    return {code: data.cod, message: data.message};
  }

  // Remove unnecessary keys:
  var newData: GetAirPollutionReturnType = {
    main: {
      aqi: data.list[0].main.aqi
    },
    components: {
      co: data.list[0].components.co,
      no: data.list[0].components.no,
      no2: data.list[0].components.no2,
      o3: data.list[0].components.o3,
      so2: data.list[0].components.so2,
      pm2_5: data.list[0].components.pm2_5,
      pm10: data.list[0].components.pm10,
      nh3: data.list[0].components.nh3
    }
  };

  return newData;
}