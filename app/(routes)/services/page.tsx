
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
          
            
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios especializados en diseño web frontend, enfocados en la creación de sitios web y aplicaciones visualmente impactantes y altamente funcionales. Con un dominio experto de las últimas tecnologías como HTML, CSS y JavaScript, me dedico a diseñar interfaces de usuario intuitivas y responsivas que no solo reflejan fielmente la identidad de marca de mis clientes, sino que también elevan su presencia en línea. Mi objetivo es combinar estética y funcionalidad para proporcionar experiencias digitales excepcionales que capten y mantengan la atención de los usuarios..</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contactame</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;