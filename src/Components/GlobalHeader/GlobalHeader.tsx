'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const GlobalHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    let rutaActual = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '';

    const isSelected = (path: string) => {
        if (path === rutaActual) {
            return 'selected';
        }
        return '';
    }

    useEffect(() => {
        const menu = document.getElementById('innerMenu');
        if (isOpenMenu && menu) {
            // Animación entrada
            menu.animate([
                { width: `0px`, opacity: '0' },
                { width: '300px', opacity: '1' },
            ], {
                duration: 300,
            });
        }
    }, [isOpenMenu]);

    return (
        <div className="globalHeaderStyle">
            <div className="banner">
                <div className="bannerTop">
                    <button className="buttonMenu" onClick={() => setIsOpenMenu(true)} title="Click to open/close">
                        <Image src={'/icons/menu.png'} alt="menu icono" width={50} height={50} />
                    </button>
                </div>
            </div>
            {isOpenMenu &&
                <div className="menuDesplegable" onClick={() => setIsOpenMenu(false)}>
                    <div className="innerMenu" id="innerMenu">
                        <div className="header">
                            <div className="img">
                                <Image src={'/images/fotos/5.jpg'} alt="raul acosta computadora" width={50} height={50} />
                            </div>
                            <div className="text">
                                <h3>raulacostaweb</h3>
                                <p>raulacostadeveloper@outlook.com</p>
                            </div>
                        </div>
                        <div className={`elementoMenu ${isSelected('')}`}>
                            <Link href={'/'}>Inicio</Link>
                        </div>
                        <div className={`elementoMenu ${isSelected('dev')}`}>
                            <Link href={'/dev'}>Portafolio de desarrollo web</Link>
                        </div>
                        <div className={`elementoMenu ${isSelected('servicios')}`}>
                            <Link href={'/servicios'}>Servicios de desarrollo de software</Link>
                        </div>
                        <div className={`elementoMenu ${isSelected('music')}`}>
                            <Link href={'/music'}>Música</Link>
                        </div>
                        <div className={`elementoMenu ${isSelected('write')}`}>
                            <Link href={'/write'}>Escritos</Link>
                        </div>
                        <div className="buttonClose">
                            <button> Close </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}