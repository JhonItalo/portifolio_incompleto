
import React from 'react';
import Image from 'next/image';

import styles from "./styles.module.scss"
import perfil2 from '../../assets/perfil2.png'


export default function About() {
   return (
      <section id='sobre' className='w-full h-screen  bg-dark20'>
         <div className='w-4/5 h-full mx-auto flex items-center text-dark50  '>
            <div className='w-full h-[400px] flex justify-around border  '>
               <div className='w-[380px] h-full relative border'>
                  <div className='w-full h-full absolute top-[-30px] left-[-30px] border-2 border-brandColor rounded-3xl '></div>
                  <div className='w-full h-full absolute bottom-[-30px] right-[-30px] border-2 border-brandColor rounded-3xl'></div>
                  <div className={`w-[380px] h-full bg-gray-400 p-12 rounded-3xl relative overflow-hidden ${styles.perfil} `} >
                     <Image
                        src={perfil2}
                        alt='foto de perfil do autor'
                        className={styles.myPicture}
                     ></Image>
                     <div className={styles.auxMyPicture}></div>
                  </div>
               </div>
               <article className='flex flex-col justify-around text-white'>
                  <div>
                     <h4 className='text-2xl font-semibold  uppercase'>Sobre mim</h4>
                     <p className='font-medium text-xl mt-6'>Fortaleza, Brasil</p>
                     <div className='w-full h-1 bg-brandColor'></div>
                  </div>
                  <div>
                     <p className='mt-6 text-textGray text-lg font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Praesent id egestas dui. Nullam finibus aliquam enim quis <br />
                        faucibus. Aenean ac commodo dolor, nec bibendum velit.
                        <br /> Praesent id egestas dui. Nullam finibus aliquam enim quis <br />
                     </p>
                  </div>

                  <div className='flex gap-8'>

                     <a
                        className='px-4 py-2 flex gap-4 items-center font-semibold border border-yellow-500'
                        href='/curriculo/front-c.pdf'
                        download="John-curriculo.pdf"
                        target='_blank'

                     >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8 17L12 21L16 17" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M12 12V21" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M20.8801 18.09C21.7494 17.4786 22.4014 16.6061 22.7413 15.5991C23.0813 14.5921 23.0915 13.503 22.7705 12.4898C22.4494 11.4766 21.8139 10.5921 20.9561 9.96456C20.0983 9.33703 19.0629 8.99916 18.0001 8.99999H16.7401C16.4393 7.82787 15.8765 6.73924 15.0942 5.81607C14.3118 4.89291 13.3302 4.15925 12.2233 3.67035C11.1163 3.18144 9.9129 2.95002 8.70358 2.99351C7.49426 3.037 6.31057 3.35426 5.24161 3.92142C4.17265 4.48858 3.24628 5.29084 2.53224 6.26782C1.81821 7.2448 1.33511 8.37104 1.11932 9.56174C0.903525 10.7524 0.960665 11.9766 1.28643 13.142C1.6122 14.3074 2.19811 15.3838 3.00005 16.29" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-base'>Currículo</p>
                     </a>

                     <a
                        href="#"
                        className='px-4 py-2 flex gap-4 items-center font-semibold border border-yellow-500 hover:border-brandColor'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M22 6L12 13L2 6" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-base'>E-mail</p>
                     </a>



                  </div>
               </article>
            </div>
         </div>
      </section >
   );
}
