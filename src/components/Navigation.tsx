// SolidJS
import { type VoidComponent } from 'solid-js';
import { A } from '@solidjs/router';

// Icons
import Weather from '~/svg/Weather';


const Navigation: VoidComponent = (props) => {
  return (
    <nav class="flex justify-start items-center gap-x-20 w-full h-16 px-8 bg-s text-p shadow-lg shadow-gray-400">
      <div class="flex justify-center items-center gap-x-2 h-full select-none pointer-events-none">
        <Weather class="w-12 h-12 fill-a" />
        <label class="text-center text-xl font-bold">OpenWeather Interface</label>
      </div>
      <div class="flex justify-center items-center h-full">
        <A href="/" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all">Home</A>
        <A href="/weather" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all">Current weather</A>
        <A href="/forecast" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all">5-day forecast</A>
        <A href="/maps" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all">Weather maps</A>
      </div>
    </nav>
  );
}

export default Navigation;