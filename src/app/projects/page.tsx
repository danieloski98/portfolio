import Head from "next/head"
import ProjectFilter from "@/components/project-filter"
import { projects } from "@/lib/projects-data"
import API_URL, { urls } from "@/utils/url"
import ProjectCard from "@/components/project-card"
import { IStrapiApiResponse } from "@/models/StrapiApiResponse"
import { IProject } from "@/models/projects"

export const metadata = {
    title: "Projects | Developer Portfolio",
    description: "Browse all my projects including web applications, mobile apps, and backend systems.",
}

export default async function ProjectsPage() {
    const data = await fetch(`${API_URL}${urls.projects}?populate=*`);
    const projectsData: IStrapiApiResponse<IProject[]> = await data.json();

    console.log(projectsData);
    return (
        <>
            <Head>
                <title>Projects - My Portfolio</title>
                <meta name="description" content="Explore my projects showcasing my skills and expertise." />
                <meta name="keywords" content="portfolio, projects, web development, programming" />
            </Head>
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
                        {projectsData.data.map((project, index) => (
                            <ProjectCard project={project} key={index.toString()} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

