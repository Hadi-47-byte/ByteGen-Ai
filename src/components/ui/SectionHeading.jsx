import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignClass} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
