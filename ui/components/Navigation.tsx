'use client';

// Next
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import Logo from './Logo';

// Icons
import Menu from '@/ui/svg/Menu';
import Close from '@/ui/svg/Close';


export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    {name: 'Home', href: '/'},
    {name: 'Current weather', href: '/weather'},
    {name: '5-day forecast', href: '/forecast'},
    {name: 'Weather maps', href: '/maps'}
  ];

  return (
    <nav className="fixed top-0 left-0 flex justify-start items-center gap-x-5 sm:gap-x-20 w-full h-16 px-8 bg-s text-p shadow-lg shadow-[rgba(0,0,0,0.25)] z-[998]">
      <Logo />
      <div className="hidden lg:flex justify-center items-center h-full">
        {
          links.map(
            (item, i) =>
            <Link key={i} href={item.href} title={item.name} className={clsx("relative flex justify-center items-center h-full px-5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-p lg:hover:bg-sl lg:hover:after:w-full transition-all after:transition-all before:content-[attr(title)] before:block before:font-bold before:opacity-0", {'font-bold text-a': pathname === item.href})}>
              <span className="absolute text-center">{item.name}</span>
            </Link>
          )
        }
      </div>
      
      <div onClick={() => setOpen(o => !o)} className="flex lg:hidden justify-center items-center ml-auto h-full cursor-pointer">
        <Menu className="w-8 h-fit fill-p" />
      </div>
      <motion.div initial={{translateX: '100%'}} animate={open ? {translateX: '0%'} : {translateX: '100%'}} transition={{ease: 'easeInOut'}} className={clsx("fixed lg:hidden right-0 top-0 max-w-full h-screen px-10 py-5 bg-s transition-shadow duration-300", {"shadow-[-5px_-5px_15px_2px_rgba(0,0,0,0.25)]": open, "shadow-none": !open})}>
        <div className="flex justify-between items-center mb-10">
          <label className="font-bold">MENU</label>
          <div onClick={() => setOpen(o => !o)} className="cursor-pointer">
            <Close className="w-6 h-fit fill-p" />
          </div>
        </div>
        {
          links.map(
            (item, i) =>
            <Link key={i} href={item.href} title={item.name} className={clsx("relative flex justify-center items-center py-4 border-b border-p last:border-none transition-all before:content-[attr(title)] before:block before:font-bold before:opacity-0", {'font-bold text-a': pathname === item.href})}>
              <span className="absolute text-center">{item.name}</span>
            </Link>
          )
        }
      </motion.div>
    </nav>
  );
}