import { Github, Linkedin } from "lucide-react";
import WorkExperienceCard, { WorkExperience } from "../components/WorkExperienceCard";
import ProjectCard, { FeaturedProjects } from "@/components/ProjectCard";
import MyLink from "@/components/MyLink";
import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="dot-grid absolute inset-0 w-full min-h-full z-[-999]">
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
      </div>

      <div className="flex justify-center">
        <div className="container py-20 lg:pb-50 px-10 max-w-[1200px] flex flex-col gap-24 md:flex-row">

          <div className="profile flex flex-col gap-8 md:w-[40%] md:sticky md:top-12 md:self-start">

            <div className="profile-top flex flex-col gap-4 mb-4">
              <p className="text-4xl font-bold">Jonathan Koh</p>
              <p>Fullstack Software Engineer @ Singapore Press Holdings</p>
              <p className="text-sm italic">Building robust, enjoyable software—lately leaning into low-level engineering and complex, data-driven systems.</p>
            </div>

            <div className="socials">
              <div className="flex gap-2">
                <MyLink href="https://www.linkedin.com/in/jonathankohjj">
                  <Linkedin className="w-5 h-5"/>
                </MyLink>

                <MyLink href="https://github.com/JonKohJJ">
                  <Github className="w-5 h-5"/>
                </MyLink>
              </div>
            </div>

            <div className="resume">
              <MyLink href={'/Jonathan_Koh_Resume_Analyst_2025.pdf'}>
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
                <p className="text-sm">👋 Hi, I’m Jonathan, thanks for stopping by!</p>
                <p className="text-sm">
                  I’m a frontend-focused Fullstack Engineer with a strong interest in building purposeful digital experiences. 
                  Starting my journey in frontend development, I’ve since expanded into backend maintenance using Python and Node.js at SPH, while independently building fullstack applications with frameworks like Next.js and a range of modern tools such as Drizzle, Zod, and others.
                </p>
                <p className="text-sm">
                  My passion lies in solving real-world problems through code—like creating a personal finance tracker, Tithely, to manage my spending more effectively. 
                  I value clean, readable codebases, and I’m motivated by the power of automation, long-term maintainability, and the ability to turn simple ideas into products that live on.
                </p>
                <p className="text-sm">
                  While I’m still growing in architectural and strategic influence, I’m proud of transitioning from a data-related background into software engineering and web development. 
                  I’m currently deepening my technical skill set by exploring lower-level languages like Go, C and Haskell, with an eye toward more systems-level thinking. 
                  I’m especially drawn to fintech, where I hope to merge my interest in personal finance with meaningful engineering challenges. Roles like quantitative developer intrigue me as potential next steps in my journey.
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

