import { ContenidoDesplegable } from "@/Components/ContenidoDesplegable/ContenidoDesplegable";
import { VideoContainer } from "@/Components/VideoContainer/VideoContainer";
import Link from "next/link";

export const MusicaPage = () => {
    return (
        <div>
            <ContenidoDesplegable title="12 Meses">
                <VideoContainer src="https://www.youtube.com/embed/iPpfxjIn1W4">
                    <ContenidoDesplegable title="Información">
                        <p><b>12 Meses</b> salió el 19 de marzo de 2024 y es una odisea instrumental que te lleva a través de un viaje épico representada por las cuatro estaciones del año.</p>
                        <p>Transita desde lo melódico a lo poderosamente heavy, reflejando el ciclo de la naturaleza y el inquebrantable espíritu humano de adaptación y renovación.</p>
                        <p><b>Agradecimentos y créditos:</b></p>
                        <p>Alham Arellanos Imm  (Vinyl-Records) @elalham por su talento en la producción, mezcla y en la grabación del bajo.</p>
                        <p>Ariel Terrones @ariel_art_studio por la producción audiovisual del video y efectos especiales.</p>
                        <p>Jorge Lopez Zarco @zarcmex por su excepcional fotografía.</p>
                        <p>Pablo Michel @pablo_michell y Aldo Saraiba @aldosaraiba por su talento en la batería.</p>
                        <p>Amir Arrieta por su aporte en el bajo.</p>
                        <p>Agradecimientos especiales a Erick Sasha por su apoyo durante la producción.</p>
                        <p>Puedes verla en <Link href={'https://www.youtube.com/watch?v=iPpfxjIn1W4&t=134s'} target="_blank" >Youtube</Link> y escucharla en <Link href={'/music'}>Spotify</Link></p>
                    </ContenidoDesplegable>
                </VideoContainer>
            </ContenidoDesplegable>
        </div>
    )
}