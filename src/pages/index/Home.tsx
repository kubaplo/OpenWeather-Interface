// SolidJS
import { type Component } from "solid-js";

// Components
import FeatureCard from "~/components/FeatureCard";
import SpecialMessage from "~/components/SpecialMessage";

// Icons
import Clock24 from "~/svg/Clock24";
import Calendar from "~/svg/Calendar";
import Map from "~/svg/Map";


const Home: Component = (props) => {
  return (
    <article class="flex flex-col justify-center items-center gap-y-14 flex-1 w-full p-5 my-20">
      <div class="flex flex-col justify-center items-center gap-y-2">
        <h1 class="text-3xl sm:text-6xl text-center font-semibold">OpenWeather Interface</h1>
        <h3 class="text-base sm:text-xl text-center">Open-source graphical interface for OpenWeather API</h3>
      </div>
      <SpecialMessage content="Using OpenWeather free API key you can access the following information:" />
      <div class="flex flex-wrap justify-center items-center gap-20">
        <FeatureCard icon={Clock24} title='Current weather' description='Get meteorological data for the next 24 hours for any city in the world. Available parameters:' list={['General weather description', 'Min/max temperature', 'Pressure', 'Humidity', 'Wind speed', 'Amount of precipitation', 'Time of sunrise and sunset', 'Air pollution']} />
        <FeatureCard icon={Calendar} title='5 day forecast' description='Check the weather 5 days in advance with 3-hour intervals. Data is presented on easy-to-read charts where you can find information like:' list={['Temperature', 'Pressure', 'Humidity', 'Wind speed', 'Degree of cloudiness', 'Amount of precipitation']} />
        <FeatureCard icon={Map} title='Weather maps' description='Get maps of any area on the globe with different meteorological layers plotted on them. There are several layers available:' list={['Clouds', 'Precipitation', 'Pressure', 'Wind', 'Temperature']} />
      </div>
    </article>
  );
}

export default Home;