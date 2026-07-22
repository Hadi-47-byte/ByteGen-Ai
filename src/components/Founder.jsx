import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="section-pad">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 text-center relative"
      >
        <Quote size={28} className="text-violet-soft mx-auto mb-6" />

        <p className="font-display text-xl md:text-2xl text-ink leading-relaxed">
          "To build intelligent AI products that simplify businesses,
          transform education and make Artificial Intelligence accessible
          for everyone."
        </p>

        <div className="mt-8 flex flex-col items-center gap-1">
          <span className="text-ink font-medium">Hadi Hassan</span>
          <span className="text-sm text-muted">Founder, ByteGen AI</span>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.08]">
          <span className="eyebrow">Future Goal</span>
          <p className="mt-2 text-sm text-muted max-w-xl mx-auto leading-relaxed">
            Build one of Pakistan's leading AI technology companies.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
