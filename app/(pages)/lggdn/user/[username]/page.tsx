
import { getSession } from '@/app/actions/auth';
import React from 'react'
import User from '../../_components/User';

const page = async () => {
  return (
    <div>
      <User />
    </div>
  )
}

export default page