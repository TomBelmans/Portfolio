"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

interface ProjectDetailModalProps {
    projectId: string | null
    isOpen: boolean
    onClose: () => void
    demoUrl?: string
    githubUrl?: string
}

export function ProjectDetailModal({ projectId, isOpen, onClose, demoUrl, githubUrl }: ProjectDetailModalProps) {
    const { t } = useTranslation()

    if (!projectId) return null

    // Safely get arrays with fallbacks
    const getTechnologies = (): string[] => {
        try {
            const techs = t(`projectDetails.${projectId}.technologies`, { returnObjects: true })
            return Array.isArray(techs) ? techs.filter((tech): tech is string => typeof tech === 'string') : []
        } catch (error) {
            console.error("Error getting technologies:", error)
            return []
        }
    }

    const getFeatures = (): string[] => {
        try {
            const features = t(`projectDetails.${projectId}.features`, { returnObjects: true })
            return Array.isArray(features) ? features.filter((features): features is string => typeof features === 'string') : []
        } catch (error) {
            console.error("Error getting features:", error)
            return []
        }
    }

    const technologies = getTechnologies()
    const features = getFeatures()

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{t(`projectDetails.${projectId}.title`)}</DialogTitle>
                    <DialogDescription className="text-base text-foreground/80">
                        {t(`projectDetails.${projectId}.description`)}
                    </DialogDescription>
                </DialogHeader>

                <div className="relative h-64 sm:h-80 w-full my-4 rounded-lg overflow-hidden">
                    <Image
                        src={`/placeholder.svg?height=400&width=600`}
                        alt={t(`projectDetails.${projectId}.title`)}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-wrap gap-2 my-4">
                    {technologies.map((tag: string) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="grid gap-6 my-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{t("projectDetails.challenge")}</h3>
                        <p className="text-muted-foreground">{t(`projectDetails.${projectId}.challenge`)}</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">{t("projectDetails.solution")}</h3>
                        <p className="text-muted-foreground">{t(`projectDetails.${projectId}.solution`)}</p>
                    </div>

                    {features.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">{t("projectDetails.keyFeatures")}</h3>
                            <ul className="list-disc pl-5 text-muted-foreground">
                                {features.map((feature: string, index: number) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {technologies.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">{t("projectDetails.technologiesUsed")}</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech: string) => (
                                    <Badge key={tech} variant="outline">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-4 mt-6">
                    {demoUrl && (
                        <Button asChild>
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                {t("projectDetails.liveDemo")}
                            </a>
                        </Button>
                    )}

                    {githubUrl && (
                        <Button variant="outline" asChild>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                {t("projectDetails.viewCode")}
                            </a>
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}