'use client'
import React, { useEffect, useState } from 'react'

export default function BackToTop() {

    const [activescrolly, setactivescrolly] = useState(false)

    useEffect(() => {
        const scrolly = () => {
            if (window.scrollY > 0) {
                setactivescrolly(true)
            }
            else {
                setactivescrolly(false)
            }

        }
        window.addEventListener('scroll', scrolly);
        return () => {
            window.removeEventListener('scroll', scrolly);
        }
    }, [])

    return (
        <a href='#' className={`w-14 h-14 p-2 ${activescrolly ? "" : "hidden"} bg-slate-100 opacity-90 rounded-full flex justify-center items-center  fixed right-6 bottom-6 `}
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); }}
        >
            <svg className='w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </a>
    )
}
