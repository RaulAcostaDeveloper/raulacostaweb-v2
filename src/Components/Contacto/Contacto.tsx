'use client'
import Image from "next/image";
import { ContenidoDesplegable } from "../ContenidoDesplegable/ContenidoDesplegable";
let pop = typeof window !== 'undefined' ? new Audio('/sounds/pop.mp3') : undefined;

export const Contacto = () => {
    const reproducirPop = () => {
        // @ts-ignore
        // Puede ser undefined
        pop.play();
    }
    const copiarContenido = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            reproducirPop();
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }
    return (
        <div className="contactoStyle">
            <h3>Contacto</h3>
            <p id="contacto">¿Necesitas algo? Mandame un correo electrónico</p>
            <div className="copiarCorreoElectronico">
                <p>raulacostadeveloper@outlook.com</p>
                <button onClick={() => copiarContenido('raulacostadeveloper@outlook.com')} title="Copiar Email"><Image src={'/icons/copy.png'} alt="Copy" width={64} height={64} /></button>
            </div>
            <p>Visita mi LinkedIn y mándame un mensaje</p>
            <div className="copiarCorreoElectronico">
                <p>in/raulacostadev/</p>
                <button onClick={() => copiarContenido('https://www.linkedin.com/in/raulacostadev/')} title="Copiar LinkedIn"><Image src={'/icons/copy.png'} alt="copy" width={64} height={64} /></button>
            </div>
        </div>
    )
}