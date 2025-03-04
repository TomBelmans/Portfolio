export interface Project {
    id: string
    title: string
    description: string
    shortDescription: string
    imageUrl: string
    tags: string[]
    demoUrl?: string
    githubUrl?: string
    details: {
        challenge?: string
        solution?: string
        features?: string[]
        technologies?: string[]
    }
}

export interface ProjectLink {
    id: string
    githubUrl?: string
    demoUrl?: string
}