"use client"

import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

const technologies = [
  {
    category: "frontend",
    skills: ["HTML", "CSS", "JavaScript", "ASP.NET", ".NET MAUI", "React Vite","React Native", "Expo", "TypeScript"],
  },
  {
    category: "backend",
    skills: ["C#", "Next.js", "Microsoft SQL", "MariaDb", "PostgreSQL", "MongoDB"],
  },
]

export default function TechStack() {
  const { t } = useTranslation()

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{t(tech.category)}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

