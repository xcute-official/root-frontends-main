"use client";
import { getSession } from '@/app/actions/auth';
import { ICON_S_SIZE } from '@/app/constants';
import { SessionType } from '@/app/types';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md';

const UserNav = () => {
  
  return (
    <nav>
      <div className='focus:border p-2 rounded-md'>
        <MdOutlineAccountCircle className={clsx(ICON_S_SIZE)} />
      </div>
      <ul>
        <li>
          done
        </li>
      </ul>
    </nav>
  )
}

export default UserNav