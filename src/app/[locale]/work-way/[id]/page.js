'use client';
import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Text from './../../../Componenet/Text';
import Link from "next/link";
import Image from 'next/image';

function WorkwayDetails() {
      const workway = useTranslations("workWay");
    
        const workList = [
            {   id:"1",
                title:`${workway("title1")}`,
                fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway1.png",
                moreimg:["/images/workway/workway1.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            },
              {  id:"2",
                title:`${workway("title2")}`,
                fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway2.png",
                  moreimg:["/images/workway/workway2.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            },
              { id:"3",
                title:`${workway("title3")}`,
                fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway8.png",
                moreimg:["/images/workway/workway8.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            },
              { id:"4",
                title:`${workway("title4")}`,
              fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway9.png",
                moreimg:["/images/workway/workway9.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            },
              { id:"5",
                title:`${workway("title5")}`,
                fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway5.png",
                  moreimg:["/images/workway/workway5.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            },
              { id:"6",
                title:`${workway("title6")}`,
                fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway6.png",
                  moreimg:["/images/workway/workway6.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            },
              { id:"7",
                title:`${workway("title7")}`,
                fullDesc:`${workway("fulldesc1")}`,
                src:"/images/workway/workway10.png",
                  moreimg:["/images/workway/workway10.png","/images/workway/workway4.png","/images/workway/workway3.png",]
            }
        ]
          const params = useParams();
          const pid = params.id;
          
          
 const items = workList.find((item) => item.id === pid);
  if (!items) return notFound()

    const [activeImg, setActiveImg]= useState(items.moreimg[0]);
  return (
    <section className='flex flex-col px-5 md:px-15 py-10 mt-14 bg-gray-50 dark:bg-neutral-950 gap-5'>
      <Link href='/' className=' w-15'>/Home</Link>
        <div className='flex flex-col justify-center items-center w-full gap-2'>
          <Text as='h2' className='text-2xl md:text-4xl font-bold text-gray-700 dark:text-neutral-200 '>{workway("heading")}:</Text>
          
        </div>
        <div className='flex justify-center items-center'>
          <Image src={activeImg} alt={items.title} width={600} height={400} className='w-140 h-80 object-cover'/>
        </div>
        <div className='flex justify-center items-center w-full px-20 gap-5'>
          {items.moreimg.map((img, i)=>
          <Image src={img} key={i} width={50} height={50} alt='nai' onClick={()=>setActiveImg(img)} className={`w-20 h-15 object-cover rounded cursor-pointer border-2 hover:border-blue-500 transition ${activeImg === img ? "border-blue-500 scale-115" :""}`}/>
          )}
        </div>
        <div className='flex flex-col items-baseline justify-balseline px-2 md:px-10'> 
          <Text as='h5'className='text-xl md:text-2xl font-bold text-gray-600 dark:text-neutral-200 '>{items.title} :</Text>
          <Text as='p' className='text-sm md:text-[16px] text-gray-500 dark:text-neutral-200'>{items.fullDesc}</Text>
        </div>
    </section>
  )
}

export default WorkwayDetails;