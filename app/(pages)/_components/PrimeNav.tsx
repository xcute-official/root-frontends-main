"use client";

import Link from 'next/link';
import { ICON_S_SIZE } from '@/app/constants';
import clsx from 'clsx';
import React, { useState } from 'react'
import { TbBook2, TbCode, TbDevicesCode, TbLogin2, TbMenu, TbSmartHome } from 'react-icons/tb';
import ThemeToggle from '@/app/components/theme-toggle';
import { MdOutlineAccountCircle, MdOutlineContactPage } from 'react-icons/md';
import UserNav from '@/app/components/lggdn/UserNav';


interface Page {
  text: string;
  href: string;
  icon?: React.ReactNode;
}
const pages: Page[]=[
  {
    text: 'home',
    href: '/',
    icon: <TbSmartHome className={clsx(
      ICON_S_SIZE
    )}/>
  },{
    text: 'signin',
    href: '/authenticating/signin',
    icon: <TbLogin2 className={clsx(
      ICON_S_SIZE
    )}/>
  },{
    text: 'signup',
    href: '/authenticating/signup',
    icon: <MdOutlineAccountCircle className={clsx(
      ICON_S_SIZE
    )}/>
  },{
    text: 'ContactMe',
    href: '/business/contact',
    icon: <MdOutlineContactPage className={clsx(
      ICON_S_SIZE
    )}/>
  },{
    text: 'AppStore',
    href: '/explore/devs',
    icon: <TbDevicesCode className={clsx(
      ICON_S_SIZE
    )}/>
  },{
    text: 'Notes',
    href: '/explore/notes',
    icon: <TbBook2 className={clsx(
      ICON_S_SIZE
    )}/>
  }
]


const PrimeNav = () => {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <nav className='flex items-center justify-between w-full px-4 bg-background'>
      <div className='flex items-center gap-2'>
        <TbCode className={ICON_S_SIZE} />
        <span>xcute</span>
      </div>
      <div className='flex items-center gap-4 relative py-4'>
        <ThemeToggle />
        <button onClick={()=>setNav(!nav)} className={clsx(
          'md:hidden'
        )}>
          <TbMenu className={clsx(ICON_S_SIZE)}/>
        </button>
        <ul className={clsx(
          'md:flex gap-2 p-2 rounded-md',
          nav?'flex flex-col absolute top-full right-0 border p-9 gap-8 bg-background':'hidden'
        )}>
          {pages.map((page: Page, index: number)=>(
            <li key={index} onClick={()=>setNav(false)} className=''>
              <Link href={page.href}>
                <div className={clsx(
                  'flex items-center gap-2',
                  nav && 'justify-between'
                )}>
                  {page.icon}
                  <span>{page.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <UserNav />
      </div>
    </nav>
  )
}

export default PrimeNav