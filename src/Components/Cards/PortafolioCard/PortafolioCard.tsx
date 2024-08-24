import Image from "next/image"
import { PortafolioCardProps } from "./PortafolioCard.model"
export const PortafolioCard = ({ srcImage, altImage, title, desctiption, empresa, srcDeploy, srcCodigo }: PortafolioCardProps) => {
    return (
        <div className="portafolioCardStyle">
        <div className="imagen">
            <Image src={ srcImage } alt={ altImage } width={320} height={320}/>
        </div>
        <div className="texto">
            <h3>{ title }</h3>
            <p>{ desctiption }</p>
            { empresa ? <p>Empresa: { empresa }</p> : null}
        </div>
        <div className="texto">
            { srcDeploy ? <p>Sitio web: <a href={ srcDeploy } target="_blank">Vercel</a></p> : null}
            { srcCodigo ? <p>Código: <a href={ srcCodigo } target="_blank">Github</a></p> : null}
        </div>
    </div>
    )
}