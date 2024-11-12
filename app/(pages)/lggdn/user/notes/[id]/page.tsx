import React from 'react';
import { NoteContent } from '../_components/NoteContent';
import NoteInitialize from '../_components/NoteInitialize';
interface PageProps {
    params: {
        id: string;
    }
}
const page = async ({params}: PageProps) => {
    const {id} = await params;
  return (
    <div className='w-full'>
      <section className='w-full'>
        <div className='mx-auto md:w-1/2'>
          <NoteInitialize />
        </div>
      </section>
    </div>
  )
}

export default page