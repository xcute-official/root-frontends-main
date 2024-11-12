"use client";

import Link from 'next/link';
import { ICON_S_SIZE } from '@/app/constants';
import clsx from 'clsx';
import React from 'react'
import { TbCode, TbSmartHome } from 'react-icons/tb';
import ThemeToggle from '@/app/components/theme-toggle';


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
  }
]


const PrimeNav = () => {
  return (
    <nav className='flex items-center justify-between w-full px-4 py-4'>
      <div className='flex items-center gap-2'>
        <TbCode className={ICON_S_SIZE} />
        <span>xcute</span>
      </div>
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <ul className='flex items-center gap-4'>
          {pages.map((page: Page, index: number)=>(
            <li key={index}>
              <Link href={page.href}>
                <div className='flex items-center gap-2'>
                  <span>{page.text}</span>
                  {page.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default PrimeNav