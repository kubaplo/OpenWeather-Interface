import CitySearchBar from "@/ui/components/CitySearchBar";
import WeatherCard from "@/ui/components/WeatherCard";


export default function Page() {
  return (
    <article className="flex flex-col items-center gap-y-5 w-full p-5">
      <label className="text-xl text-center">Start typing city name and then select specific city from the list</label>
      <CitySearchBar />
      <WeatherCard />
    </article>
  );
}