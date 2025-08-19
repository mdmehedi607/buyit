"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight,Search, ShoppingCart } from "lucide-react";
import Text from './Text';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: "Canva Premium(EDU)",
    subtitle: " ৳100 - ৳200",
    image:'/images/product/cardSlide/canva.webp'
  },
  {
    id: 2,
    title: "ChatGPT Plus Subscription",
    subtitle: " ৳120 - ৳400",
     image:'/images/product/cardSlide/chatgpt.webp'
  },
  {
    id: 3,
    title: "Educational Combo",
    subtitle: " ৳200 -  ৳500",
    image:'/images/product/cardSlide/educational.webp'
  },
  {
    id: 4,
    title: "HIX AI Price",
    subtitle: " ৳199 - ৳499",
     image:'/images/product/cardSlide/hixai.webp'
  },
  {
    id: 5,
    title: "Office 365 Pro Plus",
    subtitle: "৳199 - ৳499",
    image:'/images/product/cardSlide/office365.webp'
  },
  {
    id: 6,
    title: "Quilbot Premium Price in BD",
    subtitle: "৳199 - ৳599",
     image:'/images/product/cardSlide/quilbot.webp'
  },
   {
    id: 7,
    title: "Turnitin Student Account",
    subtitle: "৳149 - ৳1599",
    image:'/images/product/cardSlide/turnitin.webp'
  },
  {
    id: 8,
    title: "Udemi Premium Account",
    subtitle: "৳299 - ৳2499",
     image:'/images/product/cardSlide/udemi.webp'
  },
];

export default function CardSlider() {
  {/* Hover autoplay stop */}
const swiperRef = useRef(null);
useEffect(() => {
    if (!swiperRef.current) return;

    const swiperEl = swiperRef.current.el;

    const stopAutoplay = () => swiperRef.current.autoplay.stop();
    const startAutoplay = () => swiperRef.current.autoplay.start();

    swiperEl.addEventListener("mouseenter", stopAutoplay);
    swiperEl.addEventListener("mouseleave", startAutoplay);

    return () => {
      swiperEl.removeEventListener("mouseenter", stopAutoplay);
      swiperEl.removeEventListener("mouseleave", startAutoplay);
    };
  }, []);
    const cardT = useTranslations('cardSlider');
  return (
    <div className="w-full py-10 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 relative">
     <div className="flex items-center justify-center w-full my-8">
  <div className="flex-1 h-[2px] bg-red-500"></div>
  <Text as='h2' className="px-4 text-xl  md:text-4xl  font-semibold text-gray-900 dark:text-gray-100">
    {cardT('specialOffer')}
  </Text>
  <div className="flex-1 h-[2px] bg-red-500"></div>
</div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false}}
          loop={true}
          breakpoints={{

            440: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          // Fix: custom navigation attach
            onBeforeInit={(swiper) => {
            swiperRef.current = swiper; // save swiper instance
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
          className="!pb-12"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="rounded-b-2xl overflow-hidden shadow-md bg-white dark:bg-neutral-800 group relative pb-20 cursor-pointer ">
            <div className='overflow-hidden'>
              <Image
                  src={s.image}
                  width={1000}
                  height={1500}
                  alt={s.title}
                  className="h-full w-full object-cover group-hover:scale-120 overflow-hidden transition duration-400 "
                />
            </div>
                <div className="flex flex-col justify-center items-center  bg-white dark:bg-neutral-800 p-3 w-full absolute translate-y-16 bottom-1 group-hover:-translate-y-0 group-active:-translate-y-0   transition-transform duration-600 ">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm text-red-400 dark:text-green-300">
                    {s.subtitle}
                  </p>
                  <div className='flex justify-center items-center gap-4 pt-5 '>
                     <Link href='/'>
                    <button className='w-15 h-12 rounded-md bg-neutral-900 hover:bg-orange-500  cursor-pointer flex items-center translate-y-10 group-hover:translate-y-0 group-active:translate-y-0  transition-all duration-700 delay-100 justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'><Search className="w-6 h-6 text-gray-200 dark:text-white"/></button>
                       </Link>
                     <Link href='/'>
                    <button  className='w-15 h-12 rounded-md bg-neutral-900 hover:bg-orange-500 flex items-center justify-center translate-y-10 group-hover:translate-y-0 group-active:translate-y-0 transition-all cursor-pointer duration-900 delay-150 opacity-0 group-hover:opacity-100 group-active:opacity-100'><ShoppingCart className="w-6 h-6 text-gray-200 dark:text-white"/></button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* কাস্টম বাটন */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-0 z-10">
          <button className="custom-prev bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition">
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-white" />
          </button>
        
          <button className="custom-next bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition">
            <ArrowRight className="w-5 h-5 text-gray-700 dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}


