"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)

    const scrollToNextSection = () => {
        if (sectionRef.current) {
            const nextSection = sectionRef.current.nextElementSibling
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-8 lg:px-16"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-950 to-transparent" />

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-sky-500/10"
                            style={{
                                width: Math.random() * 300 + 50,
                                height: Math.random() * 300 + 50,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.1, 0],
                                scale: [0, 1, 0],
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                            Full-Stack Developer
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl mb-8 text-gray-300">
                            Building modern web applications with JavaScript, TypeScript, React, React native, java, springboot and more.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/#projects">View My Work</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <motion.button
                    onClick={scrollToNextSection}
                    className="flex items-center justify-center p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    aria-label="Scroll down"
                >
                    <ArrowDown className="h-6 w-6 text-sky-400" />
                </motion.button>
            </div>
        </section>
    )
}

