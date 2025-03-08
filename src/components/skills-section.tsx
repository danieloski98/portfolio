"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const skills = [
        {
            name: "JavaScript",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#F7DF1E",
        },
        {
            name: "TypeScript",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#3178C6",
        },
        {
            name: "Node.js",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#339933",
        },
        {
            name: "React",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#61DAFB",
        },
        {
            name: "React Native",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#61DAFB",
        },
        {
            name: "NestJS",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#E0234E",
        },
        {
            name: "Java",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#007396",
        },
        {
            name: "Spring Boot",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#6DB33F",
        },
        {
            name: "MongoDB",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#47A248",
        },
        {
            name: "PostgreSQL",
            icon: "/placeholder.svg?height=80&width=80",
            color: "#336791",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    }

    return (
        <div ref={ref}>
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            >
                {skills.map((skill, index) => (
                    <motion.div key={skill.name} variants={item} className="flex flex-col items-center">
                        <div
                            className="relative w-20 h-20 mb-4 rounded-xl flex items-center justify-center bg-gray-800 p-4 overflow-hidden group"
                            style={{ boxShadow: `0 0 20px ${skill.color}20` }}
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{ backgroundColor: skill.color }}
                            />
                            <Image
                                src={skill.icon || "/placeholder.svg"}
                                alt={skill.name}
                                width={80}
                                height={80}
                                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="text-center font-medium">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

