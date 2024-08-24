import { FotoBanner } from "@/Components/FotoBanner/FotoBanner";
import { MenuNavegationHeader } from "@/Components/MenuNavegationHeader/MenuNavegationHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <MenuNavegationHeader options={[
            {
                title: 'Perfil',
                url:'/dev'
            },
            {
                title: 'Currículum',
                url:'/dev/curriculum'
            },
            {
                title: 'Portafolio',
                url:'/dev/portafolio'
            },
            {
                title: 'Certificados',
                url:'/dev/certificados'
            },
        ]}/>
            <FotoBanner imageName="1" title="Front End Dev"/>
            {children}
        </>
    )
}