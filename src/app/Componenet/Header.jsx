'use client'
import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { Activity, AirVent, AppWindow, Building, Cable, ChevronDown, Code, Drone, EthernetPort, Facebook, Fence, Menu, TabletSmartphone, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Switcher from './Switcher';
import {useTranslations} from 'next-intl';
import LoginDialoge from './LoginDialoge';
import ThemeToggle from './theme-toggle';
import Text from './Text';
import { AnimatePresence, motion } from "framer-motion";


function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [dialogeOpen, setDialogeOpen]=useState(false);
  const toggleSubMenu = (key) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const t = useTranslations('Navbar');
  const tDrop = useTranslations('Dropdown');
  return (
    <div className='flex justify-baseline w-full items-center gap-5  py-3 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-gray-600 fixed top-0 z-10' >
        <div className='flex justify-center items-center pl-3 md:pl-10'>
          <Link href='/'><Image src='/images/aqua.png' width={100} height={40} alt='BuyIt Logo'/></Link>
        </div>
        {/*Desktop*/}
         <div className='hidden lg:flex justify-between items-center w-full pr-10'>
          <div className='flex justify-center items-center'>
          <div className="hidden md:flex gap-1">
          <div className="group relative">
            <Button variant="ghost" className='text-gray-800 dark:text-gray-100 font-semibold text-md flex justify-center items-center gap-2 hover:bg-white cursor-pointer'><Text>{t('item1')}</Text> 
            <ChevronDown className='group-hover:rotate-180 transition dark:text-gray-100'/>
            </Button>
            <div className="absolute hidden group-hover:flex flex-col bg-white dark:bg-gray-950 shadow-lg rounded px-4 py-4 mt-1 ">
              <Text as={Link} href="/products/digital"  className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Activity className='w-3 h-3 font-semibold dark:text-gray-100'/> {tDrop('drop1')}</Text>
              <Text as={Link} href="/products/electronics" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Cable className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop2')}
              </Text>
              <Text as={Link} href="/products/wooden" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Fence className='w-3 h-3 font-semibold dark:text-gray-100'/> 
              {tDrop('drop3')}
              </Text>
             <Text as={Link} href="/products/smartphone" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><TabletSmartphone className='w-3 h-3 font-semibold dark:text-gray-100'/>
             {tDrop('drop4')}
             </Text>
            </div>
          </div>

          <div className="group relative">
            <Button variant="ghost" className='flex text-gray-800 dark:text-gray-100 text-md font-semibold justify-center items-center gap-2 cursor-pointer'>
             <Text> {t('item2')}</Text> 
              <ChevronDown className='group-hover:rotate-180 transition dark:text-gray-100'/>
            </Button>
             <div className="w-56 absolute hidden group-hover:flex flex-col bg-white dark:bg-gray-950 shadow-lg rounded px-4 py-4 mt-1 ">
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800  rounded border-b"><Code className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop5')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Drone className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop6')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><AirVent className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop7')}
              </Text>
             <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><AppWindow className='w-3 h-3 font-semibold dark:text-gray-100'/>
             {tDrop('drop8')}
             </Text>
            </div>
          </div>
            <div className="group relative">
            <Button variant="ghost" className='flex text-gray-800 dark:text-gray-100 text-md font-semibold justify-center items-center gap-2 cursor-pointer'>
              <Text >{t('item3')} </Text>
              <ChevronDown className='group-hover:rotate-180 transition dark:text-gray-100'/>
            </Button>
             <div className="w-50 absolute hidden group-hover:flex flex-col bg-white dark:bg-gray-950 shadow-lg rounded px-4 py-4 mt-1 ">
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-5 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><EthernetPort className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop9')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-5  py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Building className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop10')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-5 pr-5 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Facebook className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop11')}
              </Text>
             <Text as={Link} href="/blog" className="flex items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-5 pr-5 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded border-b"><Youtube className='w-3 h-3 font-semibold dark:text-gray-100'/>
             {tDrop('drop12')}
             </Text>
            </div>
          </div>
        <Text as={Link} href="/enterprise" className="px-4 py-2 text-gray-800 dark:text-gray-100 text-md font-semibold  hover:text-gray-900">
         {t('item4')} 
        </Text>
        <Text as={Link} href="/price" className="px-4 py-2 text-gray-800 dark:text-gray-100 text-md font-semibold hover:text-gray-900">
        {t('item5')} 
        </Text>
        </div>
         </div>
         <div className='hidden lg:flex justify-center items-center gap-5'>
           <Switcher/> 
           <Text as={Link} href='/contact-us' className='font-semibold text-md text-gray-900 dark:text-gray-100'>{t("item6")}</Text>
           <Button variant='secondary' className='flex justify-center items-center text-md px-5 bg-blue-600 hover:bg-blue-700 text-gray-100 dark:bg-transparent dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:border dark:border-gray-100 dark:text-gray-100 font-semibold cursor-pointer' onClick={()=>setDialogeOpen(!dialogeOpen)} ><Text>{t("item7")}</Text></Button>
           <LoginDialoge dialogeopen={dialogeOpen} setdialogeopen={setDialogeOpen}/>
           <ThemeToggle/>
           
         </div>
         </div>
       <div className='flex lg:hidden justify-end items-center relative w-full  gap-3 '>
        <div>
          <Switcher/>
        </div>
        <div><ThemeToggle/></div>
         {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden pr-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      

      {/* Mobile Menu */}
       

      {menuOpen && (
       
                   
        <div className="lg:hidden flex flex-col absolute w-full top-[50px]  bg-white dark:bg-neutral-800 shadow-lg p-4 z-20">
          <div className='border-b '>
            <Button variant="ghost" onClick={() => toggleSubMenu("product")} className='text-gray-800 text-left dark:text-gray-100 font-semibold text-md flex justify-between w-full items-center gap-2  hover:bg-white'><Text>{t('item1')}</Text> 
             <span>{subMenuOpen.product ? "-" : "+" }</span>
            </Button>
            <AnimatePresence>
            {subMenuOpen.product && (
              <motion.div
               
                initial={{  height:0 }}
                animate={{  height:"auto" }}
                exit={{  height:0 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" flex flex-col">
              <Text as={Link} href="/products/digital" onClick={()=>setMenuOpen(false)} className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Activity className='w-3 h-3 font-semibold dark:text-gray-100'/> {tDrop('drop1')}</Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Cable className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop2')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Fence className='w-3 h-3 font-semibold dark:text-gray-100'/> 
              {tDrop('drop3')}
              </Text>
             <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><TabletSmartphone className='w-3 h-3 font-semibold dark:text-gray-100'/>
             {tDrop('drop4')}
             </Text>
             </div>
            </motion.div>
          
            )}
             </AnimatePresence>
          </div>

           <div className='border-b'>
            <Button variant="ghost" onClick={() => toggleSubMenu("solutions")} className='text-gray-800 text-left dark:text-gray-100 font-semibold text-md flex justify-between w-full items-center gap-2 hover:bg-white '><Text>{t('item2')}</Text> 
             <span>{subMenuOpen.solutions ? "-" : "+" }</span>
            </Button>
            <AnimatePresence>
            {subMenuOpen.solutions && (
              <motion.div
               
                initial={{  height:0 }}
                animate={{  height:"auto" }}
                exit={{  height:0 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" flex flex-col">
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Activity className='w-3 h-3 font-semibold dark:text-gray-100'/> {tDrop('drop5')}</Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Cable className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop6')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Fence className='w-3 h-3 font-semibold dark:text-gray-100'/> 
              {tDrop('drop7')}
              </Text>
             <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><TabletSmartphone className='w-3 h-3 font-semibold dark:text-gray-100'/>
             {tDrop('drop8')}
             </Text>
             </div>
            </motion.div>
          
            )}
             </AnimatePresence>
          </div>
           <div className='border-b'> 
            <Button variant="ghost" onClick={() => toggleSubMenu("resource")} className='text-gray-800 text-left dark:text-gray-100 font-semibold text-md flex justify-between w-full items-center gap-2 hover:bg-white'><Text>{t('item3')}</Text> 
             <span>{subMenuOpen.resource ? "-" : "+" }</span>
            </Button>
            <AnimatePresence>
            {subMenuOpen.resource && (
              <motion.div
               
                initial={{  height:0 }}
                animate={{  height:"auto" }}
                exit={{  height:0 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" flex flex-col">
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Activity className='w-3 h-3 font-semibold dark:text-gray-100'/> {tDrop('drop9')}</Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Cable className='w-3 h-3 font-semibold dark:text-gray-100'/>
              {tDrop('drop10')}
              </Text>
              <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded "><Fence className='w-3 h-3 font-semibold dark:text-gray-100'/> 
              {tDrop('drop11')}
              </Text>
             <Text as={Link} href="/blog" className="flex  items-center gap-2 text-gray-700 dark:text-gray-100 font-semibold px-6 py-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><TabletSmartphone className='w-3 h-3 font-semibold dark:text-gray-100'/>
             {tDrop('drop12')}
             </Text>
             </div>
            </motion.div>
          
            )}
             </AnimatePresence>
          </div>

           <Text as={Link} href="/enterprise" className="px-4 py-2 text-gray-800 dark:text-gray-100 text-md font-semibold  hover:text-gray-900 border-b">
         {t('item4')} 
        </Text>
        <Text as={Link} href="/price" className="px-4 py-2 text-gray-800 dark:text-gray-100 text-md font-semibold hover:text-gray-900 border-b">
        {t('item5')} 
        </Text>
        <Text as={Link} href='/contact-us' className='px-4 py-2 text-gray-800 dark:text-gray-100 text-md font-semibold hover:text-gray-900 border-b'>{t("item6")}</Text>
        <Button variant='secondary' className='flex justify-center items-center text-md px-5 bg-blue-600 hover:bg-blue-700 text-gray-100 dark:bg-transparent dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:border dark:border-gray-100 dark:text-gray-100 font-semibold cursor-pointer' onClick={()=>setDialogeOpen(!dialogeOpen)} ><Text>{t("item7")}</Text></Button>
        </div>
     
      )}
       </div>
      </div>
  )
}

export default Header;