import type React from "react"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Tom Belmans | Full Stack Developer & Software Engineer",
    description:
        "Portfolio van Tom Belmans, ervaren Full Stack Developer gespecialiseerd in webontwikkeling, softwareontwikkeling en moderne technologieën. Bekijk projecten, vaardigheden en ervaring.",
    icons: {
        icon: "/favicon.ico",
    },
    authors: [
        {
            name: "Tom Belmans",
            url: "https://www.tombelmans.be",
        },
    ],
    keywords: [
        "Tom Belmans",
        "Full Stack Developer",
        "Software Engineer",
        "Webontwikkeling",
        "Portfolio",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Projecten",
        "Vaardigheden",
    ],
    creator: "Tom Belmans",
    publisher: "Tom Belmans",
    openGraph: {
        title: "Tom Belmans | Full Stack Developer & Software Engineer",
        description:
            "Ontdek het portfolio van Tom Belmans: Full Stack Developer met expertise in moderne web- en softwareontwikkeling.",
        url: "https://www.tombelmans.be",
        siteName: "Tom Belmans Portfolio",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="nl" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background font-sans antialiased relative", inter.className)}>
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}