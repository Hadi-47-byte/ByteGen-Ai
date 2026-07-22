import {
  GraduationCap,
  HeartPulse,
  Home,
  ShoppingCart,
  UtensilsCrossed,
  Video,
  Building2,
  Rocket,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

const INDUSTRIES = [
  { icon: GraduationCap, name: "Education" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Home, name: "Real Estate" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Video, name: "Content Creators" },
  { icon: Building2, name: "Small Businesses" },
  { icon: Rocket, name: "Startups" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-pad">
      <SectionHeading
        eyebrow="Industries"
        title="Built to adapt across every kind of business"
        description="The same intelligent systems, shaped to the way each industry actually operates."
      />

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {INDUSTRIES.map((ind, i) => (
          <GlowCard key={ind.name} delay={i * 0.05} className="p-6 flex flex-col items-center gap-3 text-center">
            <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
              <ind.icon size={20} className="text-violet-soft" />
            </div>
            <span className="text-sm text-ink/85">{ind.name}</span>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
