import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-gray-800 bg-gray-950">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Code className="h-6 w-6 text-sky-400" />
                            <span className="font-bold text-xl">DevPortfolio</span>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Full-stack developer specializing in modern web technologies and scalable applications.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-5 w-5 text-gray-400 hover:text-sky-400 transition-colors" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/username"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5 text-gray-400 hover:text-sky-400 transition-colors" />
                            </Link>
                            <Link href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter className="h-5 w-5 text-gray-400 hover:text-sky-400 transition-colors" />
                            </Link>
                            <Link href="mailto:contact@example.com" aria-label="Email">
                                <Mail className="h-5 w-5 text-gray-400 hover:text-sky-400 transition-colors" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Mobile App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    API Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Database Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    Technical Consulting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">San Francisco, CA</li>
                            <li>
                                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    contact@example.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+15551234567" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">&copy; {currentYear} DevPortfolio. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

