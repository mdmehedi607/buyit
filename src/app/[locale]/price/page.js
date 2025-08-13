'use client'
import { BadgeCheck, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Link from 'next/link'
import AnimatedButton from "@/app/Componenet/AnimatedButton";

export default function Price(){
    const pricelist=[
        {
            id:1,
            mode:"Pro",
            time:"1 Year Access",
            prevPrice:"$169",
            currPrice:"$69",
            feature1:"9900+ Programs (updated weekly)",
            feature2:"Access high ticket programs",
            feature3:"Access to 'Bookmark' page",
            feature4:"Search & filter programs",
            feature5:"All future updates",
            btn:"Get Access Now",
            mess:"One time payment for 1 year access",
            icon1:<BadgeCheck size={15} className='text-green-400'/>,
            icon2:<Check size={20} className='text-green-300'/>,
            icon3:<Check size={20} className='text-green-300'/>
        },
          {
            id:2,
            mode:"Pro",
            time:"Lifetime Deal",
            prevPrice:"$550",
            currPrice:"$179",
            feature1:"9900+ Programs (updated weekly)",
            feature2:"Access high ticket programs",
            feature3:"Access to 'Bookmark' page",
            feature4:"Search & filter programs",
            feature5:"All future updates",
            btn:"Get Lifetime Access Now",
            mess:"One time payment for 1 year access",
            icon1:<BadgeCheck size={15} className='text-green-400'/>,
            icon2:<Check size={20} className='text-green-300'/>,
            icon3:<Check size={20} className='text-green-300'/>
        },
          {
            id:3,
            mode:"Basic",
            time:"Try For Free",
            prevPrice:"$0",
            currPrice:"$0",
            feature1:"9900+ Programs (updated weekly)",
            feature2:"Access high ticket programs",
            feature3:"Access to 'Bookmark' page",
            feature4:"Search & filter programs",
            feature5:"All future updates",
            btn:"Get Access Now",
            mess:"One time payment for 1 year access",
            icon2:<Check size={20} className='text-green-300'/>,
            icon3:<X size={20} className='text-red-300'/>
        }
    ]
    return(
        <div className="flex flex-col gap-4 md:gap-5 justify-center items-center px-5 pt-30 py-15 bg-gray-200 dark:bg-neutral-900 ">
         <div className='w-full flex justify-baseline items-baseline'> <Link href='/'>/Home</Link></div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 dark:text-gray-100 text-center">Access all programs and future <br/> updates with lifetime membership</h2>
          <p className="text-xs md:text-sm  text-gray-500 dark:text-gray-300">Save your time with our pro plan</p>
          <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-7">
             {pricelist.map((price)=>
             <div key={price.id} className='flex flex-col gap-3 group justify-baseline items-baseline px-6 py-10 border border-blue-400 dark:border-neutral-500 rounded-lg border-t-3 bg-neutral-50 dark:bg-neutral-800 hover:scale-105 transition hover:dark:border-green-600 hover:border-green-700'>
                <div className='flex justify-center items-center px-2  rounded-md border border-gray-300 dark:border-neutral-500 gap-1 text-sm text-gray-700 dark:text-gray-200 dark:bg-neutral-600'> {price.mode} {price.icon1}</div>
                <span className='text-sm text-gray-600 dark:text-neutral-400'>{price.time}</span>
                <div className='flex justify-center items-end gap-3'>
                    <span className='line-through text-sm text-gray-600 dark:text-gray-400'>{price.prevPrice}</span>
                    <span className='text-3xl text-gray-700 dark:text-gray-100'>{price.prevPrice}</span>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>One time</span>
                </div>
                <div className='flex flex-col justify-baseline gap-1'>
                  <div className='flex justify-baseline items-center gap-1 text-sm text-gray-600 dark:text-gray-400'>{price.icon2} {price.feature1}</div>
                   <div className='flex justify-baseline items-center gap-1 text-sm text-gray-600 dark:text-gray-400'>{price.icon3} {price.feature2}</div>
                    <div className='flex justify-baseline items-center gap-1 text-sm text-gray-600 dark:text-gray-400'>{price.icon3} {price.feature3}</div>
                     <div className='flex justify-baseline items-center gap-1 text-sm text-gray-600 dark:text-gray-400'>{price.icon3} {price.feature4}</div>
                      <div className='flex justify-baseline items-center gap-1 text-sm text-gray-600 dark:text-gray-400'>{price.icon3} {price.feature5}</div>
                </div>
                <Button className='w-full bg-transparent border-2 border-blue-400 hover:bg-green-600 text-gray-600 hover:text-white dark:border-neutral-400 dark:text-gray-200 hover:border-none transition cursor-pointer group-hover:bg-green-600 group-hover:border-none group-hover:text-gray-200'>{price.btn} </Button>
                <span className='text-xs text-center text-gray-500 dark:text-neutral-300 w-full'>{price.mess}</span>
             </div>
            )}
          </div>
          <AnimatedButton/>
        </div>
    )
}