import React from 'react'
import Card_project from '../cardsProject/card_project'
import { mainProjects, cardsProject } from '@/data/mainProjects'
import Player_project from '../playerProject/player_project'

export default function Projetos() {
    return (

        <section id='projetos' className='w-4/5 mx-auto py-20 text-dark50 relative '>
            <h4 className='text-2xl font-semibold uppercase'>Projetos</h4>
            <div className='mt-10 flex flex-col gap-16  '>
                {mainProjects.map((item: cardsProject, index) => (
                    <Card_project key={(item.name)} item={item} index={index} />
                ))}
            </div>
            <Player_project />


        </section >


    )
}
