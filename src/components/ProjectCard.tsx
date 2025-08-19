import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'
import MyLink from './MyLink'

export default function ProjectCard({
    date,
    name,
    description,
    livesite_link,
    github_link,
    skills,
    image_url,
    coming_soon = false,
}: {
    date: string
    name: string
    description: string
    livesite_link: string
    github_link: string
    skills: string[]
    image_url: string
    coming_soon?: boolean
}) {
    return (
        <div className='project-card'>
            <div className='project-details flex flex-col gap-2 lg:flex-row lg:gap-6'>
                <div className='flex flex-col gap-4 w-full lg:w-[25%] lg:mt-1'>
                    {coming_soon ? (
                        <div className='w-full aspect-[3/2] bg-neutral-200 flex items-center justify-center mb-2'>
                            <p className='text-xs'>coming soon...</p>
                        </div>
                    ) : (
                        <>
                            <div className='w-full aspect-[3/2] relative'>
                                <Image src={image_url} alt={name} fill className='object-cover' />
                            </div>
                            <div className='flex gap-4 text-xs lg:flex-col lg:gap-1 relative'>
                                <p>{date}</p>

                                <MyLink href={github_link}>repo</MyLink>

                                <MyLink href={livesite_link}>livesite</MyLink>
                            </div>
                        </>
                    )}
                </div>

                <div className='flex flex-col gap-2 lg:w-[75%]'>
                    <p className='font-bold'>{name}</p>
                    <p className='text-sm'>{description}</p>

                    <div className='flex gap-2 flex-wrap mt-2'>
                        {skills.map((skill) => (
                            <Badge key={skill} className='px-2 py-1 rounded-full'>
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const FeaturedProjects_WebDev = [
    {
        date: '2025',
        name: 'Tithely End Game – Full-Stack Budgeting & Expense Management SaaS Application',
        description:
            'Built a robust full-stack SaaS app to help users track personal expenses, set budgets, and manage finances efficiently. Features real-time updates, intuitive UI, and data persistence, designed for daily use and long-term financial planning.',
        livesite_link: 'https://tithely-end-game.vercel.app/',
        github_link: 'https://github.com/JonKohJJ/tithely-end-game',
        skills: [
            'Typescript',
            'Nextjs',
            'Server Actions',
            'Streaming + Suspense',
            'Zod Validation',
            'Tailwind',
            'Drizzle ORM',
            'PostgreSQL',
            'Supabase',
            'Clerk',
            'Stripe',
        ],
        image_url: './images/tithely.png',
    },
    {
        date: '2025',
        name: 'Chrono Cam – Camera Market Timeline & Model Explorer',
        description:
            'A web platform displaying camera brands, series, and models in timelines for buyers and enthusiasts to explore the market evolution.',
        livesite_link: 'https://jonkohjj.github.io/chrono-cam/',
        github_link: 'https://github.com/JonKohJJ/chrono-cam',
        skills: ['Python', 'FastAPI', 'Nextjs', 'TypeScript', 'Tailwind'],
        image_url: './images/chronocam.png',
    },
    {
        date: '2025',
        name: 'Software-as-a-Service (SaaS) Starter Template - Fast & Easy Setup',
        description:
            'Rapidly build fullstack SaaS Apps with a ready-to-use template with authentication, billing, and database integration to quickly launch and scale SaaS applications.',
        livesite_link: '',
        github_link: '',
        skills: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Clerk (Auth & Billing)', 'Convex (DB)'],
        image_url: './images/tithely.png',
    },
]

export const FeaturedProjects_DataEngineering = [
    {
        date: '2025',
        name: 'Data Warehouse: Structuring Raw Data for Analysis',
        description:
            'Designed and implemented a data warehouse to centralize and prepare data for downstream analytics. Built ETL/ELT pipelines for data ingestion, cleaning, integration, and modeling. Optimized the architecture for scalable analytics and business reporting.',
        livesite_link: '',
        github_link: '',
        skills: [
            'ETL/ELT',
            'Data Architecture',
            'Integration',
            'Cleansing',
            'Loading',
            'Modeling',
            'SQL',
            'Data Warehousing',
        ],
        image_url: '',
        coming_soon: true,
    },
]
