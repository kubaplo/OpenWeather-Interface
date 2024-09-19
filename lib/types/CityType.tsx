import { APIError } from "@/lib/types/Errors";

export type CityType = {
  name: string,
  lat: number,
  lon: number,
  country: string,
  state: string
} | APIError | {};