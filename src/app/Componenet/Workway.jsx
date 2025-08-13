'use client'
import { useTranslations } from 'next-intl';
import React,{useState} from 'react'
import Text from './Text';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence} from 'framer-motion';

function Workway() {
  const workway = useTranslations("workWay");

    const workList = [
        {   id:1,
            title:`${workway("title1")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway1.png"
        },
          {  id:2,
            title:`${workway("title2")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway2.png"
        },
          { id:3,
            title:`${workway("title3")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway8.png"
        },
          { id:4,
            title:`${workway("title4")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway9.png"
        },
          { id:5,
            title:`${workway("title5")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway5.png"
        },
          { id:6,
            title:`${workway("title6")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway6.png"
        },
          { id:7,
            title:`${workway("title7")}`,
            shortDesc:`${workway("shortdesc1")}`,
            src:"/images/workway/workway10.png"
        }
    ]
    const [currentTab, setCurrentTab]=useState(workList[0]);
  return (
    <section className='flex flex-col gap-5 w-full justify-baseline items-baseline px-5 md:px-25 py-5 md:py-10 bg-gray-50 dark:bg-neutral-800'>
     <div className='flex justify-center items-center'>
      <Text as='h3' className='text-xl md:text-3xl text-gray-700 dark:text-gray-100 font-bold'>{workway("heading")}</Text>
     </div>
     <div className='flex flex-wrap justify-center items-center gap-3'>
      {workList.map((work)=>
       <div  key={work.id} className='flex justify-center items-center'>
           <Button className={`text-xs md:text-sm text-gray-600 dark:text-gray-300 cursor-pointer flex justify-center items-center bg-transparent border border-blue-600 dark:border-gray-100 rounded-2xl hover:text-gray-200 dark:hover:bg-neutral-400 dark:hover:text-gray-900 hover:bg-blue-600 ${currentTab.id === work.id && 'bg-blue-600 text-gray-200 dark:bg-neutral-400 dark:text-gray-900'}`} onClick={()=>setCurrentTab(work)}><Text>{work.title}</Text></Button>
        </div>
      )}
     </div>
     <div className='flex flex-col md:flex-row justify-center items-start md:px-5  py-5 gap-5 md:gap-12'>
      <AnimatePresence mode='wait'>
      <motion.div 
      key={currentTab.id}
        initial={{ y: 30 }}
        animate={{  y: 0 }}
        transition={{ duration: 0.5 }}
      className='flex flex-col flex-2 justify-baseline items-baseline gap-4 py-3 md:py-10'>
        <Text as='h5' className='text-sm md:text-lg font-bold text-gray-700 dark:text-gray-200'>{currentTab.title}</Text>
        <Text as='p'  className='text-xs md:text-sm text-gray-500 dark:text-gray-400'>{currentTab.shortDesc}</Text>
        <Link href={`/work-way/${currentTab.id}`} className='flex justify-center items-center gap-1 text-xs md:text-sm text-blue-500 dark:text-neutral-300'><Text>{workway("link")}</Text> <MoveRight size={15}/></Link>
      </motion.div>
      <motion.div
       initial={{ y: 30 }}
        animate={{  y: 0 }}
        transition={{ duration: 0.5 }}
      className='flex flex-3 justify-center items-center'><Image src={currentTab.src} width={630} height={520} alt={currentTab.title} /> </motion.div>
      </AnimatePresence>
     </div>
    </section>
  )
}

export default Workway;