import Link from "next/link"
import { Card1 } from "../Cards/Card1/Card1"
import { ContenidoDesplegable } from "../ContenidoDesplegable/ContenidoDesplegable"

export const GlobalInvitacionAOtrasSecciones = () => {
    return (
        <ContenidoDesplegable title="Secciones de la página">
            <div>
                <p>Visita las diferentes secciones de la página</p>
            </div>
            <div className="GlobalInvitacionAOtrasSeccionesStyle">
                <Link href={'/dev'}>
                    <Card1 title="Perfil de desarrollador web" subTitle="Portafolio y currículum del perfil de Ingeniero de Software" />
                </Link>
                <Link href={'/servicios'}>
                    <Card1 title="Servicios de desarrollo de software" subTitle="Servicios de desarrollo web Front End" />
                </Link>
                <Link href={'/music'}>
                    <Card1 title="Mi música" subTitle="Canciones producidas por mí" />
                </Link>
                <Link href={'/write'}>
                    <Card1 title="Escritos" subTitle="Poemas, versos y escritos" />
                </Link>
            </div>
        </ContenidoDesplegable>
    )
}