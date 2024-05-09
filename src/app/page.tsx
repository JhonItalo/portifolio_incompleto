import React from 'react'
import BannerMain from '@/components/bannerMain/bannerMain'

import About from '@/components/aboutMe.tsx/about'
import Projetos from '@/components/projetos/projetos'
import Skills from '@/components/skills/skills'
import Header from '@/layout/header/header'
import Habilidades from '@/components/habilidades/habilidades'

export default function page() {
  return (
    <>
      <Header />
      <main className='w-full'>
        <BannerMain />
        <About />
        <Projetos />
        <Habilidades />
      </main>
    </>

  )
}
{/* <Skills /> */ }













































/**
 * <section style={{ height: 'calc(100vh - 80px)' }} className='w-4/5 mx-auto flex items-center text-dark50 relative'>
          <ParticlesComponent id="particles" />
          <div>
            <div className='flex flex-col gap-2 text-2xl font-semibold uppercase'>
              <p className=''>olá, eu sou</p>
              <h2 className='text-5xl text-brandColor'>John Ítalo Lucas</h2>
              <h3 className=''>Densenvolvedor Front-end &</h3>
              <h3 className=''>Estudante de arquitetura de software</h3>
            </div>
            <div className='mt-12 flex gap-8 items-center'>
              <Link
                href="https://www.linkedin.com/in/johnitalodev/"
                className='px-4 py-2 border border-yellow-500'
                target='_blank'>
                Linkedin
              </Link>
              <Link
                href="https://github.com/JhonItalo"
                className='px-4 py-2 border border-yellow-500'
                target='_blanck'>
                Github
              </Link>
            </div>
          </div>


        </section>




             <header className='w-full h-20 text-dark50 flex justify-center '>
        <div className='w-4/5 flex justify-between items-center font-medium '>
          <h1 className='text-2xl font-medium text-brandColor'>Portifólio</h1>
          <nav>
            <ul className='flex gap-16 text-lg'>
              <li>
                <Link href="#" >Home</Link>
              </li>
              <li>
                <Link href="#">Projetos</Link>
              </li>
              <li>
                <Link href="#">Habilidades</Link>
              </li>
              <li>
                <Link href="#">Serviços</Link>
              </li>

            </ul>
          </nav>
        </div>

      </header>

 * 
 * 
 */