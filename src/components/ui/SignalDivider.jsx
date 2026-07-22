export default function SignalDivider({ label }) {
  return (
    <div className="relative flex items-center justify-center py-2 px-6 md:px-12 lg:px-20">
      <div className="signal-line" />
      {label && (
        <span className="absolute bg-base px-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
