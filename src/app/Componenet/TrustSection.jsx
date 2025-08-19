import Link from 'next/link';
import React from 'react'
import Text from './Text';
import { useTranslations } from 'next-intl';

function TrustSection() {
  const trustT = useTranslations("trustSection");
    const trustItem =[
        {
            title:`${trustT("title1")}`,
            details:`${trustT("details1")}`,
        },
        {
            title:`${trustT("title2")}`,
            details:`${trustT("details2")}`,
        },
        {
            title:`${trustT("title3")}`,
            details:`${trustT("details3")}`,
        },
        {
            title:`${trustT("title4")}`,
            details:`${trustT("details4")}`,
        },
        {
            title:`${trustT("title5")}`,
            details:`${trustT("details5")}`,
        },
        {
            title:`${trustT("title6")}`,
            details:`${trustT("details6")}`,
        },
        
    ]
  return (
    <section className='flex flex-col justify-center items-center gap-8 md:gap-14 p-10 w-full bg-sky-300 dark:bg-neutral-700'>
      <div className='flex flex-col justify-center items-center gap-2 w-2/3'>
       <Text as='h3' className='text-lg md:text-4xl font-bold text-gray-700 dark:text-neutral-100 text-center'>
       {trustT("heading")}
       </Text>
      <Text as={Link} href='/' className='text-xs md:text-sm text-gray-600 dark:text-neutral-300 decoration-1 text-center'>{trustT("desc")} </Text>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 '>
        {trustItem.map((item,i)=>
        <div key={i}>
           <div className='flex flex-col items-center justify-center gap-2  px-10 md:px-18 py-2 md:py-6'>
             <Text as='h4' className='text-xl md:text-4xl font-bold text-gray-900 dark:text-neutral-100'>{item.title}</Text>
             <Text as='span' className='text-xs md:text-sm text-gray-600 dark:text-neutral-300 text-center'>{item.details}</Text>
           </div>
        </div>
        )}
      </div>

    </section>
  )
}

export default TrustSection;