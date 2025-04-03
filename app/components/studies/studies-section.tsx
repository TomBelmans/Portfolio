"use client"

import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, GraduationCap, MapPin } from "lucide-react"

export function StudiesSection() {
    const { t } = useTranslation()

    // Safely get studies items as an array with fallback
    const getStudiesItems = (): any[] => {
        try {
            const items = t("studies.items", { returnObjects: true })
            return Array.isArray(items) ? items : []
        } catch (error) {
            console.error("Error getting studies items:", error)
            return []
        }
    }

    const studiesItems = getStudiesItems()

    return (
        <section className="py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("studies.title")}</h2>
                </div>

                {/* Desktop timeline view (hidden on mobile) */}
                <div className="relative hidden md:block">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

                    <div className="space-y-12 relative">
                        {studiesItems.map((study, index) => (
                            <div key={index} className="grid grid-cols-2 gap-12 items-start">
                                <div className={`text-right ${index % 2 === 1 ? "order-2" : ""}`}>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="flex items-center justify-end gap-2">
                                        {study.logo && (
                                            <img src={study.logo} alt={`${study.degree} logo`} className="max-w-16 max-h-12" />
                                        )}
                                        <h3 className="text-xl font-bold">{study.degree}</h3>
                                    </div>
                                    <div className="flex items-center justify-end mt-2 text-muted-foreground">
                                        <GraduationCap className="w-4 h-4 mr-1" />
                                        <span>{study.institution}</span>
                                    </div>
                                    <div className="flex items-center justify-end mt-1 text-muted-foreground">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span>{study.location}</span>
                                    </div>
                                    <div className="flex items-center justify-end mt-1 text-muted-foreground">
                                        <CalendarDays className="w-4 h-4 mr-1" />
                                        <span>{study.duration}</span>
                                    </div>
                                </div>

                                <Card className={`${index % 2 === 1 ? "order-1" : ""}`}>
                                    <CardContent className="p-6">
                                        <p className="mb-4">{study.description}</p>
                                        <div className="space-y-2">
                                            <h4 className="font-medium">{t("studies.course")}:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {study.courses.map((course: string, idx: number) => (
                                                    <Badge key={idx} variant="secondary">
                                                        {course}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile card view (hidden on desktop) */}
                <div className="space-y-6 md:hidden">
                    {studiesItems.map((study, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold">{study.degree}</h3>
                                <div className="flex items-center mt-2 text-muted-foreground">
                                    <GraduationCap className="w-4 h-4 mr-1" />
                                    <span>{study.institution}</span>
                                </div>
                                <div className="flex items-center mt-1 text-muted-foreground">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>{study.location}</span>
                                </div>
                                <div className="flex items-center mt-1 mb-4 text-muted-foreground">
                                    <CalendarDays className="w-4 h-4 mr-1" />
                                    <span>{study.duration}</span>
                                </div>
                                <p className="mb-4">{study.description}</p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">{t("studies.courses", "Key Courses")}:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {study.courses.map((course: string, idx: number) => (
                                            <Badge key={idx} variant="secondary">
                                                {course}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}