import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const LINKS = [
  { icon: Mail, label: "Email", href: "mailto:hello@bytegen.ai" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build the Future Together"
        description="Tell us about your business and where you want AI to take it. We'll get back within one business day."
      />

      <div className="mt-14 grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-muted">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-violet/50 outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-muted">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-violet/50 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="project" className="text-xs text-muted">What are you looking to build?</label>
            <textarea
              id="project"
              rows={5}
              required
              placeholder="Tell us about your project or idea"
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-violet/50 outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-ink bg-signal-gradient shadow-glow hover:shadow-glow-cyan transition-shadow duration-500"
          >
            {submitted ? "Message sent" : "Send message"}
            <Send size={15} />
          </button>
          {submitted && (
            <p className="text-xs text-cyan-soft/80 font-mono">
              Thanks — we'll be in touch shortly.
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 glass rounded-2xl p-6 md:p-8 flex flex-col gap-4 justify-center"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-4 py-3.5 border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="w-9 h-9 rounded-lg bg-signal-gradient flex items-center justify-center shrink-0">
                <link.icon size={16} className="text-base" />
              </span>
              <span className="text-sm text-ink/85">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
