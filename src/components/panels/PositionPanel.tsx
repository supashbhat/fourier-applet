import { PanelFrame } from '@/components/panels/PanelFrame';
import { SignalCanvas } from '@/components/visualization/SignalCanvas';
import type { DrawMode, SampledWavefunction } from '@/types/quantum';

interface PositionPanelProps {
  wavefunction: SampledWavefunction;
  density: Float64Array;
  phase: Float64Array;
  drawMode: DrawMode;
  onPaint: (xNorm: number, yNorm: number) => void;
}

export function PositionPanel({
  wavefunction,
  density,
  phase,
  drawMode,
  onPaint,
}: PositionPanelProps) {
  return (
    <PanelFrame
      eyebrow="Position Space"
      title="Author the state directly"
      description="Treat the left panel like a quantum signal deck. The real and imaginary traces sit on top of the probability density, and the strip below carries local phase."
      badge={`Editing ${drawMode}`}
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

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-mist">
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Real part in pearl
        </div>
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Imaginary part in rose
        </div>
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Density fill in blush
        </div>
        <div className="rounded-full border border-white/10 bg-[#0a121d]/74 px-4 py-2">
          Phase strip below
        </div>
      </div>
    </PanelFrame>
  );
}
