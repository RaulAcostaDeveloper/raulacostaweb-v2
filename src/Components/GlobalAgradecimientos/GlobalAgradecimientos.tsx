import Link from "next/link"
import { ContenidoDesplegable } from "../ContenidoDesplegable/ContenidoDesplegable"

export const GlobalAgradecimientos = () => {
    return (
        <ContenidoDesplegable title="Agradecimiento">
            <p>Gracias por visitar mi sitio web</p>
            <p>Si tienes algún comentario, no dudes en escribirme a mi correo de contacto  raulacostadeveloper@outlook.com</p>
            <p>Comparte este sitio web, ¡eso sería muy bueno!</p>
            <p>También puedes donarme si te gusta mi poesía, mis escritos o mi contenido, para poder seguir trabajando en mejorar y compartir más valor.</p>
            <p>Visita mi cuenta de <Link href="https://patreon.com/raulacostadev?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link" target="_blank">Patreon</Link> o mi <Link href="https://www.paypal.com/donate/?hosted_button_id=DBQQ3QRD8P6BS" target="_blank">Paypal</Link></p>
            <p>Busco alguna manera de recaudar fondos. Si puedes patrocinarme, eso me ayudaría enormemente.</p>
            <p>¡Saludos cordiales!</p>
      </ContenidoDesplegable>
    )
}