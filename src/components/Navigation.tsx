// SolidJS
import { For, type VoidComponent } from 'solid-js';
import { A } from '@solidjs/router';

// Components
import Logo from './Logo';


const Navigation: VoidComponent = (props) => {
  const links = [
    {name: 'Home', href: '/'},
    {name: 'Current weather', href: '/weather'},
    {name: '5-day forecast', href: '/forecast'},
    {name: 'Weather maps', href: '/maps'}
  ];

  return (
    <nav class="flex justify-start items-center gap-x-20 w-full h-16 px-8 bg-s text-p shadow-lg shadow-gray-400">
      <Logo />
      <div class="flex justify-center items-center h-full">
        <For each={links}>{
          (item, i) =>
            <A href={item.href} title={item.name} class="relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all before:content-[attr(title)] before:block before:font-bold before:opacity-0" activeClass="font-bold text-a" end={true}>
              <span class="absolute">{item.name}</span>
            </A>
        }</For>
      </div>
    </nav>
  );
}

export default Navigation;