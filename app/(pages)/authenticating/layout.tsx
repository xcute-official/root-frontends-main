import React from 'react'

const layout = ({children}: {children: React.ReactNode;}) => {
  return (
    <div className='w-full'>
        <section className='w-full'>
            <div className='w-full md:w-1/4'>
                {children}
            </div>
        </section>
    </div>
  )
}

export default layout