import { motion } from "framer-motion";
import { Brain, Workflow, Code2, TrendingUp, Lightbulb, Telescope } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const PILLARS = [
  { icon: Brain, title: "AI First", text: "Every product we build starts with intelligence at its core, not as an add-on." },
  { icon: Workflow, title: "Automation", text: "We remove repetitive work so teams can focus on what actually moves the business." },
  { icon: Code2, title: "Custom Software", text: "No templates. We engineer systems shaped around how your business actually runs." },
  { icon: TrendingUp, title: "Business Transformation", text: "AI adoption that changes outcomes, not just tooling." },
  { icon: Lightbulb, title: "Innovation", text: "We build with the tools that will matter in three years, not just today." },
  { icon: Telescope, title: "Future Vision", text: "Everything we ship is a step toward products, not just projects." },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About ByteGen AI"
        title="An AI-first studio building the software layer of tomorrow's businesses"
        description="ByteGen AI partners with startups, schools and businesses to design and ship custom software, automation and AI systems — engineered for real operational impact, not novelty."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-signal-gradient flex items-center justify-center mb-4">
              <p.icon size={18} className="text-base" />
            </div>
            <h3 className="font-display text-lg font-medium text-ink mb-2">{p.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
