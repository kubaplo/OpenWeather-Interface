// Next
import clsx from 'clsx';

// Icons
import Weather from '@/ui/svg/Weather';


type LogoProps = {
  size?: 'small';
};

export default function Logo({size}: LogoProps) {
  return (
    <div className="flex justify-center items-center gap-x-4 h-full select-none pointer-events-none">
      <Weather className={clsx("w-12 h-12 min-w-12 min-h-12 fill-a", {'w-10 h-10 min-w-10 min-h-10': size === 'small'})} />
      <label className={clsx("text-center text-base sm:text-xl font-bold", {'text-base': size === 'small'})}>OpenWeather Interface</label>
    </div>
  );
}