import React from 'react'
import NoteSearch from './_components/NoteSearch'
import NoteFilter from './_components/NoteFilter'
import NotesList from './_components/NotesList'

const page = () => {
  return (
    <div className='w-full'>
        <section className='w-full'>
            <div className='w-full flex flex-col gap-4'>
                {/* search */}
                <div className='w-full flex justify-center'>
                    <NoteSearch/>
                </div>
                {/* filters */}
                <div className='w-full flex justify-center'>
                  <NoteFilter/>
                </div>
            </div>
            <div>

            </div>
            <div>
              <NotesList />
            </div>
        </section>
    </div>
  )
}

export default page