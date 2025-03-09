import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronLeft, Github, ExternalLink, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/lib/projects-data"
import MarkdownRenderer from "@/components/markdown-renderer"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug)

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        }
    }

    return {
        title: `${project.title} | Developer Portfolio`,
        description: project.shortDescription || project.description.substring(0, 160),
    }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16 mt-14">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/projects" className="flex items-center text-sky-400 hover:text-sky-300 transition-colors mb-4">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Projects
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                        {project.date && (
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{project.date}</span>
                            </div>
                        )}
                        {project.duration && (
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{project.duration}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Button asChild className="bg-sky-500 hover:bg-sky-600">
                            <Link
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <ExternalLink className="h-4 w-4" />
                                View Live Demo
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Github className="h-4 w-4" />
                                View Source Code
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
                </div>

                <Card className="mb-8 border-sky-500/20">
                    <CardContent className="p-6">
                        <div className="prose prose-invert max-w-none prose-headings:text-sky-400 prose-a:text-sky-400">
                            <MarkdownRenderer content={project.description} />
                        </div>
                    </CardContent>
                </Card>

                {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.screenshots.map((screenshot, index) => (
                                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src={screenshot.url || "/placeholder.svg"}
                                        alt={screenshot.caption || `${project.title} screenshot ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {project.challenges && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                        <div className="prose prose-invert max-w-none prose-headings:text-sky-400 prose-a:text-sky-400">
                            <MarkdownRenderer content={project.challenges} />
                        </div>
                    </div>
                )}

                <Separator className="my-8" />

                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">More Projects</h2>
                    <Button asChild variant="ghost" className="text-sky-400 hover:text-sky-300 hover:bg-sky-500/10">
                        <Link href="/projects">View All Projects</Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {projects
                        .filter((p) => p.slug !== project.slug)
                        .slice(0, 2)
                        .map((relatedProject, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-sky-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                            >
                                <div className="relative h-40 w-full">
                                    <Image
                                        src={relatedProject.image || "/placeholder.svg"}
                                        alt={relatedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="font-bold text-lg">{relatedProject.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {relatedProject.techStack.slice(0, 2).map((tech, i) => (
                                                <Badge key={i} variant="secondary" className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex justify-end">
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="ghost"
                                        className="text-sky-400 hover:text-sky-300 hover:bg-sky-500/10"
                                    >
                                        <Link href={`/projects/${relatedProject.slug}`}>View Project</Link>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                </div>
            </div>
        </main>
    )
}

