import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
          
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-4 md:px-8">
                <div className="max-w-[450px] mt-11 mx-4 ">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mt-8">
                        Mis <span className="font-bold text-secondary"> servicios.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrezco servicios especializados en diseño web frontend, enfocados en la creación de sitios web como también cualquier solución de diseño especialmente material publicitario para impulsar tu marca.
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-tertiary/65">
                        <strong> Contactame</strong>
                    </button>
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
