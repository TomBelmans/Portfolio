'use client'

import {Button} from '@/components/ui/button'
import {Download, Github, Linkedin, Mail} from 'lucide-react'
import Link from 'next/link'
import ContactForm from './components/contact/contact-form'
import TechStack from './components/techStack/tech-stack'
import Image from 'next/image'
import {ThemeToggle} from '@/components/theme-toggle'
import {LanguageSwitcher} from '@/components/language-switcher'
import {useTranslation} from 'react-i18next'
import {ProjectsSection} from '@/app/components/project/projects-section'
import {useEffect, useState} from 'react'
import {StudiesSection} from '@/app/components/studies/studies-section'
import ExperienceSection from '@/app/components/workExperience/work-exprience'

export default function Page() {
    const {t, ready} = useTranslation()
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [mounted, setMounted] = useState(false)

    const getResumeLink = () => {
        switch (t('language')) {
            case 'fr':
                return '/misc/resume/cv_tom_belmans_fr.pdf'
            case 'de':
                return '/misc/resume/lebenslauf_tom_belmans_ de.pdf'
            case 'en':
                return '/misc/resume/cv-en.pdf'
            case 'nl':
                return '/misc/resume/cv_tom_belmans_nl.pdf'
            default:
                return '/misc/resume/cv_tom_belmans_nl.pdf'
        }
    }

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
        setMounted(true)
    }, [])

    // Don't render until translations and client-side mounting are ready
    if (!mounted || !ready) {
        return null // or a loading spinner
    }

    return (
        <div suppressHydrationWarning={true} className="min-h-screen bg-background flex flex-col items-center">
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center max-w-screen-xl mx-auto">
                    <div className="mr-4 hidden md:flex">
                        <Link className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">Tom Belmans</span>
                        </Link>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <Link key="about" href="#about" className="transition-colors hover:text-foreground/80">
                                {t('about')}
                            </Link>
                            <Link key="studies" href="#studies" className="transition-colors hover:text-foreground/80">
                                {t('studie')}
                            </Link>
                            <Link key="experience" href="#experience"
                                  className="transition-colors hover:text-foreground/80">
                                {t('experience')}
                            </Link>
                            <Link key="projects" href="#projects"
                                  className="transition-colors hover:text-foreground/80">
                                {t('projects')}
                            </Link>
                            <Link key="contact" href="#contact" className="transition-colors hover:text-foreground/80">
                                {t('contact')}
                            </Link>
                        </nav>
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <a href={getResumeLink()} target="_blank" rel="noopener noreferrer">
                            <Button
                                className="flex items-center gap-2 border-emerald-600"
                                variant="outline"
                            >
                                <Download className="w-4 h-4 text-emerald-600"/>
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      {t('resume')}
    </span>
                            </Button>
                        </a>
                        <ThemeToggle/>
                        <LanguageSwitcher/>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
                <section id="about" className="py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('fullStackDeveloper')}</span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    {t('heroDescription')}
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link href="https://github.com/TomBelmans" target="_blank">
                                    <Button variant="outline" size="icon">
                                        <Github className="h-4 w-4"/>
                                        <span className="sr-only">GitHub</span>
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/tom-belmans-515a14175/" target="_blank">
                                    <Button variant="outline" size="icon">
                                        <Linkedin className="h-4 w-4"/>
                                        <span className="sr-only">LinkedIn</span>
                                    </Button>
                                </Link>
                                <Link href="mailto:tom.belmans@proton.me">
                                    <Button variant="outline" size="icon">
                                        <Mail className="h-4 w-4"/>
                                        <span className="sr-only">Email</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="md:py-12 lg:py-12">
                    <div className="mx-auto max-w-4xl">
                        <div className="relative w-[80%] max-w-[500px] mx-auto">
                            <Image
                                src="/misc/image/TomBelmans.png"
                                alt={t('profilePictureAlt')}
                                width={300}
                                height={300}
                                className="rounded-2xl w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section id="studies" className="py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl">
                        <StudiesSection/>
                    </div>
                </section>

                <section id="experience" className="py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                            {t('experienceTitle')}
                        </h2>
                        <ExperienceSection/>
                    </div>
                </section>

                <section id="projects" className="py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                            {t('projectsTitle')}
                        </h2>
                        <ProjectsSection/>
                    </div>
                </section>

                <section className="py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                            {t('techStackTitle')}
                        </h2>
                        <TechStack/>
                    </div>
                </section>

                <section id="contact" className="py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                            {t('getInTouch')}
                        </h2>
                        <ContactForm/>
                    </div>
                </section>
            </main>

            <footer className="border-t w-full">
                <div
                    className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 max-w-screen-xl mx-auto">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('copyright', {year: currentYear})}</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs hover:underline underline-offset-4" href="#">
                            {t('termsOfService')}
                        </Link>
                        <Link className="text-xs hover:underline underline-offset-4" href="#">
                            {t('privacy')}
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}