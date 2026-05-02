import { PanelFrame } from '@/components/panels/PanelFrame';
import { PanelLegendCard } from '@/components/panels/PanelLegendCard';
import { SignalCanvas } from '@/components/visualization/SignalCanvas';
import type { DrawMode, SampledWavefunction } from '@/types/quantum';

interface PositionPanelProps {
  wavefunction: SampledWavefunction;
  density: Float64Array;
  phase: Float64Array;
  drawMode: DrawMode;
  onPaint: (xNorm: number, yNorm: number) => void;
  onOpenPhysicsHelp: () => void;
}

export function PositionPanel({
  wavefunction,
  density,
  phase,
  drawMode,
  onPaint,
  onOpenPhysicsHelp,
}: PositionPanelProps) {
  return (
    <PanelFrame
      eyebrow="Position Space"
      title="Author the state directly"
      description="This panel is your sampled wavefunction psi(x). Edit amplitude or phase directly, then read the complex structure and probability density as one object."
      badge={`Editing ${drawMode}`}
      onOpenPhysicsHelp={onOpenPhysicsHelp}
    >
      <SignalCanvas
        editable
        onPaint={onPaint}
        fillData={density}
        phaseData={phase}
        helperText={drawMode === 'amplitude' ? 'Amplitude brush' : 'Phase brush'}
        series={[
          {
            data: wavefunction.re,
            color: '#fff4f1',
            width: 2.4,
          },
          {
            data: wavefunction.im,
            color: '#ff9b92',
            width: 1.8,
            opacity: 0.86,
          },
        ]}
      />

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <PanelLegendCard
          label="Real + imaginary"
          body="Pearl and rose traces show the complex amplitude itself, not just the measurable density."
        />
        <PanelLegendCard
          label="Density + phase"
          body="The blush fill tracks |psi(x)|^2 while the phase strip shows the local complex angle."
        />
      </div>
    </PanelFrame>
  );
}
