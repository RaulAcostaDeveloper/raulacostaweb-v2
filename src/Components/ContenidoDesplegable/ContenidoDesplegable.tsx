'use client'
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
let pop = typeof window !== 'undefined' ? new Audio('/sounds/pop.mp3') : undefined;
type Props = {
    title: string;
    colapse?: boolean;
    children: ReactNode;
}
export const ContenidoDesplegable = ({ children, title, colapse }: Props) => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        if (colapse != undefined) {
            setIsOpen(colapse);
        }
    }, [colapse]);
    const reproducirPop = () => {
        // @ts-ignore
        // Puede ser undefined
        pop.play();
    }
    return (
        <article className='contenidoDesplegableStyle'>
            <h3 title='Click to open/close' className='titulo' onClick={() => { setIsOpen(!isOpen); reproducirPop(); }}>{title} <Image src={isOpen ? '/icons/downarrowbold.png' : '/icons/rightarrowbold.png'} alt="arrow" width={30} height={30} /></h3>
            {isOpen && <div>{children}</div>}
        </article>
    )
}