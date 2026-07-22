import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const POINTS = [
  { title: "AI First", text: "Intelligence is built into the foundation of everything we ship." },
  { title: "Custom Solutions", text: "No templates, no cookie-cutter builds — every system fits your business." },
  { title: "Affordable", text: "Enterprise-grade engineering priced for growing teams." },
  { title: "Scalable", text: "Architecture designed to grow with you, not be rebuilt later." },
  { title: "Fast Delivery", text: "Lean process, senior execution, no unnecessary delays." },
  { title: "Modern Technology", text: "We build with the same stack powering today's leading AI products." },
  { title: "Long-term Partnership", text: "We stay involved after launch — as your systems evolve, so do we." },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-pad">
      <SectionHeading
        eyebrow="Why ByteGen AI"
        title="A partner built for the long run"
      />

      <div className="mt-16 max-w-3xl mx-auto relative">
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {POINTS.map((point, i) => {
            const leftSide = i % 2 === 0;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: leftSide ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className={`relative pl-10 md:pl-0 md:w-1/2 ${
                  leftSide ? "md:pr-10 md:text-right md:mr-auto" : "md:pl-10 md:ml-auto"
                }`}
              >
                <span
                  className={`signal-node absolute top-1 left-0 md:left-auto ${
                    leftSide ? "md:-right-[7px]" : "md:-left-[7px]"
                  } w-3.5 h-3.5 rounded-full bg-signal-gradient`}
                />
                <h3 className="font-display text-lg font-medium text-ink mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
