import React from 'react'
import Text from './Text';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

function Collaborate() {

    const collaborate = useTranslations("collaborate");
    const connectTools = useTranslations("connectTools");

     const data = [
        {
            id:1,
            title:`${collaborate("title1")}`,
            desc:`${collaborate("desc1")}`,
            href:"/price",
            btn:`${collaborate("btn1")}`
        },
         {
            id:2,
            title:`${collaborate("title2")}`,
            desc:`${collaborate("desc2")}`,
            href:"/marketplace",
            btn:`${collaborate("btn2")}`
        },
         {
            id:3,
            title:`${collaborate("title3")}`,
            desc:`${collaborate("desc3")}`,
            href:"/trust-center",
            btn:`${collaborate("btn3")}`
        },

    ]
  return (
    <>
    <section className='flex flex-col justify-center items-center py-10 px-3 md:px-10 lg:px-15 bg-gray-50 dark:bg-neutral-900'>
     <div className='flex justify-center items-center py-5 w-2/4 md:w-2/6 text-center'>
       <Text as='h2' className='text-xl md:text-3xl font-bold text-gray-700 dark:text-gray-100'>
          {collaborate("mainTitle")}
       </Text>
     </div>
     <div className='flex flex-col md:flex-row gap-3 justify-center items-center'>
       {data.map((data)=><div key={data.id} className='flex flex-col justify-baseline items-baseline p-2 md:px-8 gap-5'>
          <Text as='h4' className='text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300'>{data.title}</Text>
          <Text as='p' className='text-xs md:text-sm text-gray-500 dark:text-gray-400'>{data.desc}</Text>
          <Link href={`${data.href}`}><Button className='bg-blue-500 dark:bg-neutral-500 hover:bg-blue-600 dark:hover:bg-neutral-600 text-white dark:text-gray-100 cursor-pointer'><Text>{data.btn}</Text></Button></Link>
       </div>)}
     </div>
     
    </section>
    <div className='px-5 md:px-30 py-15 flex  justify-center items-center bg-white  dark:bg-neutral-900'
     >
      <div className='flex flex-col md:flex-row gap-5  md:gap-15 justify-center items-center'>
        <Image src='/images/secondpart.png' alt='second' width={320} height={320}/>
        <div className='flex flex-col justify-baseline items-baseline gap-5 md:gap-10'>
          <Text as='h3' className='text-xl text-gray-800 md:text-3xl font-bold dark:text-neutral-50'>{connectTools("title")}</Text>
           <Text as='p' className='text-xs text-gray-500 md:text-sm dark:text-neutral-300'>{connectTools("desc")}</Text>
           <Button className='bg-blue-500 text-gray-50 text-sm dark:bg-neutral-500 hover:bg-blue-600 dark:hover:bg-neutral-600'><Text as={Link} href="/">{connectTools("btn")}</Text></Button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Collaborate;