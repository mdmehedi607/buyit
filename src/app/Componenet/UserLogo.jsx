// components/LogoSlider.js
'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Text from './Text'
export default function LogoSlider() {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    let scrollAmount = 0

    const scrollLogos = () => {
      scrollAmount += 1
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0
      }
      slider.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }

    const interval = setInterval(scrollLogos, 20)
    return () => clearInterval(interval)
  }, [])

  const logos = [
    'logo1',
    'logo2',
    'logo3',
    'logo4',
    'logo5',
  ]

  const usert = useTranslations("userLogo");

  return (
    <div className="overflow-hidden w-full bg-white dark:bg-neutral-950 py-6 md:py-12">
      <div className='flex justify-center items-center text-xs md:text-lg text-gray-500 dark:text-gray-200 py-5 '>
           <Text>{usert("trust")}</Text>
      </div>
      <div
        className="flex gap-0 md:gap-5 lg:gap-8 w-max animate-slide whitespace-nowrap"
        ref={sliderRef}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="min-w-[150px]">
            <Image
              src={`images/user/${logo}-light.svg`}
              className="block dark:hidden h-10 md:h-16 w-auto"
              alt={logo}
               width={60}
              height={40}
            />
            <Image
              src={`/images/user/${logo}-dark.svg`}
              className="hidden dark:block h-10  md:h-16 w-auto"
              alt={logo}
              width={60}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
