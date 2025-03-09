"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This is a client component that would filter projects
// In a real implementation, this would update the projects displayed
export default function ProjectFilter() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

    const technologies = [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "NestJS",
        "React Native",
        "Java",
        "Spring Boot",
    ]

    const handleTechnologyToggle = (tech: string) => {
        setSelectedTechnologies((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
    }

    const clearFilters = () => {
        setSearchTerm("")
        setSelectedTechnologies([])
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Filter className="h-4 w-4" />
                            Filter
                            {selectedTechnologies.length > 0 && (
                                <Badge variant="secondary" className="ml-1 bg-sky-500/20 text-sky-400">
                                    {selectedTechnologies.length}
                                </Badge>
                            )}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Filter by Technology</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {technologies.map((tech) => (
                            <DropdownMenuCheckboxItem
                                key={tech}
                                checked={selectedTechnologies.includes(tech)}
                                onCheckedChange={() => handleTechnologyToggle(tech)}
                            >
                                {tech}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {(searchTerm || selectedTechnologies.length > 0) && (
                    <Button variant="ghost" size="icon" onClick={clearFilters} aria-label="Clear filters">
                        <X className="h-4 w-4" />
                    </Button>
                )}
            </div>

            {selectedTechnologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selectedTechnologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 cursor-pointer"
                            onClick={() => handleTechnologyToggle(tech)}
                        >
                            {tech}
                            <X className="h-3 w-3 ml-1" />
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    )
}

