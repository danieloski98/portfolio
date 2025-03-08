"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import React from 'react';
import { ISkill } from "@/models/skills";
import { SKILLS } from "@/utils/starpi";
import { getSkills } from "@/functions/skills";

export default function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [skills, setSkills] = React.useState<ISkill[]>([]);

    React.useEffect(() => {
        (async function () {
            const { data: skills, meta } = await getSkills();
            setSkills(skills);
        })()
    }, [])

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
                    <motion.div key={skill.title} variants={item} className="flex flex-col items-center">
                        <div
                            className="relative w-20 h-20 mb-4 rounded-xl flex items-center justify-center bg-gray-800 p-4 overflow-hidden group"
                            style={{ boxShadow: `0 0 20px ${'purple'}20` }}
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{ backgroundColor: 'purple' }}
                            />
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGE}${skill.image.url}` || "/placeholder.svg"}
                                alt={skill.title}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="text-center font-medium">{skill.title}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

