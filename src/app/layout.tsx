import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Developer Portfolio",
  description: "Full-stack developer portfolio showcasing skills in JavaScript, TypeScript, React, Node.js, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-50 min-h-screen`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}

