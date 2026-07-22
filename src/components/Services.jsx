import {
  Bot,
  Workflow,
  Database,
  MessagesSquare,
  Sparkles,
  Wand2,
  School,
  LayoutDashboard,
  Globe,
  Boxes,
  Plug,
  Server,
  Search,
  Gauge,
  MapPin,
  Video,
  Clapperboard,
  Share2,
  PenTool,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

const CATEGORIES = [
  {
    name: "AI Solutions",
    glow: "violet",
    items: [
      { icon: MessagesSquare, title: "AI Chatbots", text: "Conversational assistants trained on your business." },
      { icon: Bot, title: "AI Agents", text: "Autonomous agents that complete real tasks end to end." },
      { icon: Database, title: "RAG Systems", text: "Retrieval-augmented AI grounded in your own data." },
      { icon: Workflow, title: "Workflow Automation", text: "Connect tools and eliminate manual handoffs." },
      { icon: Sparkles, title: "AI Assistants", text: "Internal copilots built around your team's workflow." },
      { icon: Wand2, title: "AI Consulting", text: "A clear roadmap for where AI actually creates value." },
    ],
  },
  {
    name: "Software Development",
    glow: "blue",
    items: [
      { icon: School, title: "School Management Systems", text: "Full ERP platforms for admissions to results." },
      { icon: Globe, title: "Web Applications", text: "Fast, scalable apps built on modern architecture." },
      { icon: Boxes, title: "SaaS Platforms", text: "Multi-tenant products designed to scale with you." },
      { icon: LayoutDashboard, title: "Dashboards", text: "Real-time visibility into the metrics that matter." },
      { icon: Plug, title: "API Development", text: "Reliable, documented APIs that connect your systems." },
      { icon: Server, title: "Database Systems", text: "Structured, secure data foundations built to last." },
    ],
  },
  {
    name: "Digital Growth",
    glow: "cyan",
    items: [
      { icon: Search, title: "SEO", text: "Search visibility strategy built for compounding growth." },
      { icon: Gauge, title: "Technical SEO", text: "Site health, speed and crawlability, fixed at the source." },
      { icon: Globe, title: "Website Optimization", text: "Faster load times, higher conversion, better retention." },
      { icon: MapPin, title: "Local SEO", text: "Get found by the customers already searching nearby." },
    ],
  },
  {
    name: "Creative Studio",
    glow: "violet",
    items: [
      { icon: Video, title: "Video Editing", text: "Polished edits that hold attention from frame one." },
      { icon: Sparkles, title: "AI Content Creation", text: "On-brand content produced at AI-native speed." },
      { icon: Clapperboard, title: "Motion Graphics", text: "Animated visuals that make ideas easy to follow." },
      { icon: Share2, title: "Social Media Content", text: "Consistent, scroll-stopping content across platforms." },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <SectionHeading
        eyebrow="Core Services"
        title="Four disciplines. One intelligent build."
        description="From AI systems to full software platforms, growth and creative — everything ByteGen AI ships is engineered to work together."
      />

      <div className="mt-16 flex flex-col gap-16 max-w-6xl mx-auto">
        {CATEGORIES.map((cat, ci) => (
          <div key={cat.name}>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-cyan-soft/70">
                0{ci + 1}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-ink font-medium">
                {cat.name}
              </h3>
              <div className="flex-1 h-px bg-line" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((item, i) => (
                <GlowCard key={item.title} delay={i * 0.05} glow={cat.glow} className="p-6">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-cyan-soft" />
                  </div>
                  <h4 className="font-display text-base font-medium text-ink mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
