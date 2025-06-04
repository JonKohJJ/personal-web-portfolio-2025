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
    coming_soon
} : {
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
            <div className="project-details flex flex-col gap-2 lg:flex-row lg:gap-6">

                <div className="flex flex-col gap-4 w-full lg:w-[25%] lg:mt-1">
                    {coming_soon 
                        ?
                            <div className="w-full aspect-[3/2] bg-neutral-200 flex items-center justify-center mb-2">
                                <p className='text-xs'>coming soon...</p>
                            </div>
                        :
                            <>
                                <div className="w-full aspect-[3/2] relative">
                                    <Image 
                                        src={image_url} 
                                        alt={name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex gap-4 text-xs lg:flex-col lg:gap-1 relative">
                                    <p>{date}</p>

                                    <MyLink href={github_link}>
                                        repo
                                    </MyLink>

                                    <MyLink href={livesite_link}>
                                        livesite
                                    </MyLink>
                                </div>
                            </>
                    }
                </div>

                <div className='flex flex-col gap-2 lg:w-[75%]'>
                    <p className='font-bold'>{name}</p>
                    <p className='text-sm'>{description}</p>

                    <div className='flex gap-2 flex-wrap mt-2'>
                        {skills.map(skill => 
                        <Badge key={skill} className='px-2 py-1 rounded-full'>{skill}</Badge>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export const FeaturedProjects = [
    {
      date: "2025",
      name: "Tithely v2 – Full-Stack Budgeting & Expense Management Saas App",
      description: "After years of refining, I built Tithely to help me track personal spending and budget smarter. Simple, fast, and designed for real daily use.",
      livesite_link: "https://tithely-end-game.vercel.app/",
      github_link: "https://github.com/JonKohJJ/tithely-end-game",
      skills: ["Typescript", "Nextjs", "Server Actions", "Streaming + Suspense", "Zod Validation", "Tailwind", "Drizzle ORM", "PostgreSQL", "Supabase", "Clerk", "Stripe"],
      image_url: "./images/tithely.png"
    },
    {
      date: "2025",
      name: "Stock Backtesting Engine",
      description: "A TypeScript-based tool for simulating and evaluating trading strategies using real-time and historical financial data.",
      livesite_link: "",
      github_link: "",
      skills: ["TypeScript", "Node.js", "Finance APIs", "Chart.js", "Backtesting"],
      image_url: "",
      coming_soon: true,
    },
    {
      date: "2025",
      name: "Low-Level Logging Library",
      description: "A lightweight, asynchronous logging utility written in Rust, designed for high-performance CLI and systems applications.",
      livesite_link: "",
      github_link: "",
      skills: ["Rust", "Systems Programming", "CLIs", "Logging", "Async I/O"],
      image_url: "",
      coming_soon: true,
    },
]
  
  


