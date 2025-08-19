import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const socialItems= [
    {
        id:1,
        icon:<Instagram className='w-6 h-6 text-white'/>,
        href:'/'
    },
      {
        id:2,
        icon:<Twitter className='w-6 h-6 text-white'/>,
        href:'/'
    },
      {
        id:3,
        icon:<Youtube className='w-6 h-6 text-white'/>,
        href:'/'
    },
      {
        id:4,
        icon:<Facebook className='w-6 h-6 text-white'/>,
        href:'/'
    },
]

function Footer() {
  return (
    <footer className='flex flex-col w-screen md:flex-row justify-center items-center gap-5 md:gap-20 px-8 md:px-40 py-10 bg-gray-950'>
      <div className='flex flex-col gap-5 md:gap-8 flex-1 justify-center items-baseline'>
         <div className="flex justify-center items-center">
         <Link href='/' className="flex justify-center items-center">
           <Image src='/images/aquawhite.png' width={120} height={20} alt="logo" className="flex justify-center items-center "/>
         </Link>
       </div>
       <span className='text-sm md:text-[16px] text-gray-300'>Copyright &copy; 2024 Mehedi Hasan <br /> All right reserved</span>
       <div className='flex justify-center items-center gap-3'>
          {socialItems.map((item, index)=>
          <Link href={item.href} key={index}>
                 <div  className='p-2 rounded-full flex justify-center items-center bg-gray-800 hover:bg-green-600 transition'>{item.icon}</div>
          </Link>
        )}
       </div>
      </div>
      <div className='flex flex-2 flex-col md:flex-row justify-center items-baseline gap-5 md:gap-15'>
        <div className='flex flex-col flex-1 justify-baseline items-baseline gap-2 '>
            <h5 className='text-white text-lg font-semibold'>Company</h5>
           <Link href='/about' className='text-[16px] text-gray-300'>About Us</Link>
            <Link href='/blog' className='text-[16px] text-gray-300'>Blog</Link>
             <Link href='/contact' className='text-[16px] text-gray-300'>Contact Us</Link>
              <Link href='/price' className='text-[16px] text-gray-300'>Pricing</Link>
               <Link href='/testmonial' className='text-[16px] text-gray-300'>Testmonials</Link>
        </div>
        <div className='flex flex-col flex-1 justify-baseline items-baseline gap-2 '>
            <h5 className='text-white text-lg font-semibold'>Support</h5>
           <Link href='/help' className='text-[16px] text-gray-300'>Help Center</Link>
            <Link href='/terms-condition' className='text-[16px] text-gray-300'>Terms & Condition</Link>
             <Link href='/legal' className='text-[16px] text-gray-300'>Legal</Link>
              <Link href='/privacy-policy' className='text-[16px] text-gray-300'>Privacy Policy</Link>
               <Link href='/status' className='text-[16px] text-gray-300'>Status</Link>
        </div>
        <div className='flex flex-col flex-2 justify-baseline items-baseline gap-2 '>
          <h5 className='text-white text-lg font-semibold'>Stay up to date</h5>
          <div className='flex justify-center items-center relative'>
            <Input type='email' placeholder='Your email address' className='bg-gray-800 border-0 placeholder:text-gray-400 w-full'/>
            <Send className='absolute right-2 w-4 h-4 text-gray-200'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;