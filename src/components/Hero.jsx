import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ParticleField from "./ui/ParticleField";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* animated grid */}
      <div className="absolute inset-0 bg-grid-lines bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_10%,transparent_75%)]" />

      {/* glowing blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-blue/25 blur-[110px] animate-drift-slow" />
      <div className="absolute top-40 right-0 w-[380px] h-[380px] rounded-full bg-violet/25 blur-[110px] animate-drift" />
      <div className="absolute bottom-0 left-1/3 w-[340px] h-[340px] rounded-full bg-cyan/15 blur-[110px] animate-drift-slow" />

      <ParticleField />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-20"
      >
        <span className="eyebrow mb-6 rounded-full glass px-4 py-1.5">
          AI-First Technology Studio
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-ink">
          Engineering the{" "}
          <span className="gradient-text">Next Generation</span> of
          Intelligent Software
        </h1>

        <p className="mt-6 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
          We help businesses automate workflows, build intelligent software
          and unlock growth using Artificial Intelligence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-ink bg-signal-gradient shadow-glow hover:shadow-glow-cyan transition-shadow duration-500"
          >
            Explore Services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-ink glass glass-hover"
          >
            Book Free Consultation
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#trusted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-muted"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
