"use client"

import { transitionVariantsPage } from "@/utils/motion-transition";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const TransitionPage = () => {
    const reducedMotion = useReducedMotion();
    if (reducedMotion) return null;
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#3184f7]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.2, ease: "easeInOut" }}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;
