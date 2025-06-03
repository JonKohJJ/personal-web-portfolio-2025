import React from 'react'
import { Badge } from './ui/badge'

export default function WorkExperienceCard({
    date,
    title,
    company,
    description,
    skills
} : {
    date: string
    title: string
    company: string
    description: string
    skills: string[]
}) {
    return (
        <div className='work-experience-card flex flex-col gap-2'>   
            <p className='text-xs'>{date}</p>
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>{title} · {company}</p>
                <p className='text-sm'>{description}</p>

                <div className='flex gap-2 flex-wrap mt-2'>
                    {skills.map(skill => 
                        <Badge key={skill} className='px-2 py-1 rounded-full'>{skill}</Badge>
                    )}
                </div>
            </div>
        </div>
    )
}

export const WorkExperience = [
    {
      date: "NOVEMBER 2023 – PRESENT",
      title: "Fullstack Software Engineer",
      company: "Singapore Press Holdings (SPH)",
      description: "Worked on a React + TypeScript web application for managing church donations and finances. Led the refactor from traditional architecture to a modular React component system.",
      skills: ["Typescript", "Python", "Reactjs", "Tailwind", "Nodejs", "AWS"]
    },
    {
      date: "SEPTEMBER 2021 - OCTOBER 2023",
      title: "Frontend Web Developer",
      company: "New Creation Church (NCC)",
      description: "Built and maintained responsive UI components for enterprise clients, collaborated with design and backend teams, and improved overall UX and site performance.",
      skills: ["HTML", "CSS", "Javascript", "Webflow"]
    },
    {
      date: "MARCH 2021 - SEPTEMBER 2021",
      title: "System Analyst",
      company: "Grab Financial Group (Contract)",
      description: "Performed in-depth collection analysis, designed and implemented various loan collection strategies; Loan recovery rates increased from 87% to 93%, helping the company recover additional SDG$0.33M over 2 months period, with users reported enhanced operational efficiency and smoother day-to-day operations on the platform.",
      skills: ["this", "that" ]
    },
    {
        date: "AUGUST 2020 - DECEMBER 2020",
        title: "Data Engineer",
        company: "Alibaba Group (Contract)",
        description: "Contributed to NLP tasks such as web crawling for data acquisition and continuous language model training for a competitive bidding process, resulting in an 8% improvement in the model’s accuracy and securing the contract.",
        skills: ["NLP", "Regex"]
    }
]
  
