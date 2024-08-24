import Link from "next/link"
import { MenuNavegationHeaderProps } from "./MenuNavegationHeader.module"

export const MenuNavegationHeader = ({ options }: MenuNavegationHeaderProps) => {
    return (
        <div className="menuNavegacionHeaderStyle">
            { options.map((el, index)=>(
                <Link key={index} href={el.url}>{el.title}</Link>
            ))}
        </div>
    )
}