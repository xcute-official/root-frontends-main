import React from 'react'
import Link from 'next/link'
import Modal from '../components/modal'
const page = () => {
  return (
    <div className='w-full'>
      <section className='w-full'>
        <div className='mt-32'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Welcome to developer&apos;s Place</h1>
            <span className='text-slate-800'>we develop websites and softwares, custom softwares</span>
            <div className='flex items-center gap-16 justify-center'>
              <Link href="/" className='rounded-full px-4 py-2 text-sm bg-slate-800 text-white'>
                <div>
                  <span>for Businesses</span>
                </div>
              </Link>
              <Link href="/" className='rounded-full px-4 py-2 text-sm bg-white text-black'>
                <div>
                  <span>for Students</span>
                </div>
              </Link>
            </div>
            <div className='flex items-center gap-8 justify-center mt-32'>
              <span className='font-extrabold'>web Developers</span>
              <span className='font-extrabold'>software Developers</span>
              <span className='font-extrabold'>iT Services</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page