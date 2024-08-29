// SolidJS
import { type VoidComponent, For } from "solid-js";
import { A } from "@solidjs/router";

// Components
import Logo from "./Logo";

// Icons
import LinkExternal from "~/svg/LinkExternal";


type FooterLinkGroupProps = {
  title: string,
  links: {name: string, href: string}[]
};

const FooterLinkGroup: VoidComponent<FooterLinkGroupProps> = (props) => {
  return (
    <div class="flex flex-col items-center gap-y-5 p-5 rounded-xl border-sl border-2">
      <label class="text-base font-semibold self-center">{props.title}</label>
      <ul class="space-y-0">
        <For each={props.links}>{
          (item, i) => 
            <li>
              <A href={item.href} target="_blank" class="group relative flex items-center gap-x-2 py-1 hover:text-a transition-all">
                <div class="w-1.5 h-1.5 bg-sl rounded-full group-hover:bg-a transition-all"></div>
                <label class="text-center text-sm select-none pointer-events-none">{item.name}</label>
                <LinkExternal class="size-3 stroke-2 stroke-p group-hover:stroke-a transition-all" />
              </A>
            </li>
        }</For>
      </ul>
    </div>
  );
}

const Footer: VoidComponent = (props) => {
  return (
    <footer class="flex flex-col items-center gap-y-5 w-full p-5 mt-auto bg-s text-p">
      <div class="flex flex-wrap gap-5 justify-center">
        <FooterLinkGroup title='General information' links={[{name: 'Guide', href: 'https://openweathermap.org/guide'}, {name: 'Pricing', href: 'https://openweathermap.org/price'}, {name: 'Get free API key', href: 'https://home.openweathermap.org/users/sign_up'}]} />
        <FooterLinkGroup title='API documentation' links={[{name: 'Current weather', href: 'https://openweathermap.org/current'}, {name: '5 day weather forecast', href: 'https://openweathermap.org/forecast5'}, {name: 'Air pollution', href: 'https://openweathermap.org/api/air-pollution'},  {name: 'Geocoding', href: 'https://openweathermap.org/api/geocoding-api'}]} />
        <FooterLinkGroup title='Author links' links={[{name: 'GitHub', href: 'https://github.com/kubaplo'}, {name: 'LinkedIn', href: 'https://www.linkedin.com/in/jakub-plocidem/'}]} />
      </div>
      <label class="text-center text-sm">
        OpenWeather Interface © {(new Date()).getFullYear()} by <A href="https://github.com/kubaplo" target="_blank" class="underline hover:text-a transition-all">kubaplo</A> is licensed under <A href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" class="underline hover:text-a transition-all">CC BY-SA 4.0</A>
      </label>
      <label class="text-center text-sm">
        API is provided by <A href="https://openweathermap.org/" target="_blank" class="underline hover:text-a transition-all">OpenWeather</A>
      </label>
      <Logo size='small' />
    </footer>
  );
}

export default Footer;