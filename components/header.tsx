"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-2 md:top-5">
            <header className="mx-5 mb-10 md:mx-10 lg:mb-12 px-4 md:px-0">
                <div className="container flex justify-between items-center max-w-6xl mx-auto">
                    <Link href='/'>
                        <img src="/favicon.ico" alt="LEDEX logo" className="my-3 h-16 w-16 md:h-20 md:w-20 text-center md:text-left" /> {/* Ajusta el tamaño en móvil */}
                    </Link>
                    <div className="flex items-center justify-center gap-4 mt-3 md:mt-0">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary text-sm md:text-base" /* Ajusta el tamaño del texto en móvil */
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;
