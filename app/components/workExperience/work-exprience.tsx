"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
    position: string
    company: string
    location: string
    period: string
    description: string
    skills: string[]
    logo: string
}

export default function ExperienceSection() {
    const { t } = useTranslation();

    const experienceItems: ExperienceItem[] = [
        {
            position: t('seniorPosition'),
            company: t('seniorCompany'),
            location: t('seniorLocation'),
            period: t('senPeriod'),
            description: t('seniorDescription'),
            skills: t(['senSkills'], { returnObjects: true }) as unknown as string[],
            logo: '/misc/image/ZF_logo.png',
        },
        {
            position: t('midPosition'),
            company: t('midCompany'),
            location: t('midLocation'),
            period: t('midPeriod'),
            description: t('midDescription'),
            skills: t(['midSkills'], { returnObjects: true }) as unknown as string[],
            logo: '/misc/image/HansenTransmissions.jpg',
        }
    ];

    return (
        <div className="space-y-8">
            {experienceItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                            <div className="flex items-center">
                                <img src={item.logo} alt={`${item.company} logo`} className="h-10 max-w-25 mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">{item.position}</h3>
                                    <p className="text-muted-foreground">{item.company}, {item.location}</p>
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                {item.period}
              </span>
                        </div>
                        <p className="mt-2 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="font-normal">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
