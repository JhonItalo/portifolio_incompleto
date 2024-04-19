
import BackToTop from "@/components/buttonBackToTop/backToTop"
import React from 'react'

export default function Header() {
    return (
        <header className={`w-full h-20  text-dark50 bg-dark10 flex justify-center absolute z-10 top-0  `}>
            <div className='w-4/5 flex justify-between items-center font-medium '>
                <a href="#">
                    <h1 className='text-2xl font-medium text-brandColor tracking-wide'>Portifólio</h1>
                </a>
                <nav>
                    <ul className='flex gap-16 text-lg'>
                        <li>
                            <a href="#">Início</a>
                        </li>
                        <li>
                            <a href="#sobre" >Sobre mim</a>
                        </li>
                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>
                        <li>
                            <a href="#skills">Habilidades</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <BackToTop />
        </header>

    )
}
