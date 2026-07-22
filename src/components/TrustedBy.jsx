import { motion } from "framer-motion";
import { GraduationCap, Rocket, Building2, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Rocket, label: "Startups" },
  { icon: GraduationCap, label: "Schools" },
  { icon: Building2, label: "Modern Businesses" },
  { icon: Sparkles, label: "Creators" },
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="section-pad !py-16 md:!py-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-mono text-xs tracking-[0.25em] uppercase text-muted mb-10"
      >
        Built for startups, schools and modern businesses
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-xl flex flex-col items-center justify-center gap-3 py-8"
          >
            <item.icon size={22} className="text-violet-soft" />
            <span className="text-sm text-ink/80">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
