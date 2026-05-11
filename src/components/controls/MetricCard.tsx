interface MetricCardProps {
  label: string;
  value: string;
  accent?: string;
}

export function MetricCard({
  label,
  value,
  accent = 'text-coral',
}: MetricCardProps) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-[#0b141f]/82 px-4 py-4 shadow-panel">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist/80">
        {label}
      </p>
      <p className={`mt-3 font-mono text-2xl ${accent}`}>{value}</p>
    </div>
  );
}
