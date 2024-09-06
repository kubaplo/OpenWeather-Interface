'use client';

// Next
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// Components
import Logo from './Logo';


export default function Navigation() {
  const pathname = usePathname();

  const links = [
    {name: 'Home', href: '/'},
    {name: 'Current weather', href: '/weather'},
    {name: '5-day forecast', href: '/forecast'},
    {name: 'Weather maps', href: '/maps'}
  ];

  return (
    <nav className="flex justify-start items-center gap-x-20 w-full h-16 px-8 bg-s text-p shadow-lg shadow-gray-400">
      <Logo />
      <div className="flex justify-center items-center h-full">
        {
          links.map(
            (item, i) =>
            <Link key={i} href={item.href} title={item.name} className={clsx("relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all before:content-[attr(title)] before:block before:font-bold before:opacity-0", {'font-bold text-a': pathname === item.href})}>
              <span className="absolute">{item.name}</span>
            </Link>
          )
        }
      </div>
    </nav>
  );
}