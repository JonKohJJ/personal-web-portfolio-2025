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
      name: "Tithely v2 – Full-Stack Budgeting & Expense Management SaaS Application",
      description: "Built a robust full-stack SaaS app to help users track personal expenses, set budgets, and manage finances efficiently. Features real-time updates, intuitive UI, and data persistence, designed for daily use and long-term financial planning.",
      livesite_link: "https://tithely-end-game.vercel.app/",
      github_link: "https://github.com/JonKohJJ/tithely-end-game",
      skills: ["Typescript", "Nextjs", "Server Actions", "Streaming + Suspense", "Zod Validation", "Tailwind", "Drizzle ORM", "PostgreSQL", "Supabase", "Clerk", "Stripe"],
      image_url: "./images/tithely.png"
    },
    {
      date: "2025",
      name: "Mortgage Loan & Amortisation Calculator",
      description: "Built a user-friendly mortgage calculator with real-time inputs and dynamic amortisation tables. Designed for clarity and usability, enabling users to understand monthly payments, interest accumulation, and total repayment costs over time.",
      livesite_link: "",
      github_link: "",
      skills: ["Python", "Streamlit", "Data Visualization", "Financial Modeling"],
      image_url: "",
      coming_soon: true,
    },
    {
      date: "2025",
      name: "Driving Costs: An End-to-End COE Data Pipeline & Dashboard",
      description: "Built a full ETL pipeline to collect, transform, and visualize Singapore’s Certificate of Entitlement (COE) bidding data using Python. Developed interactive dashboards to explore long-term trends, pricing volatility, and data-driven insights on whether it's a good time to buy a car in Singapore.",
      livesite_link: "",
      github_link: "",
      skills: ["Data Engineering", "ETL", "Python", "Streamlit", "APIs", "Pandas", "NumPy", "Matplotlib", "Plotly"],
      image_url: "",
      coming_soon: true,
    },
    {
        date: "2025",
        name: "Market Pulse: Predicting Stock Trends with Machine Learning",
        description: "Developed a predictive analytics dashboard that forecasts stock prices using historical trends, technical indicators, and time series models like Prophet and XGBoost. The project showcases end-to-end capabilities—from data ingestion and feature engineering to model deployment and visualization.",
        livesite_link: "",
        github_link: "",
        skills: ["Python", "Predictive Modeling", "Statistics", "Machine Learning", "Time Series", "Prophet", "scikit-learn", "yfinance", "Streamlit", "Pandas", "Plotly"],
        image_url: "",
        coming_soon: true
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
  
  


