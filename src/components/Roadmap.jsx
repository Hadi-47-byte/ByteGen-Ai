import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const MILESTONES = [
  { year: "2026", text: "Launch Agency" },
  { year: "2027", text: "Launch AI SaaS Products" },
  { year: "2028", text: "Expand Across Pakistan" },
  { year: "2029", text: "International Clients" },
  { year: "2030", text: "AI Research Division" },
  { year: "2032+", text: "Global AI Company" },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad">
      <SectionHeading
        eyebrow="Company Roadmap"
        title="Where ByteGen AI is headed"
      />

      <div className="mt-16 max-w-5xl mx-auto overflow-x-auto pb-4">
        <div className="relative flex gap-8 min-w-[720px] md:min-w-0 md:justify-between">
          <div className="absolute top-4 left-0 right-0 h-px signal-line" />
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center flex-1"
            >
              <span className="signal-node w-2.5 h-2.5 rounded-full bg-signal-gradient mb-5" />
              <span className="font-mono text-xs text-cyan-soft/80 mb-2">{m.year}</span>
              <span className="text-sm text-ink/85 max-w-[9rem]">{m.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
