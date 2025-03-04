"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectDetailModal } from "@/components/project-detail-modal"
import { useTranslation } from "react-i18next"

// Define project IDs and their URLs
const projects = [
    {
        id: "portfolio",
        githubUrl: "https://github.com/TomBelmans/Portfolio",
        demoUrl: undefined,
    },
    {
        id: "ecommerce",
        githubUrl: "https://github.com/example/ecommerce",
        demoUrl: "https://example.com",
    },
    {
        id: "dashboard",
        githubUrl: undefined,
        demoUrl: "https://example.com/dashboard",
    },
]

export function ProjectsSection() {
    const { t } = useTranslation()
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleProjectClick = (projectId: string) => {
        setSelectedProjectId(projectId)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const selectedProject = projects.find((p) => p.id === selectedProjectId)

    return (
        <section className="py-12" id="projects">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} projectId={project.id} onClick={() => handleProjectClick(project.id)} />
                    ))}
                </div>
            </div>

            <ProjectDetailModal
                projectId={selectedProjectId}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                demoUrl={selectedProject?.demoUrl}
                githubUrl={selectedProject?.githubUrl}
            />
        </section>
    )
}