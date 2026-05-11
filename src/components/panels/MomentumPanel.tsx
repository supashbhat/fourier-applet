import { PanelFrame } from '@/components/panels/PanelFrame';
import { SignalCanvas } from '@/components/visualization/SignalCanvas';
import type { MomentumWavefunction } from '@/types/quantum';

interface MomentumPanelProps {
  momentum: MomentumWavefunction;
}

export function MomentumPanel({ momentum }: MomentumPanelProps) {
  return (
    <PanelFrame
      eyebrow="Momentum Space"
      title="Read the reciprocal answer"
      description="This is the live Fourier partner of the drawing surface. As the position-space state tightens, the control-room view here broadens and brightens."
      badge="Live FFT"
    >
      <SignalCanvas
        fillData={momentum.density}
        phaseData={undefined}
        helperText="Live transform"
        series={[
          {
            data: momentum.re,
            color: '#ffc2b6',
            width: 2.2,
          },
          {
            data: momentum.im,
            color: '#f2d198',
            width: 1.7,
            opacity: 0.86,
          },
        ]}
      />

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-mist">
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Fourier amplitude in blush and amber
        </div>
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Spectral density fill in blush
        </div>
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Reciprocal broadening is the key lesson
        </div>
      </div>
    </PanelFrame>
  );
}
