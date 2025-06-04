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
        <div className='work-experience-card flex flex-col gap-2 lg:flex-row lg:gap-6'>   
            <p className='text-xs lg:w-[25%] lg:mt-1'>{date}</p>
            <div className='flex flex-col gap-2 lg:w-[75%]'>
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
      date: "NOV 2023 - PRESENT",
      title: "Fullstack Software Engineer",
      company: "Singapore Press Holdings (SPH)",
      description: "I build dynamic UIs and maintain backend services using NodeJS and Python for reliable content delivery. Working within agile teams, I contribute to feature planning, ensure code quality, and integrate third-party services. Currently focused on developing an internal analytics platform that enables teams to create audience segments through custom data queries and provides actionable insights via scalable, data-driven interfaces.",
      skills: ["Typescript", "Python", "Reactjs", "Tailwind", "Nodejs", "AWS"]
    },
    {
      date: "SEPT 2021 - OCT 2023",
      title: "Frontend Web Developer",
      company: "New Creation Church (NCC)",
      description: "Developed and debugged 30+ SPAs in Webflow using HTML, CSS, and JavaScript over 2 years, while streamlining development by consulting on design feasibility and building reusable, scalable UI components.",
      skills: ["HTML", "CSS", "Javascript", "Webflow"]
    },
    {
      date: "MAR 2021 - SEPT 2021",
      title: "System Analyst",
      company: "Grab Financial Group (Contract)",
      description: "Boosted loan recovery rates from 87% to 93% through strategic collection initiatives, recovering an extra SGD$0.33M in 2 months and improving platform efficiency for users.",
      skills: ["SQL", "UAT", "CRM Databases"]
    },
    {
        date: "AUG 2020 - DEC 2020",
        title: "Data Engineer",
        company: "Alibaba Group (Contract)",
        description: "Improved NLP model accuracy by 8% through web crawling and continuous training, helping win a competitive contract.",
        skills: ["NLP", "Regex", "Web Crawling"]
    }
]
  
