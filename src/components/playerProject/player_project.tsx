'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow"



export default function Player_project() {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.8, }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className='w-full mt-40' >
            <Swiper
                className='w-full h-[300px] '
                
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}

                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide className=' bg-red-500 '>Slide 1</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 2</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 3</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 4</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 5</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 6</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>
                    {({ isActive }) => (
                        <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                    )}
                </SwiperSlide>

            </Swiper>

        </motion.div >
    )
}
{/* 
            <Swiper
                // install Swiper modules
                modules={[Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}

                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 1</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 2</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 3</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 4</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 5</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>Slide 6</SwiperSlide>
                <SwiperSlide className='w-[200px] h-[200px] bg-red-500 transform transition-transform hover:scale-150 '>
                    {({ isActive }) => (
                        <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                    )}
                </SwiperSlide>
                ...
            </Swiper>

 */}