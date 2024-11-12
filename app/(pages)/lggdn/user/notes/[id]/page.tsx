import React from 'react';
interface PageProps {
    params: {
        id: string;
    }
}
const page = async ({params}: PageProps) => {
    const {id} = await params;
  return (
    <div>page</div>
  )
}

export default page