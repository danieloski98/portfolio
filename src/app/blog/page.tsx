import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, ArrowRight } from "lucide-react"

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable APIs with NestJS and TypeScript",
            excerpt:
                "Learn how to create robust and maintainable APIs using NestJS and TypeScript with best practices for enterprise applications.",
            date: "March 15, 2023",
            readTime: "8 min read",
            categories: ["NestJS", "TypeScript", "Backend"],
            image: "/placeholder.svg?height=200&width=400",
        },
        {
            id: 2,
            title: "React Performance Optimization Techniques",
            excerpt:
                "Discover advanced techniques to optimize your React applications for better performance and user experience.",
            date: "April 22, 2023",
            readTime: "10 min read",
            categories: ["React", "Performance", "Frontend"],
            image: "/placeholder.svg?height=200&width=400",
        },
        {
            id: 3,
            title: "Migrating from MongoDB to PostgreSQL: Lessons Learned",
            excerpt:
                "A comprehensive guide on migrating a production application from MongoDB to PostgreSQL with minimal downtime.",
            date: "May 10, 2023",
            readTime: "12 min read",
            categories: ["MongoDB", "PostgreSQL", "Database"],
            image: "/placeholder.svg?height=200&width=400",
        },
        {
            id: 4,
            title: "Building Cross-Platform Mobile Apps with React Native",
            excerpt:
                "A step-by-step guide to developing cross-platform mobile applications using React Native and TypeScript.",
            date: "June 5, 2023",
            readTime: "9 min read",
            categories: ["React Native", "Mobile", "TypeScript"],
            image: "/placeholder.svg?height=200&width=400",
        },
        {
            id: 5,
            title: "Microservices Architecture with Spring Boot and Docker",
            excerpt:
                "Learn how to design and implement a microservices architecture using Spring Boot, Docker, and Kubernetes.",
            date: "July 18, 2023",
            readTime: "15 min read",
            categories: ["Spring Boot", "Microservices", "Docker"],
            image: "/placeholder.svg?height=200&width=400",
        },
        {
            id: 6,
            title: "State Management in React: Context API vs. Redux",
            excerpt: "A comparative analysis of different state management approaches in React applications.",
            date: "August 30, 2023",
            readTime: "11 min read",
            categories: ["React", "State Management", "Frontend"],
            image: "/placeholder.svg?height=200&width=400",
        },
    ]

    return (
        <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
                <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights about web development, programming, and technology.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="overflow-hidden border-sky-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full">
                                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                            </div>
                            <CardHeader className="p-4">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {post.categories.map((category, index) => (
                                        <Badge key={index} variant="secondary" className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20">
                                            {category}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                                <div className="flex items-center text-sm text-muted-foreground gap-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button asChild variant="ghost" className="p-0 h-auto text-sky-400 hover:text-sky-300">
                                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                                        Read More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" className="border-sky-500/20 hover:bg-sky-500/10">
                        Load More Articles
                    </Button>
                </div>
            </div>
        </main>
    )
}

