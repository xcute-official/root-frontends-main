
import React, { useState } from 'react'
import { JSONContent } from '@tiptap/react';
import { NoteContent } from '../../_components/NoteContent';


const page = async () => {
  return (
    <div className='w-full h-full'>
      <NoteContent />
    </div>
  )
}

export default page