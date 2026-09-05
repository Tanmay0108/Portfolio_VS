import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { About, Contact, Footer, Projects, Skills } from "@/components/Sections";
import { TechEcosystem, TechStackFlow } from "@/components/TechStackFlow";
import { Reveal } from "@/components/Reveal";

const github = "https://github.com/Tanmay0108";
const linkedin = "https://www.linkedin.com/in/tanmay-potnurwar-a76745357/";
const email = "tanmaypotnurwar8@gmail.com";

export default function Home() {
  return <main id="top" className="page"><Navbar/>
    <section className="relative"><div className="grid-pattern absolute inset-x-0 top-0 h-[620px]"/>
      <div className="shell relative grid min-h-[700px] items-center gap-10 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div><Reveal><p className="eyebrow">Computer Engineering · Final Year</p></Reveal>
          <Reveal delay={.08}><h1 className="display mt-6 text-[3.6rem] sm:text-7xl lg:text-[6.25rem]">Hi, I’m Tanmay.<br/><span style={{color:"var(--accent)"}}>I build intelligent<br className="hidden sm:block"/> systems.</span></h1></Reveal>
          <Reveal delay={.16}><p className="muted mt-8 max-w-xl text-lg sm:text-xl">Final-year Computer Engineering student building practical systems with AI, data, and backend technologies. Focused on Data Science, NLP, Generative AI, analytics, and automation.</p></Reveal>
          <Reveal delay={.24} className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="btn btn-primary">View my projects <ArrowRight size={17}/></a><a href="/resume/tanmay-resume.pdf" target="_blank" rel="noreferrer" className="btn">Download resume <ArrowDown size={17}/></a></Reveal>
          <Reveal delay={.3} className="mt-10 flex gap-5"><a href={github} target="_blank" rel="noreferrer" aria-label="Tanmay on GitHub" className="icon-link"><Github size={19}/></a><a href={linkedin} target="_blank" rel="noreferrer" aria-label="Tanmay on LinkedIn" className="icon-link"><Linkedin size={19}/></a><a href={`mailto:${email}`} aria-label="Email Tanmay" className="icon-link"><Mail size={19}/></a></Reveal>
        </div><Reveal delay={.2} className="hidden lg:block"><TechEcosystem/></Reveal>
      </div>
    </section><TechStackFlow/><About/><Skills/><Projects/><Contact/><Footer/>
  </main>;
}
