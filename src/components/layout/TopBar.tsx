import { IcosaShellCanvas } from '@/components/brand/IcosaShellCanvas';
import { PhysicsHelpButton } from '@/components/help/PhysicsHelp';

interface TopBarProps {
  sampleCount: number;
  domain: number;
  hbar: number;
  onOpenHelp: () => void;
  onOpenPhysicsHelp: () => void;
}

function StatusChip({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist/80">
        {label}
      </span>
      <span className="ml-2 font-mono text-xs text-ink">{value}</span>
    </div>
  );
}

export function TopBar({
  sampleCount,
  domain,
  hbar,
  onOpenHelp,
  onOpenPhysicsHelp,
}: TopBarProps) {
  return (
    <header className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.055] px-6 py-6 shadow-panel backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-4">
            <div className="brand-mark brand-mark--compact">
              <IcosaShellCanvas
                variant="nav"
                className="relative z-[1] h-12 w-12"
              />
            </div>
            <div className="brand-copy">
              <p className="font-display text-base font-bold tracking-[-0.03em] text-ink">
                Wavefunction Graffiti
              </p>
              <p className="text-sm text-mist">
                Quantum control lab for Fourier duality
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusChip label="Grid" value={`${sampleCount} samples`} />
            <StatusChip label="Domain" value={`${domain.toFixed(1)} units`} />
            <StatusChip label="Units" value={`hbar = ${hbar}`} />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-coral/80">
              Berkeley Physics 137A Enrichment
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-[-0.05em] text-ink sm:text-6xl">
              Wavefunction Graffiti
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-mist sm:text-lg">
              Paint a complex state, interrogate its reciprocal response, and
              use the control-deck panels below to build intuition for
              uncertainty, phase structure, and time evolution.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:max-w-xl lg:justify-end">
            <PhysicsHelpButton
              label="Physics help"
              onClick={onOpenPhysicsHelp}
            />
            <button
              type="button"
              onClick={onOpenHelp}
              className="rounded-full border border-coral/20 bg-black/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-coral transition hover:bg-black/30"
            >
              Guided manual
            </button>
            <a
              href="https://supashbhat.github.io"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-[#0a121d]/72 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mist transition hover:text-ink"
            >
              Main portfolio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
