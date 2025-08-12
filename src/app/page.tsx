import { Github, Linkedin } from 'lucide-react'
import WorkExperienceCard, { WorkExperience } from '../components/WorkExperienceCard'
import ProjectCard, { FeaturedProjects } from '@/components/ProjectCard'
import MyLink from '@/components/MyLink'
// import DotGrid from "@/components/DotGrid";

export default function Home() {
    return (
        <div className='relative w-full min-h-screen'>
            {/* <div className="dot-grid absolute inset-0 w-full min-h-full z-[-999]">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#d5d5d5"
          // activeColor="#777777"
          activeColor="#5f5f5f"
          proximity={100}
          shockRadius={200}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div> */}

            <div className='flex justify-center'>
                <div className='container py-20 lg:pb-50 px-10 max-w-[1200px] flex flex-col gap-24 md:flex-row'>
                    <div className='profile flex flex-col gap-8 md:w-[40%] md:sticky md:top-12 md:self-start'>
                        <div className='profile-top flex flex-col gap-4 mb-4'>
                            <p className='text-4xl font-bold'>Jonathan Koh</p>
                            <p>Fullstack Software Engineer @ Singapore Press Holdings</p>
                            <p className='text-sm italic'>
                                From software engineering to data engineering — now building the backend systems,
                                pipelines, and workflows that deliver clean, reliable, and usable data at scale.
                            </p>
                        </div>

                        <div className='socials'>
                            <div className='flex gap-2'>
                                <MyLink href='https://www.linkedin.com/in/jonathankohjj' showArrow={false}>
                                    <Linkedin className='w-5 h-5' />
                                </MyLink>

                                <MyLink href='https://github.com/JonKohJJ' showArrow={false}>
                                    <Github className='w-5 h-5' />
                                </MyLink>
                            </div>
                        </div>

                        <div className='resume'>
                            <MyLink href={'/Jonathan_Koh_Resume_Analyst_Data_Scientist.pdf'}>view resume</MyLink>
                        </div>

                        <div className='past-portfolios'>
                            <div className='text-xs flex flex-col gap-1'>
                                <p>past portfolios</p>

                                <MyLink href='https://jonkohjj.github.io/Personal-Web-Portfolio-2021'>2021</MyLink>

                                <MyLink href='https://jonkohjj.github.io/personal-web-portfolio-2024'>2024</MyLink>
                            </div>
                        </div>
                    </div>

                    <div className='details flex flex-col gap-24 md:w-[60%]'>
                        <div className='about'>
                            <p className='font-bold text-2xl mb-8'>About</p>

                            <div className='flex flex-col gap-6 text-sm'>
                                <p>
                                    Hi, I’m Jonathan, a software engineer{' '}
                                    <strong>pivoting into data engineering</strong>. Here’s a quick look at —
                                </p>

                                <ul className='ml-1 mt-6 space-y-8 list-none'>
                                    <li>
                                        <strong className='mb-2'>🛠 what I’m focused on now</strong>
                                        <br />
                                        I’m building hands-on projects with Python, PySpark, SQL, Airflow, Databricks,
                                        Snowflake, and Kafka. Along the way, I’m strengthening my understanding of
                                        modern data architectures, data processing strategies, modeling techniques,
                                        partitioning methods, and the use of logging and monitoring to ensure pipeline
                                        reliability.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>💻 my background</strong>
                                        <br />I have 5 years of experience in web application development across the
                                        stack. On the frontend, I’ve worked with TypeScript, React, Next.js, and
                                        Tailwind CSS. On the backend, I’ve built APIs, implemented CI/CD pipelines, and
                                        launched services on AWS using Python, Node.js, and PostgreSQL.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>🔁 why the pivot</strong>
                                        <br />
                                        {/* I see data engineering as a crucial role that drives impact by building and maintaining the pipelines and infrastructure needed to ingest, transform, and deliver business-ready data at scale. This work empowers analysts and scientists to generate insights that help stakeholders make informed decisions and move the business forward. To me, this foundational role in the data ecosystem has a greater, more direct impact on business outcomes than traditional software engineering alone. */}
                                        I believe data engineering plays a crucial role in driving business impact. By
                                        building the infrastructure and pipelines that deliver clean, reliable, and
                                        timely data, we enable analysts and scientists to generate insights to move the
                                        business forward. To me, this work offers greater clarity and influence than
                                        traditional software engineering alone.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>🧠 what I sets me apart</strong>
                                        <br />I approach engineering with a business-aware, product-focused, and
                                        user-oriented mindset. I also bring a strong foundation in data analysis and
                                        statistics, which helps me understand how data will be used, catch quality
                                        issues early, and collaborate effectively with analytics and data science teams.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>📈 what&apos;s next</strong>
                                        <br />
                                        I’m continuing to grow in data infrastructure and distributed systems, and I’m
                                        excited to join a team that’s solving meaningful data challenges.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='work-experience'>
                            <p className='font-bold text-2xl mb-8'>Professional Experience</p>
                            <div className='flex flex-col gap-20'>
                                {WorkExperience.map((item, index) => (
                                    <WorkExperienceCard key={index} {...item} />
                                ))}
                            </div>
                        </div>

                        <div className='featured-projects'>
                            <p className='font-bold text-2xl mb-8'>Featured Projects</p>
                            <div className='flex flex-col gap-20'>
                                {FeaturedProjects.map((item, index) => (
                                    <ProjectCard key={index} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
