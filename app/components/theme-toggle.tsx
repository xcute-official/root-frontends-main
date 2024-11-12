"use client";
import clsx from 'clsx';
import React, { useState } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb';
import { ICON_S_SIZE } from '../constants';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light'|'dark'>('light');
    const onClick = ()=>{
        setTheme(theme==='light'?'dark':'light');
        document.querySelector('html')?.setAttribute('data-theme', theme);
    }
  return (
    <button onClick={onClick} className='flex items-center gap-2'>
        <span>{theme}</span>
        <span>
            {
                theme==='dark'?(
                    <TbMoon className={clsx(
                        ICON_S_SIZE
                    )}/>
                ):(
                    <TbSun className={clsx(
                        ICON_S_SIZE
                    )}/>
                )   
            }
        </span>
    </button>
  )
}

export default ThemeToggle