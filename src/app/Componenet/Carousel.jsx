'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link'


const slideritems = [
  {
    image:'/images/product/carousel/chatgpt.webp',
  },
  {
    image:'/images/product/carousel/google.webp',
  },
  {
    image:'/images/product/carousel/tools.webp',
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // autoplay
  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.next();
    }, 7000);

    return () => clearInterval(interval);
  }, [instanceRef]);



  return (
    <div className="relative  mx-auto bg-gray-50 px-2 md:px-4 lg:px-5 z-0 mt-2 md:mt-4 lg:mt-5">

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {slideritems.map((item, index) => (
          <div key={index} className={`keen-slider__slide flex justify-center gap-7 md:gap-8 lg:gap-12 items-center bg-gradient-to-r ${item.bgColor} overflow-hidden rounded-xl mx-auto`}> 
          <Link href='/product/digital/id'> <Image src={item.image} width={1220} height={200} alt='offer'/></Link>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <Button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow hover:bg-gray-100"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </Button>

      {/* Next Button */}
      <Button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow hover:bg-gray-100"
        size="icon"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </Button>

 
    
    </div>
  );
}
