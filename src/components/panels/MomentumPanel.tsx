import { PanelFrame } from '@/components/panels/PanelFrame';
import { PanelLegendCard } from '@/components/panels/PanelLegendCard';
import { SignalCanvas } from '@/components/visualization/SignalCanvas';
import type { MomentumWavefunction } from '@/types/quantum';

interface MomentumPanelProps {
  momentum: MomentumWavefunction;
  onOpenPhysicsHelp: () => void;
}

export function MomentumPanel({
  momentum,
  onOpenPhysicsHelp,
}: MomentumPanelProps) {
  return (
    <PanelFrame
      eyebrow="Momentum Space"
      title="Read the reciprocal answer"
      description="This panel is the live Fourier partner of your drawing. When the position-space packet tightens, the momentum-space response usually spreads."
      badge="Live FFT"
      onOpenPhysicsHelp={onOpenPhysicsHelp}
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

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <PanelLegendCard
          label="Complex spectrum"
          body="Blush and amber traces show the real and imaginary momentum amplitudes."
        />
        <PanelLegendCard
          label="Momentum density"
          body="The glow underneath tracks |phi(p)|^2, the probability distribution for momentum."
        />
        <PanelLegendCard
          label="Key lesson"
          body="Sharper localization in x typically demands broader support in p."
        />
      </div>
    </PanelFrame>
  );
}
