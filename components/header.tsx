"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { useState } from "react";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-2 md:top-5">
            <header className="mx-5 mb-10 md:mx-10 lg:mb-12 px-4 md:px-0">
                <div className="container flex justify-between items-center max-w-6xl mx-auto">
                    <Link href="/">
                        <img
                            src="/ledex.png"
                            alt="LEDEX logo"
                            className="my-3 h-16 w-16 md:h-20 md:w-20 text-center md:text-left"
                        />
                    </Link>
                    <div className="flex items-center justify-center gap-4 mt-3 md:mt-0">
                        {socialNetworks.map(({ logo, src, id, title }) => (
                            Array.isArray(src) ? (
                                <div
                                    key={id}
                                    className="relative"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button
                                        title={title}
                                        className="flex items-center justify-center transition-all duration-300 hover:text-secondary text-sm md:text-base"
                                    >
                                        {logo}
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-2 bg-[#121324] shadow-lg border rounded-md w-48 z-50">
                                            {src.map(({ language, url }, index) => (
                                                <Link
                                                    key={`${id}-${index}`}
                                                    href={url}
                                                    target="_blank"
                                                    title={`${title} (${language})`}
                                                    className="block px-4 py-2 hover:bg-gray-100 hover:text-secondary"
                                                >
                                                    {language}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    title={title}
                                    className="transition-all duration-300 hover:text-secondary text-sm md:text-base"
                                >
                                    {logo}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
};

export default Header;