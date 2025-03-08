"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import React from 'react';
import { ISkill } from "@/models/skills";
import { SKILLS } from "@/utils/starpi";

export default function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [skills, setSkills] = React.useState<ISkill[]>([]);

    React.useEffect(() => {
        (async function () {
            const skills = await (await SKILLS()).find({
                populate: {
                    image: {
                        fields: ['url', 'formats', 'alternativeText']
                    }
                }
            });
            console.log(skills.data);
            setSkills(skills.data as any);
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
                                width={80}
                                height={80}
                                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="text-center font-medium">{skill.title}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

