"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast("Thank you for reaching out. I'll get back to you soon.")

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
        setIsSubmitting(false)
    }

    return (
        <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
                <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                    Have a question or want to work together? Fill out the form below or use one of the contact methods.
                </p>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card className="border-sky-500/20">
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Your email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="Subject of your message"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message"
                                            rows={6}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send className="h-4 w-4" />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <Card className="border-sky-500/20 h-full">
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>You can also reach out through these channels</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="h-5 w-5 text-sky-400 mt-1" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-sm text-muted-foreground">danielemmanuel257@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="h-5 w-5 text-sky-400 mt-1" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-sm text-muted-foreground">+234 80336345077</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-5 w-5 text-sky-400 mt-1" />
                                    <div>
                                        <h3 className="font-medium">Location</h3>
                                        <p className="text-sm text-muted-foreground">Nigeria</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start gap-4">
                                <h3 className="font-medium">Social Media</h3>
                                <div className="flex gap-4">
                                    <Button asChild variant="outline" size="icon">
                                        <a href="https://github.com/danieloski98" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <a
                                            href="https://www.linkedin.com/in/daniel-emmanuel-652685145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <a
                                            href="https://twitter.com/jesseoski"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                            </svg>
                                        </a>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}

