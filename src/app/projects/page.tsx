import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import ProjectFilter from "@/components/project-filter"
import { projects } from "@/lib/projects-data"

export const metadata = {
    title: "Projects | Developer Portfolio",
    description: "Browse all my projects including web applications, mobile apps, and backend systems.",
}

export default function ProjectsPage() {
    return (
        <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16 mt-14">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">My Projects</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of my work including web applications, mobile apps, and backend systems. Each project
                        demonstrates different skills and technologies.
                    </p>
                </div>

                <ProjectFilter />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden border-sky-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                            </div>

                            <CardHeader className="p-4">
                                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.slice(0, 3).map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <Badge variant="outline" className="text-muted-foreground">
                                            +{project.techStack.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="p-4 pt-0 flex-grow">
                                <CardDescription className="text-gray-400 line-clamp-3">
                                    {project.shortDescription || project.description.substring(0, 150) + "..."}
                                </CardDescription>
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
                                    <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        Details
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}

