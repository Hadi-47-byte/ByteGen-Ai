import { GraduationCap, Building2, Eye, BrainCircuit } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

const STATUS_STYLES = {
  "In Development": "text-cyan-soft border-cyan/30 bg-cyan/10",
  "Coming Soon": "text-violet-soft border-violet/30 bg-violet/10",
  "Future Product": "text-blue-soft border-blue/30 bg-blue/10",
};

const PRODUCTS = [
  {
    icon: GraduationCap,
    name: "Project Atlas",
    tag: "Personal AI Learning Platform",
    text: "An adaptive learning system that shapes itself around how each student actually learns.",
    status: "In Development",
    glow: "cyan",
  },
  {
    icon: Building2,
    name: "SchoolOS AI",
    tag: "School Management Platform",
    text: "Admissions, attendance, fees and results in one system — with AI report cards and an AI parent assistant.",
    status: "Coming Soon",
    glow: "violet",
    features: ["Admissions", "Attendance", "Fees", "Results", "AI Report Cards", "AI Parent Assistant"],
  },
  {
    icon: BrainCircuit,
    name: "ByteGen CRM",
    tag: "Business Automation Platform",
    text: "A CRM that automates the busywork around every customer relationship.",
    status: "Coming Soon",
    glow: "blue",
  },
  {
    icon: Eye,
    name: "ByteGen Vision",
    tag: "Computer Vision Platform",
    text: "Visual intelligence infrastructure for the products we'll build next.",
    status: "Future Product",
    glow: "cyan",
  },
];

export default function FutureProducts() {
  return (
    <section id="solutions" className="section-pad">
      <SectionHeading
        eyebrow="Future Products"
        title="What ByteGen AI is building next"
        description="Beyond client work, we're building our own AI-native products — starting with education and business automation."
      />

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {PRODUCTS.map((p, i) => (
          <GlowCard key={p.name} delay={i * 0.08} glow={p.glow} className="p-7 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                <p.icon size={20} className="text-cyan-soft" />
              </div>
              <span
                className={`text-[11px] font-mono tracking-wide uppercase px-3 py-1 rounded-full border ${STATUS_STYLES[p.status]}`}
              >
                {p.status}
              </span>
            </div>

            <h3 className="font-display text-xl font-medium text-ink">{p.name}</h3>
            <p className="text-sm text-cyan-soft/80 mb-3">{p.tag}</p>
            <p className="text-sm text-muted leading-relaxed mb-4">{p.text}</p>

            {p.features && (
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs text-ink/70 rounded-full border border-white/[0.08] px-3 py-1"
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
