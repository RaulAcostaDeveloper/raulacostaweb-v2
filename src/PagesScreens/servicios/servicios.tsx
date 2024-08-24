import { Contacto } from "@/Components/Contacto/Contacto"
import { ContenidoDesplegable } from "@/Components/ContenidoDesplegable/ContenidoDesplegable"
import { FotoBanner } from "@/Components/FotoBanner/FotoBanner"
import Image from "next/image"
import Link from "next/link"

export const ServiciosPage = () => {
    return (
        <main className="serviciosPageStyle">
            <FotoBanner imageName="5" title="Servicios de desarrollo web" />
            <ContenidoDesplegable title="Página web informativa">
                <p>Contenido personalizado</p>
                <p>Redes sociales</p>
                <p>Imágenes</p>
                <p>Links a otras secciones</p>
                <p>
                    Elementos desplegables, menús de navegación, presentación de
                    productos, etc.
                </p>
                <p>
                    Tecnologías involucradas: HTML, CSS, JavaScript, React.js, Next.js.
                </p>
                <div className="presentacionGigFiver">
                    <Link
                        href={
                            "https://www.fiverr.com/raulacostaweb/develop-a-responsive-landing-page-for-your-business"
                        }
                        target="_blank"
                        className="gitFiverLink"
                    >
                        <Image
                            src={"/images/servicios/1.jpg"}
                            width={200}
                            height={200}
                            alt="fiver services"
                        />
                        <div className="info">
                            <div>
                                <h4>I will develop a responsive landing page</h4>
                                <p>Click para solicitar en fiverr (opcional)</p>
                                <p>
                                    <b>Desde 20 dolares</b>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <Contacto />
            </ContenidoDesplegable>
            <ContenidoDesplegable title="Aplicación web">
                <p>Funcionalidades personalizadas</p>
                <p>Diseños personalizados</p>
                <p>Integración de servicios API</p>
                <p>
                    Elementos desplegables, menús de navegación, presentación de
                    servicios, formularios, etc.
                </p>
                <p>
                    Tecnologías involucradas: React.js, Next.js, JavaScript, TypeScript,
                    CSS/Sass/Tailwind css, Redux, pruebas unitarias, etc.
                </p>
                <div className="presentacionGigFiver">
                    <Link
                        href={"https://www.fiverr.com/raulacostaweb/create-your-web-page"}
                        target="_blank"
                        className="gitFiverLink"
                    >
                        <Image
                            src={"/images/servicios/2.jpg"}
                            width={200}
                            height={200}
                            alt="fiver services"
                        />
                        <div className="info">
                            <div>
                                <h4>I will develop your web application</h4>
                                <p>Click para solicitar en fiverr (opcional)</p>
                                <p>
                                    <b>Desde 50 dolares</b>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <Contacto />
            </ContenidoDesplegable>
            <ContenidoDesplegable title="Componentes web">
                <p>Desarrollo de una funcionalidad web aislada</p>
                <p>Integraciones con servicios API</p>
                <p>Fácil de integrar a tu aplicación web</p>
                <p>
                    Tecnologías involucradas: React.js, Next.js, JavaScript, TypeScript,
                    CSS/Sass/Tailwind css, Redux, pruebas unitarias, etc.
                </p>
                <div className="presentacionGigFiver">
                    <Link
                        href={
                            "https://www.fiverr.com/raulacostaweb/create-custom-react-components-for-your-web-application"
                        }
                        target="_blank"
                        className="gitFiverLink"
                    >
                        <Image
                            src={"/images/servicios/3.jpg"}
                            width={200}
                            height={200}
                            alt="fiver services"
                        />
                        <div className="info">
                            <div>
                                <h4>
                                    I will code custom react components for your web application
                                </h4>
                                <p>Click para solicitar en fiverr (opcional)</p>
                                <p>
                                    <b>Desde 15 dolares</b>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <Contacto />
            </ContenidoDesplegable>
            <ContenidoDesplegable title="Necesidades personalizadas">
                <p>Agendemos una llamada para hablar de tus necesidades específicas.</p>
                <Contacto />
            </ContenidoDesplegable>
        </main>
    )
}