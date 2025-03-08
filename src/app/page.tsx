import Link from "next/link"
import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import HeroSection from "@/components/hero-section"
import { getProjects } from '@/functions/projects'

export default async function Home() {

  const { data, meta } = await getProjects();


  return (
    <main className="min-h-screen">
      <HeroSection />

      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/my.jpg"
              alt="Developer Profile"
              width={400}
              height={400}
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              I'm a full-stack developer with expertise in JavaScript/TypeScript ecosystems and Java backend
              development. With a passion for creating efficient, scalable, and user-friendly applications, I bring
              ideas to life through code.
            </p>
            <p className="text-lg mb-6">
              My experience spans from building responsive front-end interfaces with React to developing robust back-end
              systems with Node.js, NestJS, and Spring Boot. I'm proficient in both SQL and NoSQL databases,
              particularly PostgreSQL and MongoDB.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon">
                <Link href="https://github.com/danieloski98" target="_blank" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://www.linkedin.com/in/daniel-emmanuel-652685145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="mailto:danielemmanuel257@gmail.com" aria-label="Email Contact">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <SkillsSection />
        </div>
      </section>

      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-sky-500 hover:bg-sky-600">
            <Link href="https://github.com/username" target="_blank">
              View More Projects
            </Link>
          </Button>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8">
            I'm currently available for freelance work and open to new opportunities. If you have a project that needs
            my expertise, feel free to reach out.
          </p>
          <Button asChild className="bg-sky-500 hover:bg-sky-600">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

