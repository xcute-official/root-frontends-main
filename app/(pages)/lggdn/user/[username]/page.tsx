
import { getSession } from '@/app/actions/auth';
import React from 'react'
import User from '../../_components/User';
interface PageProps {
    params: {
        username: string;
    }
}
const page = async ({params}: PageProps) => {
    const {username} = await params;
    const session = await getSession();
  return (
    <div>{username}
      <User />
    </div>
  )
}

export default page