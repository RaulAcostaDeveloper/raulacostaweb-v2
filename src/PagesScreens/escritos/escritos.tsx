import { ContenidoDesplegable } from "@/Components/ContenidoDesplegable/ContenidoDesplegable"
import { FotoBanner } from "@/Components/FotoBanner/FotoBanner"

export const EscritosPage = () => {
    return (
        <div>
            <FotoBanner imageName="3" title="Escritos" />
            <section>
                <h2>Mis escritos</h2>
                <p>Bienvenido a la página de mis escritos</p>
                <p>En esta página subo algunos poemas, pero sobre todo versos cortos para memorar mis reflexiones más profundas</p>
                <p>Recuerda que al dar click en los títulos puedes deplegar el contenido oculto.</p>
                <ContenidoDesplegable title="Poemas" colapse={false}>
                    <ContenidoDesplegable title="Camino y destino">
                        <i><p>Hoy perdí dos esperanzas,</p>
                        <p>pero gané una independencia.</p>
                        <p>Ya no tengo miedo al abismo,</p>
                        <p>porque siempre estuve perdido.</p>
                        <p>Hoy recordé que no hay camino,</p>
                        <p>ni destino al cuál llegar.</p>
                        <p>Más bien estaba perdido</p>
                        <p>buscando camino y destino.</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="En el camino correcto" colapse={false}>
                        <i><p>A quien mucho tiene, más se le dará,</p>
                        <p>y a quien poco tiene, hasta eso se le quitará.</p>
                        <p>Así está escrito, y yo lo sé, porque lo vivo en carne propia.</p>
                        <p>¿Qué hago si siento una urgencia por amor tan intensa?</p>
                        <p>¿No he estado toda mi vida urgido por amor, sin ver asomo de recompensa?</p>
                        <p>No he conocido un solo amor sincero. ¿Cómo puedo tener más, y sentirme abundante de lo que más carezco?</p>
                        <p>¿Cómo puedo convencerme a mí mismo de que abunda aquello de lo que más anhelo?</p>
                        <p>¿Qué es el amor? ¿Qué es el cariño? ¿Qué es un abrazo?</p>
                        <p>¿Qué es el consuelo, el contacto, el vacío del alma?</p>
                        <p>Si cambio mi curva, cambiará mi tendencia,</p>
                        <p>mi amor llegará, después del engaño del alma.</p>
                        <p>¿Cómo puedo cambiar mi miedo de ser olvidado,</p>
                        <p>y sólo tenerme a mí mismo?</p>
                        <p>Como en el principio yo soy, y seré así en el final.</p>
                        <p>¿No es eso cruel?</p>
                        <p>¿No son los hombres sujetos a querer amar y ser amados?</p>
                        <p>Siempre vi a mi amor irse con otros,</p>
                        <p>y nunca me vi amado, sólo por mí mismo,</p>
                        <p>cuando me di cuenta que yo soy el que yo soy.</p>
                        <p>No había visto solución ni consuelo a esa ausencia,</p>
                        <p>¿Cómo voy ahora a darle la vuelta,</p>
                        <p>sabiendo que entre más me sienta de una forma, más tendré de eso?</p>
                        <p>Para que sepas verdad, que nosotros tenemos control de nosotros mismos.</p>
                        <p>Sólo Dios puede desromperme,</p>
                        <p>sólo Él puede devolverme la cordura,</p>
                        <p>e inclinar mi balance a lo bueno, a la paz y la tranquilidad.</p>
                        <p>Sólo Él puede recuperar mi corazón de las tinieblas,</p>
                        <p>y ponerlo de regreso a la luz.</p>
                        <p>Guíame a la abundancia de amor,</p>
                        <p>a la esperanza y a la paciencia que es necesaria para que alguien pueda amarte de regreso.</p>
                        <p>¿Crees que tu causa es justa, cuando envidias el amor de otros,</p>
                        <p>la salud de otros, las riquezas de otros?</p>
                        <p>Si lo es, por eso entre más envidias, más careces de aquello.</p>
                        <p>Conoce la verdad: hay cosas por las que no se puede pelear,</p>
                        <p>pero sí puedes rogarle a Dios para que te ponga en el camino correcto.</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Corazon" colapse={false}>
                        <i><p>Yo soy el cuerpo presente, recuerdo tangible.</p>
                        <p>Quiero ser bueno, sé bueno conmigo,</p>
                        <p>ten piedad de mí.</p>
                        <p>No hallo tesoro en mi templo,</p>
                        <p>sólo esperanza.</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Eres y soy" colapse={false}>
                        <i><p>Eres, como la luna, lejana y brillante. </p>
                        <p>Y como la noche, fría y oscura.</p>
                        <p>Tus cabellos son de nubes y espumas,</p>
                        <p>y tus ojos luceros.</p>
                        <p>Tenía fe en su brillo de estrellas,</p>
                        <p>que caía reflejo en marea.</p>
                        <br />
                        <p>Soy, como el sol, Yo soy.</p>
                        <p>De mi es la luz y el calor.</p>
                        <p>Soy el que observa, desde aquí es tu reflejo.</p>
                        <p>Por eso es el amor que en tí veo,</p>
                        <p>no más que una ilusión, de lo que eres y soy.</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Una flor de mi jardín" colapse={false}>
                        <i><p>Por tí sembré una flor y ya murió</p>
                        <p>Pero de su semilla nueva vida</p>
                        <p>Más otra etapa, nuevo ciclo</p>
                        <p>Y por fin mi jardín floreció</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Ser de mi ser" colapse={false}>
                        <i><p>Ser de mi ser</p>
                        <p>De tu luz es mi luz</p>
                        <p>Haz de tí lo bueno</p>
                        <p>Ten de mí el saber</p>
                        <p>De lo implicito en tu ser y de lo explicito en el mundo</p>
                        <p>Y de tí un nuevo ser, en su tiempo y forma</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="En vano y no en vano" colapse={false}>
                        <i><p>Si escuchas mis palabras, soy el amor</p>
                        <p>Que desde el ceno me hizo falta</p>
                        <p>Pero cayó en tu mano mi esperanza en vano</p>
                        <p>Y hasta hoy no he hayado llanto ni remedio</p>
                        <p>Sea yo amado o no amado</p>
                        <p>Crearé en mí una nueva esperanza</p>
                        <p>Pero bendito sea tu ser</p>
                        <p>Para que no leas de mí en vano</p></i>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Sin nombre" colapse={false}>
                        <i><p>En un momento</p>
                        <p>Dejaste tu estela en mí</p>
                        <p>No hubo valor ni forma para pedir ayuda</p>
                        <p>Un consuelo, un aliento, un contacto</p>
                        <p>Caí en un abismo de soledad</p>
                        <p>Donde no hay calor, ni voz para hablar</p>
                        <p>Volteo mi mirada, no puedo luchar con eso</p>
                        <p>Solo puedo guardar silencio</p></i>
                    </ContenidoDesplegable>
                </ContenidoDesplegable>
            </section>
            <section>
                <ContenidoDesplegable title="Oraciones" colapse={false}>
                    <ContenidoDesplegable title="No clasificadas \°/">
                        <p>Hacer, Ser, Saber y Orar</p>
                        <p>Hacer el Bien</p>
                        <p>Ser Bueno</p>
                        <p>Saber cosas Buenas</p>
                        <p>Orar Bonndadosamente</p>
                        <p>Hacer el Amor</p>
                        <p>Ser Amoroso</p>
                        <p>Saber Amar</p>
                        <p>Orar Amablemente</p>
                        <p>Todo podemos pero no todo es bueno</p>
                        <p>Debemos ir así \°/ y algunos van así /°\</p>
                        <p>No tengas miedo de la verdad si se te presenta</p>
                        <p>Si, conozco tu ser, padre origen. Contienes todo, creas de tí lo nuevo, eres mi plano en todas partes. Ponme en camino de lo bueno en mí, y fortalece mis lazos contigo, lazos del bien.</p>
                        <p>Dale tranquilidad a mi corazón. Pon mi ser en suave y rica estancia. Dame dulce y plena compañía buena, que me de complacencia y me haga saber verdad que por mí no sepa.</p>
                        <p>Alivia mi culpa, hazme pagar con buenas acciones, perdoname si he hecho mal, hazme hacer el bien a cambio, hazme ser el bien del mundo, aliviana mi sentir, hazme sentir gozo y alegría, y sobre todo, hazme ser merecedor, si no lo fuera ya.</p>
                        <p>Cambia mis sentir a algo bueno. He cargado con ese sentir maligno largo tiempo, y ya se está llendo.</p>
                        <p>Renuncio al mal en todas sus formas, en toda su escencia.</p>
                        <p>Recibo el bien de tí, en todas sus formas, en todas sus escencias, en toda su presencia.</p>
                        <p>Hazme limpio, hazme bueno, dame palabras correctas, haz tu justicia en mí, atrae a mí toda muestra de afecto, recibe de mí lo justo y lo bueno.</p>
                        <p>Engrandece mi bien, mi poder, dame paz perpetua, libra de mí todo deseo vano e impuro, hazme puro y bueno, complace de mí todo lo justo y buen deseo justificado.</p>
                        <p>Ten cuidado con los deseos que fácilmente se transforman en sufrimiento. Mejor actúa.</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Mi ser">
                        <p>Mi ser no se junta con seres malos e injustos incluídos humanos o animales</p>
                        <p>Mi ser está en lo bueno de Dios</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Yo soy">
                        <p>Yo soy poderoso reformador y transformador al bien</p>
                        <p>Yo soy bueno y justo merecedor de todo lo bueno y satisfactorio</p>
                        <p>Yo soy sabio conocedor de la verdad</p>
                        <p>Yo soy merecedor de buena compañía, de justa complacencia y satisfacción</p>
                        <p></p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Reflexiona">
                        <p>No me pongas a prueba, porque yo no soy como Dios inquebrantable</p>
                        <p>No me pongas en situaciones que quebranten mi espíritu</p>
                        <p>Piensa ¿Quién si no tú conoce tu propio ser?</p>
                        <p>Si ya lo sabes, ¿Para qué me pones a prueba?</p>
                        <p>Yo que no debo permitir el sufrimiento ¿Debería permitir el sufrimiento en mí? No.</p>
                        <p>Mejor, hazme ser lo que tu quieras que sea</p>
                        <p>Mejor, enseñame sin dolor.</p>
                        <p>Si ya sabes que deseo bendición y amor, recibelo de mí, y si hay de sobra, dame de vuelta.</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="No permitas">
                        <p>No permitas detonantes de odio, ni ira, ni cosas que me hagan cometer errores</p>
                        <p>No permitas detonantes del mal, porque soy como propenso a equivocarme</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Hazme">
                        <p>Hazme actuar correctamente</p>
                        <p>Hazme ser limpio</p>
                        <p>Hazme ser de sagrado corazon</p>
                        <p>Hazme actuar a favor del bien</p>
                        <p>Hazme ser bendito</p>
                        <p>Hazme ser merecedor de amor</p>
                        <p>Hazme hacer el bien</p>
                        <p>Hazme tener las palabras correctas</p>
                        <p></p>
                        <p>Hazme mejor pensar en cosas buenas, en agradecimientos</p>
                        <p>Hazme ser bueno para tí</p>
                        <p>Hazme satisfecho</p>
                        <p>Hazme sabio</p>
                        <p>Hazme actuar bien</p>
                        <p>Hazme actuar inteligentemente</p>
                        <p>Hazme ser, que mis acciones me lleven al bien, a la calma, a la paz, y al amor</p>
                        <p>Hazme ser amado</p>
                        <p>Hazme actuar amablemente</p>
                        <p>Hazme ser bueno</p>
                        <p>Hazme ser de juicio justo</p>
                        <p>Hazme saber verdad</p>
                        <p>Hazme ver verdad donde otros no puedan ver</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Guíame y llevame">
                        <p>Guíame por un camino de paz, de sanación, de calma, de placidez, de conocer, de saber y actuar bien.</p>
                        <p>Llevame a la serenidad correctamente</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Sean">
                        <p>Sean mis acciones y pensamientos correctos</p>
                        <p>Sean mis acciones de buen juicio</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Llevame">
                        <p>Llevame al bien, a la calma, al saber, al éxito y a la satisfacción</p>
                    </ContenidoDesplegable>
                    <ContenidoDesplegable title="Mal">
                        <p>Mal presente eres transformado al bien</p>
                        <p>Mal presente eres re formado al bien</p>
                        <p>Pierde tu forma del mal, y crea nueva forma en el bien.</p>
                    </ContenidoDesplegable>

                </ContenidoDesplegable>

            </section>
        </div>
    )
}