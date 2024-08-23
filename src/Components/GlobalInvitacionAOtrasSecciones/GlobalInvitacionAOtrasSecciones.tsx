import Link from "next/link"
import { Card1 } from "../Cards/Card1/Card1"
import { ContenidoDesplegable } from "../ContenidoDesplegable/ContenidoDesplegable"

export const GlobalInvitacionAOtrasSecciones = () => {
    return (
        <ContenidoDesplegable title="Otras secciones">
            <div>
                <p>Te invito a ir a alguna de las secciones disponibles en este sitio web</p>
            </div>
            <div className="GlobalInvitacionAOtrasSeccionesStyle">
                <Link href={'/dev'}>
                    <Card1 title="Portafolio de desarrollo web" subTitle="Portafolio y cv del perfil de Ingeniero de Software" />
                </Link>
                <Link href={'/servicios'}>
                    <Card1 title="Servicios de desarrollo de software" subTitle="Servicios de desarrollo web Front End" />
                </Link>
                <Link href={'/music'}>
                    <Card1 title="Música" subTitle="Canciones producidas" />
                </Link>
                <Link href={'/write'}>
                    <Card1 title="Escritos" subTitle="Versos, poemas, escritos" />
                </Link>
            </div>
        </ContenidoDesplegable>
    )
}