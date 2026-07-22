import SectionHeading from "./ui/SectionHeading";

const STACK = [
  "Python", "FastAPI", "React", "Tailwind CSS", "JavaScript", "PostgreSQL",
  "Docker", "Git", "GitHub", "PyTorch", "TensorFlow", "LangChain",
  "OpenAI API", "Gemini API", "Claude API", "Vector Databases",
];

// Duplicated for a seamless infinite scroll loop.
const ROW = [...STACK, ...STACK];

export default function TechStack() {
  return (
    <section id="stack" className="section-pad !px-0">
      <div className="px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Engineered on tools built for scale"
        />
      </div>

      <div className="mt-14 relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {ROW.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="glass rounded-full px-5 py-2.5 text-sm text-ink/80 font-mono whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
