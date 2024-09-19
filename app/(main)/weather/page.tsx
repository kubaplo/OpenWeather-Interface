'use client';

// React
import { useState } from 'react';

// Components
import CitySearchBar from "@/ui/components/CitySearchBar";
import WeatherCard from "@/ui/components/WeatherCard";
import UnitsSelector from '@/ui/components/UnitSelector';

// Types
import { type CityType } from '@/lib/types/CityType';
import { type Units } from '@/lib/types/Units';


export default function Page() {
  const [city, setCity] = useState<CityType>({});
  const [units, setUnits] = useState<Units>('metric');

  return (
    <article className="flex flex-col items-center gap-y-5 w-full p-5">
      <label className="text-xl text-center">Start typing city name and then select specific city from the list</label>
      <CitySearchBar setCity={setCity} />
      <UnitsSelector units={units} setUnits={setUnits} />
      <WeatherCard city={city} units={units} />
    </article>
  );
}