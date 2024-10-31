import { PortafolioCard } from "@/Components/Cards/PortafolioCard/PortafolioCard"
import Link from "next/link"

export default function Page() {
    return (
        <main className="portafolioPageStyle">
            <h2>Portafolio freelance</h2>
            <p id="proyectos">
                Encuentra algunos de mis proyectos <b>Freelance</b>, como landin
                pages, componentes especializados, aplicaciones MVP y desarrollo de tecnologías de software.
            </p>
            <p>
                Visita mi{" "}
                <Link href={"https://github.com/RaulAcostaDeveloper"} target="_blank">
                    GitHub
                </Link>{" "}
                para ver el código de los repositorios públicos, incluyendo este
                portafolio hecho en next.js
            </p>
            <div className="contenedorPortafolioCards">
                <PortafolioCard
                    srcDeploy="https://control-de-alimentos-del-comedor.vercel.app/"
                    srcImage="/images/proyectos/exp/9.jpg"
                    altImage="Usa los controles para interactuar la interfaz"
                    title="Tecnología de navegación web"
                    desctiption={`Una muestra de la tecnología de navegación web con el teclado.`}
                />
                <PortafolioCard
                    srcDeploy="https://rotary-color-wheel.vercel.app/"
                    srcImage="/images/proyectos/apps/15.jpg"
                    altImage="Rueda de colores"
                    title="Rueda de colores"
                    desctiption={`Rota la rueda de colores.`}
                />
                <PortafolioCard
                    srcDeploy="https://react-use-query-infinite-scroll-test.vercel.app/"
                    srcImage="/images/proyectos/apps/14.jpg"
                    altImage="Elementos con scroll infinito"
                    title="Scroll infinito con react-query"
                    desctiption={`Muestra de scroll infinito usando react-query, typescript y tailwind css.`}
                />
                <PortafolioCard
                    srcImage="/images/proyectos/apps/11.jpg"
                    altImage="Crud de usuarios y paginación"
                    title="Crud de usuarios y paginación"
                    desctiption="CRUD de datos y paginación por usuario [id]"
                    srcDeploy="https://driscolls-prueba-tecnica-zeta.vercel.app/lang/users"
                />
                <PortafolioCard
                    srcDeploy="https://shoping-card-test.vercel.app/"
                    srcImage="/images/proyectos/apps/13.jpg"
                    altImage="Carrito de compras"
                    title="Carrito de compras"
                    desctiption={`Ejemplo de módulo de carrito de compras.`}
                />
                <PortafolioCard
                    srcImage="/images/proyectos/apps/1.jpg"
                    altImage="App control de gastos vanila"
                    title="Aplicación web vanila"
                    desctiption="Una aplicación web que guarda tus datos y hace calculos en base a tus listas. Hecha con html css y javascript vanila."
                    srcDeploy="https://raulacostadeveloper.github.io/MiControlDeGastos_PWA/"
                />
                <PortafolioCard
                    srcImage="/images/proyectos/apps/12.jpg"
                    altImage="Mapa de calor"
                    title="Mapa de calor"
                    desctiption="Una aplicación que lee un archivo .csv con datos de un 1536-well-microtier y los muestra en un mapa de calor en el cuál puedes hacer hover en un punto (well) y ver los datos a través de un tooltip dinámico."
                    srcDeploy="https://1536-well-microtiter-headmmap.vercel.app/"
                />
                <PortafolioCard
                    srcImage="/images/proyectos/apps/4.jpg"
                    altImage="App Control de gastos"
                    title="Aplicación de control de dinero"
                    desctiption="Una aplicación que comunica los datos a través de diferentes pantallas."
                    srcDeploy="https://control-quincenal2.vercel.app/"
                />
                <PortafolioCard
                    srcDeploy="https://raulacostadeveloper.github.io/HeaderTemplate1/"
                    srcImage="/images/proyectos/landingpages/4.jpg"
                    altImage="Elementos desplegables"
                    title="Elementos desplegables"
                    desctiption="Elementos clásicos como menús, barras, sub menús, notificaciones, que se despliegan de manera suave y responsiva."
                />
                <PortafolioCard
                    srcDeploy="https://landing-page-band.vercel.app/"
                    srcImage="/images/proyectos/landingpages/5.jpg"
                    altImage="Página para una agrupación musical"
                    title="Plantilla de landing page"
                    desctiption="Página web con estilo artistico."
                />
                <PortafolioCard
                    srcDeploy="https://landing-page-1-gray.vercel.app/"
                    srcImage="/images/proyectos/landingpages/7.jpg"
                    altImage="Plantilla de página web"
                    title="Plantilla de landing page"
                    desctiption="Plantilla para una página web con varias secciones y carruceles."
                />
                <PortafolioCard
                    srcDeploy="https://landing-page-2-two.vercel.app/"
                    srcImage="/images/proyectos/landingpages/8.jpg"
                    altImage="Plantilla de página web"
                    title="Plantilla de landing page"
                    desctiption="Plantilla de página web con elementos desplegables."
                />
            </div>
        </main>
    )
}