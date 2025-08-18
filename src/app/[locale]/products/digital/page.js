import Carousel from '@/app/Componenet/Carousel';
import React from 'react'
import Link from 'next/link'
import CardSlider from '@/app/Componenet/CartSlider';
function page() {
  return (
    <section className='px-5 md:px-15 pt-20 bg-gray-50 dark:bg-neutral-900'>
      <Link href='/' className='text-sm text-gray-600'>/Home</Link>
      {/*Special Product Carousel */}
      <div>
        <Carousel/>
        <CardSlider/>
      </div>

    </section>
  )
}

export default page;