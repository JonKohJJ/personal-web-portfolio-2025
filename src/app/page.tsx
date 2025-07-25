import { Github, Linkedin } from "lucide-react";
import WorkExperienceCard, { WorkExperience } from "../components/WorkExperienceCard";
import ProjectCard, { FeaturedProjects } from "@/components/ProjectCard";
import MyLink from "@/components/MyLink";
// import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
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

      <div className="flex justify-center">
        <div className="container py-20 lg:pb-50 px-10 max-w-[1200px] flex flex-col gap-24 md:flex-row">

          <div className="profile flex flex-col gap-8 md:w-[40%] md:sticky md:top-12 md:self-start">

            <div className="profile-top flex flex-col gap-4 mb-4">
              <p className="text-4xl font-bold">Jonathan Koh</p>
              <p>Fullstack Software Engineer @ Singapore Press Holdings</p>
              <p className="text-sm italic">Building robust, enjoyable software — lately leaning into data engineering, statistical analysis and end-to-end business impact.</p>
            </div>

            <div className="socials">
              <div className="flex gap-2">
                <MyLink href="https://www.linkedin.com/in/jonathankohjj" showArrow={false}>
                  <Linkedin className="w-5 h-5"/>
                </MyLink>

                <MyLink href="https://github.com/JonKohJJ" showArrow={false}>
                  <Github className="w-5 h-5"/>
                </MyLink>
              </div>
            </div>

            <div className="resume">
              <MyLink href={'/Jonathan_Koh_Resume_Analyst_Data_Scientist.pdf'}>
                  view resume
              </MyLink>
            </div>

            <div className="past-portfolios">
              <div className="text-xs flex flex-col gap-1">
                <p>past portfolios</p>

                <MyLink href="https://jonkohjj.github.io/Personal-Web-Portfolio-2021">
                    2021
                </MyLink>

                <MyLink href="https://jonkohjj.github.io/personal-web-portfolio-2024">
                    2024
                </MyLink>
              </div>
            </div>

          </div>

          <div className="details flex flex-col gap-24 md:w-[60%]">

            <div className="about">
              <p className="font-bold text-2xl mb-12">About</p>

              <div className="flex flex-col gap-6">
                <p className="text-sm">
                  👋 Hi, I’m Jonathan — a business-focused SWE with 5 years of experience in full-stack development, now pivoting into data-centric roles to drive real-world impact through analytics and engineering.
                </p>
                <p className="text-sm">
                  I started in frontend development and gradually expanded into backend work using Python and Node.js at SPH, while also building full-stack apps independently with tools like Next.js, Drizzle, and Zod. I care deeply about clean, maintainable code and building purposeful digital experiences.
                </p>
                <p className="text-sm">
                  With a double major in Data Science and Business Management, I’m passionate about solving real-world problems with both code and data — like building Tithely, a personal finance tracker to better manage my spending. I enjoy bridging business needs with technical solutions and enabling smarter, data-driven decisions across teams.
                </p>
                <p className="text-sm">
                  Now, I’m doubling down on my data background, refining my skills in Python, SQL, and statistical modeling, and looking ahead to roles in data analysis or data science where I can combine my strong technical background with meaningful impact.
                </p>
              </div>
            </div>

            <div className="work-experience">
              <p className="font-bold text-2xl mb-12">Professional Experience</p>
              <div className="flex flex-col gap-20">
                {WorkExperience.map((item, index) => 
                  <WorkExperienceCard
                    key={index} 
                    {...item}
                  />
                )}
              </div>
            </div>

            <div className="featured-projects">
              <p className="font-bold text-2xl mb-12">Featured Projects</p>
              <div className="flex flex-col gap-20">
                {FeaturedProjects.map((item, index) => 
                  <ProjectCard
                    key={index} 
                    {...item}
                  />
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

