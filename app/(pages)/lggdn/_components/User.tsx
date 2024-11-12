"use client";
import { useSession } from '@/app/contexts/AuthContext';

import React from 'react'

const User = () => {
    const session = useSession();
    if(!session){
      return <div>Invalid user</div>
    }
  return (
    <div>
    </div>
  )
}

export default User