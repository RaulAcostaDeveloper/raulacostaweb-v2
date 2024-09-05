import { ContenidoDesplegable } from "@/Components/ContenidoDesplegable/ContenidoDesplegable"
import Image from "next/image"

export const CertificadosPage = () => {
    return (
        <div className="certificadosPageStyle">
            <h2>Certificados</h2>
            <p id="certificados">Descubre algunos de cursos tomados a lo largo de mi desarrollo personal y profesional.</p>
            <div className="certificadosYCursos">
                <div className="container">
                    <ContenidoDesplegable title="Certificados oficiales">
                        <div className="imagenes">
                            <a href="/images/certificados/profesional/11.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/7.jpg"} alt="Título de Ingeniero en Sistemas Computacionales Frontal" width={100} height={120} className="vertical" />
                                <h5>Título de Ingeniero en Sistemas Computacionales</h5>
                            </a>
                            <a href="/images/certificados/profesional/11.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/1.jpg"} alt="Cédula profesional" width={100} height={120} className="vertical" />
                                <h5>Cédula profesional</h5>
                            </a>
                            <a href="/images/certificados/profesional/11.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/11.jpg"} alt="Juramento de ética profesional" width={100} height={120} className="vertical" />
                                <h5>Juramento de ética profesional</h5>
                            </a>
                            <a href="/images/certificados/profesional/11.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/10.jpg"} alt="Diploma cartilla militar" width={120} height={80} className="horizontal" />
                                <h5>Diploma cartilla militar</h5>
                            </a>
                        </div>
                    </ContenidoDesplegable>
                </div>
                <div className="container">
                    <ContenidoDesplegable title="Programación Front End">
                        <div className="imagenes">
                            <a href="/images/certificados/frontend/5.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/5.jpg"} alt="Ingeniería de software" width={120} height={80} />
                                <h5>Ingeniería de software</h5>
                            </a>
                            <a href="/images/certificados/frontend/1.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/1.jpg"} alt="JavaScript" width={120} height={80} />
                                <h5>JavaScript</h5>
                            </a>
                            <a href="/images/certificados/frontend/8.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/8.jpg"} alt="JavaScript" width={120} height={80} />
                                <h5>JavaScript +</h5>
                            </a>
                            <a href="/images/certificados/frontend/3.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/3.jpg"} alt="Diseño web" width={120} height={80} />
                                <h5>Diseño web</h5>
                            </a>
                            <a href="/images/certificados/frontend/7.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/7.jpg"} alt="Responsive web design" width={120} height={80} />
                                <h5>Responsive web design</h5>
                            </a>
                            <a href="/images/certificados/frontend/2.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/2.jpg"} alt="Bootstrap" width={120} height={80} />
                                <h5>Bootstrap</h5>
                            </a>
                            <a href="/images/certificados/frontend/4.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/4.jpg"} alt="Prompt Engineering" width={120} height={80} />
                                <h5>Prompt Engineering</h5>
                            </a>
                            <a href="/images/certificados/frontend/6.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/6.jpg"} alt="Git y Github" width={120} height={80} />
                                <h5>Git y Github</h5>
                            </a>
                            <a href="/images/certificados/frontend/9.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/9.jpg"} alt="Sass css" width={120} height={80} />
                                <h5>Sass (css)</h5>
                            </a>
                            <a href="/images/certificados/frontend/10.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/10.jpg"} alt="React.js" width={120} height={80} />
                                <h5>React.js</h5>
                            </a>
                            <a href="/images/certificados/frontend/11.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/11.jpg"} alt="React.js" width={120} height={80} />
                                <h5>React.js + redux + next.js</h5>
                            </a>
                            <a href="/images/certificados/frontend/12.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/12.jpg"} alt="TypeScript" width={120} height={80} />
                                <h5>TypeScript</h5>
                            </a>
                            <a href="/images/certificados/frontend/13.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/13.jpg"} alt="TypeScript" width={120} height={80} />
                                <h5>TypeScript +</h5>
                            </a>
                            <a href="/images/certificados/frontend/14.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/14.jpg"} alt="TypeScript" width={120} height={80} />
                                <h5>TypeScript  ++</h5>
                            </a>
                            <a href="/images/certificados/frontend/15.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/15.jpg"} alt="React Native" width={120} height={80} />
                                <h5>React Native</h5>
                            </a>
                            <a href="/images/certificados/frontend/16.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/frontend/16.jpg"} alt="Cells (Web components)" width={120} height={80} />
                                <h5>Cells (Web components)</h5>
                            </a>
                        </div>
                    </ContenidoDesplegable>
                </div>
                <div className="container">
                    <ContenidoDesplegable title="Habilidades Blandas">
                        <div className="imagenes">
                            <a href="/images/certificados/profesional/3.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/3.jpg"} alt="Diploma scrum" width={120} height={80} />
                                <h5>Scrum</h5>
                            </a>
                            <a href="/images/certificados/profesional/4.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/4.jpg"} alt="Diploma framework Agile" width={120} height={80} />
                                <h5>Agile</h5>
                            </a>
                            <a href="/images/certificados/profesional/2.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/2.jpg"} alt="Diploma desarrollo segur" width={120} height={80} />
                                <h5>Desarrollo seguro</h5>
                            </a>
                            <a href="/images/certificados/profesional/5.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/5.jpg"} alt="Diploma seguridad de la información de Aeroméxico" width={120} height={80} />
                                <h5>Seguridad de la información de Aeroméxico</h5>
                            </a>
                            <a href="/images/certificados/profesional/6.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/6.jpg"} alt="Diploma concientización de seguridad" width={120} height={80} />
                                <h5>Concientización de seguridad</h5>
                            </a>
                            <a href="/images/certificados/blandas/1.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/blandas/1.jpg"} alt="Liderazgo" width={120} height={80} />
                                <h5>Liderazgo</h5>
                            </a>
                            <a href="/images/certificados/blandas/2.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/blandas/2.jpg"} alt="Inteligencia emocional" width={120} height={80} />
                                <h5>Inteligencia emocional</h5>
                            </a>
                            <a href="/images/certificados/blandas/3.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/blandas/3.jpg"} alt="Ética" width={120} height={80} />
                                <h5>Ética</h5>
                            </a>
                            <a href="/images/certificados/blandas/4.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/blandas/4.jpg"} alt="Marca personal" width={120} height={80} />
                                <h5>Marca personal</h5>
                            </a>
                            <a href="/images/certificados/blandas/5.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/blandas/5.jpg"} alt="Aprender en línea" width={120} height={80} />
                                <h5>Aprender en línea</h5>
                            </a>
                        </div>
                    </ContenidoDesplegable>
                </div>
                <div className="container">
                    <ContenidoDesplegable title="Idiomas">
                        <div className="imagenes">
                            <a href="/images/certificados/idioma/1.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/idioma/1.jpg"} alt="Ingles en la universidad" width={100} height={120} className="vertical" />
                                <h5>Ingles de la universidad</h5>
                            </a>
                            <a href="/images/certificados/idioma/2.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/idioma/2.jpg"} alt="Ingles B1-B2" width={120} height={80} />
                                <h5>Ingles B1-B2</h5>
                            </a>
                        </div>
                    </ContenidoDesplegable>
                </div>
                <div className="container">
                    <ContenidoDesplegable title="Reconocimientos">
                        <div className="imagenes">
                            <a href="/images/certificados/profesional/12.jpg" target="_blank" className="certificado">
                                <Image src={"/images/certificados/profesional/12.jpg"} alt="Reconocimiento de promotor voluntario en prevención de adicciones" width={100} height={120} className="horizontal" />
                                <h5>Reconocimiento de promotor voluntario en prevención de adicciones</h5>
                            </a>
                        </div>
                    </ContenidoDesplegable>
                </div>
            </div>
        </div>
    )
}