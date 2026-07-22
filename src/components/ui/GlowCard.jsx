import { motion } from "framer-motion";

export default function GlowCard({ children, className = "", delay = 0, glow = "violet" }) {
  const glowShadow = {
    violet: "hover:shadow-glow",
    blue: "hover:shadow-glow-blue",
    cyan: "hover:shadow-glow-cyan",
  }[glow];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl glass glass-hover ${glowShadow} transition-shadow duration-500 ${className}`}
    >
      {/* gradient border wash on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-signal-gradient p-[1px] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] -z-10" />
      {children}
    </motion.div>
  );
}
