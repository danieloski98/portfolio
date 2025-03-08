"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
    const pathname = usePathname()
    const isMobile = useMobile()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent",
            )}
        >
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <Code className="h-6 w-6 text-sky-400" />
                        <span className="font-bold text-xl">DevPortfolio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-sky-400",
                                    pathname === link.href || (pathname === "/" && link.href.startsWith("/#"))
                                        ? "text-sky-400"
                                        : "text-gray-300",
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="bg-sky-500 hover:bg-sky-600">
                            <Link href="/contact">Hire Me</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-gray-900 border-t border-gray-800 py-4">
                    <div className="container mx-auto px-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium py-2 transition-colors hover:text-sky-400",
                                    pathname === link.href || (pathname === "/" && link.href.startsWith("/#"))
                                        ? "text-sky-400"
                                        : "text-gray-300",
                                )}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="bg-sky-500 hover:bg-sky-600 w-full mt-2">
                            <Link href="/contact" onClick={closeMenu}>
                                Hire Me
                            </Link>
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    )
}

