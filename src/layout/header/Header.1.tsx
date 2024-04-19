import Link from 'next/link';
import React, { useState } from 'react';


export default function Header() {

    const [activescrolly, setactivescrolly] = useState(false);

    useEffect(() => {
        const scrolly = () => {
            if (window.scrollY > 0) {
                setactivescrolly(true);
            }
            else {
                setactivescrolly(false);
            }

        };
        window.addEventListener('scroll', scrolly);
        return () => {
            window.removeEventListener('scroll', scrolly);
        };
    }, []);


    return (
        <header className='w-full h-20 mb-20 text-dark50 bg-dark10 flex justify-center fixed z-10 top-0 '>
            <div className='w-4/5 flex justify-between items-center font-medium '>
                <h1 className='text-2xl font-medium text-brandColor tracking-wide'>Portifólio</h1>
                <nav>
                    <ul className='flex gap-16 text-lg'>
                        <li>
                            <Link href="#perfil">Home</Link>
                        </li>
                        <li>
                            <Link href="#sobre" scroll={true}>Sobre mim</Link>
                        </li>
                        <li>
                            <Link href="#">Projetos</Link>
                        </li>
                        <li>
                            <Link href="#">Habilidades</Link>
                        </li>
                        <li>
                            <Link href="#">Blog</Link>
                        </li>

                    </ul>
                </nav>
            </div>

        </header>

    );
}
