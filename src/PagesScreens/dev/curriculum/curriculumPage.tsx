import Image from "next/image"

export const CvPage = () => {
    return (
        <div className="curriculumPageStyle">
            <h2>Currículum (resume)</h2>
            <p id="curriculum">Hecha un vistazo a mi currículum profesional para saber más detalle.</p>
            <div className="contenedorCurriculums">
                <a href="/images/cvs/1.jpg" target="_blank" className="curriculum" title="Ver mi CV">
                    <Image src={'/images/cvs/1.jpg'} alt="cv en inglés" width={150} height={200} />
                    <h3>Resume in english (ATS)</h3>
                </a>
                <a href="/images/cvs/2.jpg" target="_blank" className="curriculum" title="Ver mi CV">
                    <Image src={'/images/cvs/2.jpg'} alt="cv en inglés" width={150} height={200} />
                    <h3>Resume in english</h3>
                </a>
            </div>
        </div>
    )
}