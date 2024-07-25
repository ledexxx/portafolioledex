import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 pt-20 md:py-0 md:grid-cols-2 pb-28">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md ">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si tienes una idea, <br />
                        <TypeAnimation
                            sequence={[
                                'puedo programarlo',
                                1000,
                                'puedo optimizarlo',
                                1000,
                                'puedo diseñarlo',
                                1000,
                                'puedo desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Hola, soy Leonel Delgado, diseñador gráfico y desarrollador web. Transformo tus ideas en experiencias visuales cautivadoras. También estoy aprendiendo Java para ampliar mis habilidades técnicas. Explora mi trabajo y descubre cómo puedo ayudarte a dar vida a tus proyectos.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 mb-28">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contáctame
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;