interface PanelLegendCardProps {
  label: string;
  body: string;
}

export function PanelLegendCard({
  label,
  body,
}: PanelLegendCardProps) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[#0a121d]/74 px-4 py-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist/80">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-mist">
        {body}
      </p>
    </div>
  );
}
