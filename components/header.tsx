"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-2 md:top-5">
            <header className="mx-5 mb-10 md:mx-10  md:mb-10 lg:mb-12">
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <img src="/favicon.ico" alt="LEDEX logo" className="my-3 h-20 w-20 text-center md:text-left" />
                        
                    </Link>
                    <div className="flex items-center justify-center gap-7 md:mx-10  md:mb-10 lg:mb-12">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
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
