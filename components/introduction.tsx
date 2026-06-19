import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full ">
            <div className="z-20 grid items-start w-full p-6 pt-24 pb-6 md:items-center md:pt-4 md:pb-8 md:grid-cols-2">
                <Image src="/avatar.webp" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md ">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si tienes un proyecto, <br />
                        <TypeAnimation
                            sequence={[
                                'puedo programarlo',
                                1000,
                                'puedo optimizarlo',
                                1000,
                                'puedo diseñarlo',
                                1000,
                                'puedo hacerlo realidad',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Soy Leonel Delgado: diseñador gráfico y desarrollador Front-End especializado en crear interfaces digitales que fusionan creatividad y tecnología. Transformo ideas en experiencias visuales impactantes con código funcional y diseño estratégico. ¿Listo para innovar? Explora mi portafolio y llevemos tus proyectos al siguiente nivel.
                    </p>

                    <div className="flex items-center justify-center gap-3 mb-8 md:justify-start md:gap-10 md:mb-0">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:text-black hover:bg-white">
                            Ver proyectos
                        </a>
                        <a href="https://wa.me/34624136170?text=Hola%20Leonel,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios." 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 my-5 transition-all  cursor-pointer text-md w-fit text-white bg-tertiary  rounded-xl  hover:bg-secondary" >
                            Contáctame
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;