"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

interface ProjectCardProps {
    projectId: string
    onClick: () => void
}

export function ProjectCard({ projectId, onClick }: ProjectCardProps) {
    const { t } = useTranslation()

    // Safely get technologies as an array with fallback
    const getTechnologies = (): string[] => {
        try {
            const techs = t(`projectDetails.${projectId}.technologies`, { returnObjects: true })
            return Array.isArray(techs) ? techs.filter((tech): tech is string => typeof tech === 'string') : []
        } catch (error) {
            console.error("Error getting technologies:", error)
            return []
        }
    }

    const technologies = getTechnologies()

    return (
        <Card
            className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={onClick}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={t(`projectDetails.${projectId}.title`)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{t(`projectDetails.${projectId}.title`)}</h3>
                <p className="text-muted-foreground mb-4">{t(`projectDetails.${projectId}.shortDescription`)}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 3).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                    {technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{technologies.length - 3} more
                        </Badge>
                    )}
                </div>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted-foreground">{t("projectDetails.viewDetails")}</p>
            </CardFooter>
        </Card>
    )
}