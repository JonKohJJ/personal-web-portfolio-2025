import { Github, Linkedin } from 'lucide-react'
import WorkExperienceCard, { WorkExperience } from '../components/WorkExperienceCard'
import ProjectCard, { FeaturedProjects_DataEngineering, FeaturedProjects_WebDev } from '@/components/ProjectCard'
import MyLink from '@/components/MyLink'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export default function Home() {
    return (
        <div className='relative w-full min-h-screen'>
            <div className='flex justify-center'>
                <div className='container py-20 lg:pb-50 px-10 max-w-[1200px] flex flex-col gap-24 md:flex-row'>
                    <div className='profile flex flex-col gap-8 md:w-[40%] md:sticky md:top-12 md:self-start'>
                        <div className='profile-top flex flex-col gap-4 mb-4'>
                            <p className='text-4xl font-bold'>Jonathan Koh</p>
                            <p>
                                {WorkExperience[0].title} @ {WorkExperience[0].company}
                            </p>
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
                            <MyLink href={'/Jonathan_Koh_Resume_Data_Engineer.pdf'}>view resume</MyLink>
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
                                    I’m Jonathan, a software engineer <strong>specialising in data engineering</strong>.
                                    Here’s a quick look at -
                                </p>

                                <ul className='ml-1 mt-6 space-y-8 list-none'>
                                    <li>
                                        <strong className='mb-2'>🛠 what I’m focused on now</strong>
                                        <ul className='mt-2 ml-4 space-y-2 list-disc'>
                                            <li>
                                                <span className='underline italic'>Data Ingestion</span> – Developing
                                                connectors to bring raw data from APIs, streams, and databases into the
                                                platform, and building pipelines that move, transform, and load that
                                                data reliably for downstream use.
                                            </li>

                                            <li>
                                                <span className='underline italic'>Stream Processing</span> – Building
                                                workflows with Kafka and Flink to process real-time event streams,
                                                enabling low-latency, high-throughput data transformation and delivery
                                                for immediate downstream use.
                                            </li>

                                            <li>
                                                <span className='underline italic'>
                                                    Storage & Lakehouse Architectures
                                                </span>{' '}
                                                – Managing structured and unstructured data in cloud storage (e.g., S3)
                                                and lakehouse systems (e.g., Databricks) to support both batch and
                                                real-time analytics, ensuring data is organized, accessible, and
                                                reliable for downstream workflows.
                                            </li>

                                            <li>
                                                <span className='underline italic'>Orchestration & Automation</span> –
                                                Building and managing automated workflows with Airflow and CI/CD
                                                practices to schedule, monitor, and reliably execute data pipelines
                                                end-to-end.
                                            </li>

                                            <li>
                                                <span className='underline italic'>Data Architecture & Modeling</span> –
                                                Designing and implementing schemas and data models that make information
                                                usable, scalable, and aligned with analytics and business requirements.
                                            </li>

                                            <li>
                                                <span className='underline italic'>Partitioning Strategies</span> –
                                                Designing and implementing data partitioning strategies to improve query
                                                performance, reduce costs, and ensure scalable storage and processing.
                                            </li>

                                            <li>
                                                <span className='underline italic'>Logging & Monitoring</span> –
                                                Designing and implementing observability practices to detect issues,
                                                ensure reliability, and maintain trust in data pipelines.
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <strong className='mb-2'>💻 my background</strong>
                                        <br />I have 5 years of experience building data-driven systems across the full
                                        stack. On the frontend, I’ve worked with TypeScript, React, Next.js, and
                                        Tailwind CSS. On the backend, I’ve built APIs, implemented CI/CD pipelines, and
                                        deployed services on AWS using Python, Node.js, and PostgreSQL. This foundation
                                        allows me to design scalable, maintainable, and efficient data systems that
                                        deliver real business impact.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>🔁 why data engineering</strong>
                                        <br />I believe data engineering delivers the most powerful impact on business
                                        outcomes. By building infrastructure and pipelines that provide clean, reliable,
                                        and timely data, I empower analysts and scientists to generate insights that
                                        drive the business forward. Compared to traditional software engineering, this
                                        work gives me greater clarity, influence, and the ability to create measurable
                                        results.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>🧠 what sets me apart</strong>
                                        <br />I approach engineering with a business-aware, product-focused, and
                                        user-oriented mindset. I also bring a strong foundation in data science and
                                        statistics, which helps me anticipate how data will be used, catch quality
                                        issues early, and collaborate effectively with analytics and data science teams.
                                    </li>

                                    <li>
                                        <strong className='mb-2'>📈 what&apos;s next</strong>
                                        <br />
                                        I’m continuing to expand my expertise in data infrastructure and distributed
                                        systems, and I’m excited to contribute to a team solving meaningful data
                                        challenges that drive real business impact.
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

                            <Tabs defaultValue='dataengineering'>
                                <TabsList className='mb-8'>
                                    <TabsTrigger className='cursor-pointer' value='dataengineering'>
                                        Data Engineering
                                        <Badge variant='outline'>{FeaturedProjects_DataEngineering.length}</Badge>
                                    </TabsTrigger>
                                    <TabsTrigger className='cursor-pointer' value='webdev'>
                                        Web Dev
                                        <Badge variant='outline'>{FeaturedProjects_WebDev.length}</Badge>
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value='webdev'>
                                    <div className='flex flex-col gap-20'>
                                        {FeaturedProjects_WebDev.map((item, index) => (
                                            <ProjectCard key={index} {...item} />
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value='dataengineering'>
                                    <div className='flex flex-col gap-20'>
                                        {FeaturedProjects_DataEngineering.map((item, index) => (
                                            <ProjectCard key={index} {...item} />
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
