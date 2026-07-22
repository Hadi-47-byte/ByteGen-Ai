import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-glow" : "border border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-6 py-3">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="signal-node w-7 h-7 rounded-lg bg-signal-gradient flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-base" />
            </span>
            <span className="font-display font-semibold text-lg tracking-tight text-ink">
              ByteGen <span className="gradient-text">AI</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-ink transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink bg-signal-gradient shadow-glow hover:shadow-glow-cyan transition-shadow duration-500"
            >
              Book a Consultation
            </a>
          </div>

          <button
            className="lg:hidden text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden px-5"
            >
              <ul className="flex flex-col gap-1 pb-5 pt-2 border-t border-white/[0.08]">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-sm text-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-center rounded-full px-5 py-2.5 text-sm font-medium text-ink bg-signal-gradient"
                  >
                    Book a Consultation
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
