import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Mail, href: "mailto:hello@bytegen.ai", label: "Email" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="signal-node w-7 h-7 rounded-lg bg-signal-gradient flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-base" />
              </span>
              <span className="font-display font-semibold text-lg tracking-tight text-ink">
                ByteGen <span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed">
              Engineering the Next Generation of Intelligent Software.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <span className="eyebrow">Quick Links</span>
              <ul className="mt-4 flex flex-col gap-2.5">
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
            </div>

            <div>
              <span className="eyebrow">Connect</span>
              <div className="mt-4 flex gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-muted hover:text-ink"
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="signal-line" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} ByteGen AI. All rights reserved.
          </span>
          <span className="text-xs text-muted/70 font-mono">
            Built in Pakistan — engineered for the world.
          </span>
        </div>
      </div>
    </footer>
  );
}
