"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail} from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "react-i18next"

export default function Page() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center max-w-screen-xl mx-auto">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Tom Belmans</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                {t("about")}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                {t("projects")}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                {t("contact")}
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="outline">{t("resume")}</Button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('fullStackDeveloper')}</span></h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('heroDescription')}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/TomBelmans" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/tom-belmans-515a14175/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:tom.belmans@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
              <div className="relative w-[500px] h-[500px] mt-8">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt={t("profilePictureAlt")}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("projectsTitle")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title={t("ecommerceTitle")}
                description={t("ecommerceDescription")}
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title={t("taskAppTitle")}
                description={t("taskAppDescription")}
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title={t("chatInterfaceTitle")}
                description={t("chatInterfaceDescription")}
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("techStackTitle")}
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("getInTouch")}
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t w-full">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 max-w-screen-xl mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">{t("copyright", { year: currentYear })}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              {t("termsOfService")}
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              {t("privacy")}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

