// SolidJS
import { type VoidComponent } from 'solid-js';
import { A } from '@solidjs/router';

// Components
import Logo from './Logo';

const Navigation: VoidComponent = (props) => {
  return (
    <nav class="flex justify-start items-center gap-x-20 w-full h-16 px-8 bg-s text-p shadow-lg shadow-gray-400">
      <Logo />
      <div class="flex justify-center items-center h-full">
        <A href="/" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all" activeClass="font-bold text-a">Home</A>
        <A href="/weather" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all" activeClass="font-bold text-a">Current weather</A>
        <A href="/forecast" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all" activeClass="font-bold text-a">5-day forecast</A>
        <A href="/maps" class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all" activeClass="font-bold text-a">Weather maps</A>
      </div>
    </nav>
  );
}

export default Navigation;