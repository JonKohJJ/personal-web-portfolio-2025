import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import WorkExperienceCard, { WorkExperience } from "../components/WorkExperienceCard";
import ProjectCard, { FeaturedProjects } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container py-20 px-10 flex flex-col gap-24">

        <div className="profile flex flex-col gap-8">

          <div className="profile-top flex flex-col gap-2">
            <p className="text-4xl font-bold">Jonathan Koh</p>
            <p>Fullstack Software Engineer @ Singapore Press Holdings</p>
            <p className="text-sm italic">Building robust, enjoyable software—lately leaning into low-level engineering and complex, data-driven systems.</p>
          </div>

          <div className="socials">
            <div className="flex gap-2">
              <Link href="https://www.linkedin.com/in/jonathankohjj" target="_blank"><Linkedin className="w-5 h-5"/></Link>
              <Link href="https://github.com/JonKohJJ" target="_blank"><Github className="w-5 h-5"/></Link>
            </div>
          </div>

          <div className="resume">
            <Link href={'/Jonathan_Koh_SWE_Resume.pdf'} target="_blank" className="flex items-center w-fit">
              <p>View resume</p>
              <ArrowUpRight className="w-3 h-3"/>
            </Link>
          </div>

          <div className="past-portfolios">
            <div className="text-xs flex flex-col gap-1">
              <p>past portfolios</p>
              <Link href="https://jonkohjj.github.io/Personal-Web-Portfolio-2021/" target="_blank" className="flex items-center w-fit">
                <p>2021</p>
                <ArrowUpRight className="w-3 h-3"/>
              </Link>
              <Link href="" target="_blank" className="flex items-center w-fit">
                <p>2024</p>
                <ArrowUpRight className="w-3 h-3"/>
              </Link>
            </div>
          </div>

        </div>

        <div className="details flex flex-col gap-24">

          <div className="about">
            <p className="font-bold text-xl mb-6">About</p>
            <p className="text-sm">👋 Hi, I’m Jonathan, thanks for stopping by!</p>
            <p className="p-2"></p>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi error repellat amet ut molestias, necessitatibus quidem enim alias sed officiis magnam maiores porro consectetur odio, esse vel perferendis? Repellendus, consequuntur.</p>
          </div>

          <div className="work-experience">
            <p className="font-bold text-xl mb-6">Experience</p>
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
            <p className="font-bold text-xl mb-6">Featured Projects</p>
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
  );
}
