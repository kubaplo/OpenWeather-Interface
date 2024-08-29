// SolidJS
import { VoidComponent } from "solid-js";

// Icons
import Weather from '~/svg/Weather';


type LogoProps = {
  size?: 'small';
};

const Logo: VoidComponent<LogoProps> = (props) => {
  return (
    <div class="flex justify-center items-center gap-x-2 h-full select-none pointer-events-none">
      <Weather class="w-12 h-12 fill-a" classList={{'w-10 h-10' : props.size === 'small'}} />
      <label class="text-center text-xl font-bold" classList={{'text-base' : props.size === 'small'}}>OpenWeather Interface</label>
    </div>
  );
}

export default Logo;