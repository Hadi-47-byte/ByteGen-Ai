import { GraduationCap, School, MessagesSquare, Workflow } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

const PROJECTS = [
  {
    icon: GraduationCap,
    name: "Project Atlas",
    tag: "Personal AI Learning Platform",
  },
  {
    icon: School,
    name: "SchoolOS AI",
    tag: "AI School ERP",
  },
  {
    icon: MessagesSquare,
    name: "AI Chat Assistant",
    tag: "Business Chatbot",
  },
  {
    icon: Workflow,
    name: "Automation Scripts",
    tag: "Business Workflow Automation",
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Current Projects"
        title="What we're building right now"
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {PROJECTS.map((proj, i) => (
          <GlowCard key={proj.name} delay={i * 0.07} className="p-6">
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mb-5">
              <proj.icon size={18} className="text-cyan-soft" />
            </div>
            <h3 className="font-display text-base font-medium text-ink mb-1">{proj.name}</h3>
            <p className="text-sm text-muted">{proj.tag}</p>
          </GlowCard>
        ))}
      </div>

      <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-muted mt-12">
        More exciting projects coming soon.
      </p>
    </section>
  );
}
