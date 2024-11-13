"use client";
import { Input } from '@/app/components/inputs';
import React, { useState } from 'react'
import { Button } from '@/app/components/buttons';
const NoteSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  return (
    <div className='w-full flex items-center gap-2 justify-center'>
        <Input onChange={(value: string)=>setSearchInput(value)} id='search' />
        <Button type="button">Search</Button>
    </div>
  )
}

export default NoteSearch