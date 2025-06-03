/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({
    date,
    name,
    description,
    livesite_link,
    github_link,
    skills,
    image_url,
} : {
    date: string
    name: string
    description: string
    livesite_link: string
    github_link: string
    skills: string[]
    image_url: string
}) {
    return (
        <div className='project-card'>
            <div className="project-details flex flex-col gap-2">

                <img 
                    src={image_url} 
                    alt={name} 
                    className="object-cover w-full h-auto"
                />

                <div className="flex gap-4 text-xs mt-2">
                    <p>{date}</p>
                    <Link href={github_link} target="_blank" className='flex items-center'>
                        <p>repo</p>
                        <ArrowUpRight className="w-3 h-3"/>
                    </Link>
                    <Link href={livesite_link} target="_blank" className='flex items-center'>
                        <p>livesite</p>
                        <ArrowUpRight className="w-3 h-3"/>
                    </Link>
                </div>

                <p className='font-bold'>{name}</p>

                <p className='text-sm'>{description}</p>

                <div className='flex gap-2 flex-wrap mt-4'>
                    {skills.map(skill => 
                        <Badge key={skill} className='px-2 py-1 rounded-full'>{skill}</Badge>
                    )}
                </div>

            </div>
        </div>
    )
}

export const FeaturedProjects = [
    {
      date: "2025",
      name: "Tithely v2 – Full-Stack Budgeting & Expense Management App",
      description: "After years of refining, I built Tithely to help me track personal spending and budget smarter. Simple, fast, and designed for real daily use.",
      livesite_link: "https://tithely-end-game.vercel.app/",
      github_link: "https://github.com/JonKohJJ/tithely-end-game",
      skills: ["Typescript", "Nextjs", "Server Actions", "Streaming + Suspense", "Zod Validation", "Tailwind", "Drizzle ORM", "PostgreSQL", "Supabase", "Clerk", "Stripe"],
      image_url: "/tithely.png"
    },
    {
      date: "2025",
      name: "AlgoPlay – Algorithm Visualizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non voluptates sunt, asperiores quasi ipsa vitae aperiam aut laboriosam provident illum, molestiae, nostrum debitis. Mollitia quod sed temporibus ab natus.",
      livesite_link: "",
      github_link: "",
      skills: ["React", "Next.js", "Canvas API", "Algorithms", "Data Structures"],
      image_url: "/tithely.png"
    },
    {
      date: "2025",
      name: "MarketSim – Stock Backtesting Engine",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non voluptates sunt, asperiores quasi ipsa vitae aperiam aut laboriosam provident illum, molestiae, nostrum debitis. Mollitia quod sed temporibus ab natus.",
      livesite_link: "",
      github_link: "",
      skills: ["TypeScript", "Node.js", "Finance APIs", "Chart.js", "Backtesting"],
      image_url: "/tithely.png"
    },
    {
      date: "2025",
      name: "Syslogger – Low-Level Logging Library",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non voluptates sunt, asperiores quasi ipsa vitae aperiam aut laboriosam provident illum, molestiae, nostrum debitis. Mollitia quod sed temporibus ab natus.",
      livesite_link: "",
      github_link: "",
      skills: ["Rust", "Systems Programming", "CLIs", "Logging", "Async I/O"],
      image_url: "/tithely.png"
    },
]
  
  


