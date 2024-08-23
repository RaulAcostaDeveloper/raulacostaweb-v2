import Image from "next/image";
import { FotoBannerProps } from "./FotoBanner.model";

export const FotoBanner = ({ imageName, title }: FotoBannerProps) => {
    return (
        <div className="fotoBannerStyle">
            <div className="imagenContainer">
                <Image src={`/images/fotos/${imageName}.jpg`} alt="raul acosta computadora" width={300} height={300} />
                <h3>{title}</h3>
            </div>
        </div>
    )
}