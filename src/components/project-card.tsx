"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectProps {
    project: {
        title: string
        description: string
        techStack: string[]
        githubLink: string
        liveLink: string
        image: string
    }
}

export default function ProjectCard({ project }: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Card
                className="overflow-hidden border-sky-500/20 h-full flex flex-col"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>

                <CardHeader className="p-4">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>

                <CardContent className="p-4 pt-0 flex-grow">
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardContent>

                <CardFooter className="p-4 flex gap-4">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                        <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Github className="h-4 w-4" />
                            Code
                        </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-sky-500 hover:bg-sky-600">
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

