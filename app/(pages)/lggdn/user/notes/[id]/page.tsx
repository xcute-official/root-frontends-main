import React from 'react';
import NoteInitialize from '../_components/NoteInitialize';

const page = async () => {
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