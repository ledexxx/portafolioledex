"use client"
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        <MotionTransition
            position="right"
            className="fixed bottom-0 left-0 right-0 z-40 w-full md:hidden bg-[#00122b] rounded-t-3xl overflow-hidden"
        >
            <nav className="flex items-center justify-around px-2 py-2">
                {itemsNavbar.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        title={item.title}
                        className={`p-3 transition duration-100 rounded-full ${
                            pathname === item.link
                                ? "bg-tertiary"
                                : "hover:bg-white/10"
                        }`}
                    >
                        {item.icon}
                    </Link>
                ))}
            </nav>
        </MotionTransition>
    );
};

export default Navbar;
