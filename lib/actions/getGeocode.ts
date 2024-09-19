'use server';

// Types
import { type APIError } from "@/lib/types/Errors";


type Geocode = {
  name: string,
  lat: number,
  lon: number,
  country: string,
  state: string
}[];

export type GetGeocodeReturnType = Geocode | APIError;

export async function getGeocode(q: string, limit: number): Promise<GetGeocodeReturnType> {
  const query: string = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${limit}&appid=${process.env.API_KEY}`;

  var response = await fetch(query);
  var data = await response.json();

  if (!response.ok) {
    return {code: data.cod, message: data.message};
  }

  // Remove "local_names" from fetched data:  
  for (let i = 0; i < data.length; i++) {
    delete data[i].local_names;
  }

  return data;
}