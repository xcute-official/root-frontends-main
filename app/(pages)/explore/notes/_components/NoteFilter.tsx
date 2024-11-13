"use client";
import clsx from 'clsx';
import React, { useState } from 'react'
const filters = ['all', 'backend', 'security']
const NoteFilter = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const handleFilter = (fltr: string)=>{
        if(activeFilter===fltr){
            return;
        }
        setActiveFilter(fltr);
    }
  return (
    <div>
        <ul className='flex items-center gap-4'>
            {
                filters.map((filter: string, index: number)=>(
                    <li key={index} className={clsx(
                        'px-2 py-1.5 rounded-md text-sm border cursor-pointer',
                        filter===activeFilter && 'bg-foreground text-background'
                    )} onClick={()=>handleFilter(filter)}>
                        <span>{filter}</span>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NoteFilter