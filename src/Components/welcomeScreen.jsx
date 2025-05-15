"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function WelcomeScreen({ setShowWelcome }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
            setTimeout(() => setShowWelcome(false), 1500);
        }, 7000);
        return () => clearTimeout(timeout);
    }, [setShowWelcome]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 font-poppins"
                >
                    {/* Background */}
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1, opacity: 0.25 }}
                        transition={{ duration: 6, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/old.jpg')" }}
                    ></motion.div>

                    {/* Welcome Text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white text-center relative tracking-tight leading-snug professional-text"
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Welcome to My Portfolio",
                                    "Discover My Creative Universe",
                                    "Bringing Ideas to Reality",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </motion.h1>

                    {/* Optional Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-xl"
                    >
                        Passionate about building visually stunning and functional web experiences.
                    </motion.p>

                    {/* Fonts and Subtle Effects */}
                    <style jsx global>{`
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

            .font-poppins {
              font-family: 'Poppins', sans-serif;
            }

            .professional-text {
              text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
            }
          `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}