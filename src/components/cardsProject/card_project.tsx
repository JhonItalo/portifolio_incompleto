'use client'
import React, { useEffect, useRef } from 'react'
import { cardsProject } from '@/data/mainProjects'
import Link from 'next/link'
import { motion } from "framer-motion"

interface card_projest_props {
    item: cardsProject
    index: number
}

export default function Card_project({ item, index }: card_projest_props) {
    const Carrosel = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleResize = () => {
            if (Carrosel.current) {
                Carrosel.current.scrollLeft = 0
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const automaticSlideTimer = setInterval(() => {
            if (Carrosel.current) {
                if (Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
                } else if (Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
                    Carrosel.current.scrollLeft =
                        Carrosel.current.scrollWidth - Carrosel.current.offsetWidth;
                } else if (
                    Carrosel.current.scrollLeft ===
                    Carrosel.current.scrollWidth - Carrosel.current.offsetWidth
                ) {
                    Carrosel.current.scrollLeft = 0;
                } else {
                    return;
                }
            }
        }, 5000);

        return () => clearInterval(automaticSlideTimer);
    }, []);

    let animationConfig = {
        viewport: { once: true, amount: 1, margin: "150px" },
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 1 }
    };
    if (index % 2 != 0) {
        animationConfig = {
            viewport: { once: true, amount: 1, margin: "150px" },
            initial: { opacity: 0, x: 100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 1 }

        };
    }


    return (
        <motion.div {...animationConfig}
            className={`w-full h-[350px]  flex gap-8  ${index % 2 != 0 ? "flex-row-reverse" : ""} `}>

            <div className='w-2/4 h-full px-4 py-2 flex items-center rounded-3xl  border-gray-400 border-2 bg-dark5'>
                <div ref={Carrosel} className='w-full h-[300px] flex overflow-hidden relative  rounded-md ' >
                    {item.image_path.map((path) => (

                        <img key={path} src={path} alt={`projeto ${item.name}`} className='w-full h-full flex-none
                        ' />
                    ))}
                </div>
            </div>
            <article className={`w-2/5 flex flex-col py-2 justify-between grow`}>
                <div>
                    <h5 className='text-xl font-semibold'>{item.name}</h5>
                    <p className='text-textGray'>{item.description}</p>
                </div>


                <div className='flex gap-4'>
                    <Link className='px-4 py-2 flex gap-4 items-center font-semibold border border-brandBorder'
                        target='_blank' href={item.url_deploy}> Deploy </Link>
                    <Link className='px-4 py-2 flex gap-4 items-center font-semibold border border-brandBorder'
                        target='_blank' href={item.url_repo}> Repositório </Link>
                </div>


                <div className={`text-base flex gap-2 flex-wrap `}>
                    {item.tecnologies.map((item) => (
                        <div className='text-base px-2 border' key={item}>
                            {item}
                        </div>
                    ))}
                </div>
            </article>
        </motion.div >
    )
}
