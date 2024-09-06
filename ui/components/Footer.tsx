// Next
import Link from "next/link";

// Components
import Logo from "./Logo";

// Icons
import LinkExternal from "@/ui/svg/LinkExternal";


type FooterLinkGroupProps = {
  title: string,
  links: {name: string, href: string}[]
};

function FooterLinkGroup({title, links}: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col items-center gap-y-5 p-5 rounded-xl border-sl border-2">
      <label className="text-base font-semibold self-center">{title}</label>
      <ul className="space-y-0">
        {
          links.map((item, i) => 
            <li key={i}>
              <Link href={item.href} target="_blank" className="group relative flex items-center gap-x-2 py-1 hover:text-a transition-all">
                <div className="w-1.5 h-1.5 bg-sl rounded-full group-hover:bg-a transition-all"></div>
                <label className="text-center text-sm select-none pointer-events-none">{item.name}</label>
                <LinkExternal className="size-3 stroke-2 stroke-p group-hover:stroke-a transition-all" />
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-y-5 w-full p-5 mt-auto bg-s text-p">
      <div className="flex flex-wrap gap-5 justify-center">
        <FooterLinkGroup title='General information' links={[{name: 'Guide', href: 'https://openweathermap.org/guide'}, {name: 'Pricing', href: 'https://openweathermap.org/price'}, {name: 'Get free API key', href: 'https://home.openweathermap.org/users/sign_up'}]} />
        <FooterLinkGroup title='API documentation' links={[{name: 'Current weather', href: 'https://openweathermap.org/current'}, {name: '5 day weather forecast', href: 'https://openweathermap.org/forecast5'}, {name: 'Weather maps', href: 'https://openweathermap.org/api/weathermaps'}, {name: 'Air pollution', href: 'https://openweathermap.org/api/air-pollution'},  {name: 'Geocoding', href: 'https://openweathermap.org/api/geocoding-api'}]} />
        <FooterLinkGroup title='Author links' links={[{name: 'GitHub', href: 'https://github.com/kubaplo'}, {name: 'LinkedIn', href: 'https://www.linkedin.com/in/jakub-plocidem/'}]} />
      </div>
      <label className="text-center text-sm">
        OpenWeather Interface © {(new Date()).getFullYear()} by <Link href="https://github.com/kubaplo" target="_blank" className="underline hover:text-a transition-all">kubaplo</Link> is licensed under <Link href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" className="underline hover:text-a transition-all">CC BY-SA 4.0</Link>
      </label>
      <label className="text-center text-sm">
        API is provided by <Link href="https://openweathermap.org/" target="_blank" className="underline hover:text-a transition-all">OpenWeather</Link>
      </label>
      <Logo size='small' />
    </footer>
  );
}