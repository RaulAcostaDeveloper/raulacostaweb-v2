'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { ArrowButton1 } from "../Buttons/ArrowButton1/ArrowButton1";

type tuple = [string, string];

export const SelectorDePaginaDev = () => {
    const [pathAnterior, setPathAnterior] = useState<tuple>(['', '']);
    const [pathSiguiente, setPathSiguiente] = useState(['', '']);

    const pathname = usePathname();
    // Esto lo hice yo, que no te sorprenda
    useEffect(() => {
        switch (pathname) {
            case '/dev':
                setPathAnterior(['/dev/certificados', 'Certificados']);
                setPathSiguiente(['/dev/curriculum', 'Currículum']);
                break;
            case '/dev/curriculum':
                setPathAnterior(['/dev', 'Perfil']);
                setPathSiguiente(['/dev/portafolio', 'Portafolio']);
                break;
            case '/dev/portafolio':
                setPathAnterior(['/dev/curriculum', 'Currículum']);
                setPathSiguiente(['/dev/certificados', 'Certificados']);
                break;
            case '/dev/certificados':
                setPathAnterior(['/dev/portafolio', 'Portafolio']);
                setPathSiguiente(['/dev', 'Perfil']);
                break;
            default:
                break;
        }
    }, [pathname]);

    return (
        <div className="SelectorDePaginaDevStyle" >
            <Link href={pathAnterior[0]}>
                <ArrowButton1 turned={true} title={pathAnterior[1]} />
            </Link>
            <Link href={pathSiguiente[0]}>
                <ArrowButton1 turned={false} title={pathSiguiente[1]} />
            </Link>
        </div>
    )
}