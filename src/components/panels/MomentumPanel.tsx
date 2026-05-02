import { useMemo } from 'react';
import { sampleMomentumTransform } from '@/lib/math/fft';
import { PanelFrame } from '@/components/panels/PanelFrame';
import { PanelLegendCard } from '@/components/panels/PanelLegendCard';
import { SignalCanvas } from '@/components/visualization/SignalCanvas';
import type {
  MomentumWavefunction,
  SampledWavefunction,
  SimulationParameters,
} from '@/types/quantum';

function computeFocusedRange(momentum: MomentumWavefunction): {
  pMin: number;
  pMax: number;
  focused: boolean;
} {
  const { density, p } = momentum;
  const fullRange = {
    pMin: p[0],
    pMax: p[p.length - 1],
    focused: false,
  };

  if (density.length < 32) {
    return fullRange;
  }

  let maxDensity = 0;

  for (let index = 0; index < density.length; index += 1) {
    maxDensity = Math.max(maxDensity, density[index]);
  }

  if (maxDensity <= 1e-10) {
    return fullRange;
  }

  const threshold = maxDensity * 0.012;
  let left = 0;
  let right = density.length - 1;

  while (left < density.length - 1 && density[left] < threshold) {
    left += 1;
  }

  while (right > 0 && density[right] < threshold) {
    right -= 1;
  }

  if (left >= right) {
    const centerIndex = Math.floor(density.length / 2);
    const halfWidth = Math.max(4, Math.round(density.length * 0.12));

    return {
      pMin: p[Math.max(0, centerIndex - halfWidth)],
      pMax: p[Math.min(density.length - 1, centerIndex + halfWidth)],
      focused: true,
    };
  }

  const activeWidth = right - left + 1;

  if (activeWidth > density.length * 0.72) {
    return fullRange;
  }

  const margin = Math.max(
    Math.round(activeWidth * 1.4),
    Math.round(density.length * 0.04),
  );
  const targetWidth = Math.max(
    activeWidth + margin * 2,
    Math.round(density.length * 0.2),
  );
  const center = Math.round((left + right) / 2);
  let start = Math.round(center - targetWidth / 2);
  let end = start + targetWidth - 1;

  if (start < 0) {
    end = Math.min(density.length - 1, end - start);
    start = 0;
  }

  if (end > density.length - 1) {
    start = Math.max(0, start - (end - (density.length - 1)));
    end = density.length - 1;
  }

  return {
    pMin: p[start],
    pMax: p[end],
    focused: true,
  };
}

interface MomentumPanelProps {
  momentum: MomentumWavefunction;
  wavefunction: SampledWavefunction;
  parameters: SimulationParameters;
  onOpenPhysicsHelp: () => void;
}

export function MomentumPanel({
  momentum,
  wavefunction,
  parameters,
  onOpenPhysicsHelp,
}: MomentumPanelProps) {
  const focusedRange = useMemo(
    () => computeFocusedRange(momentum),
    [momentum],
  );
  const displayMomentum = useMemo(
    () =>
      sampleMomentumTransform(
        wavefunction,
        parameters,
        focusedRange.pMin,
        focusedRange.pMax,
        focusedRange.focused ? 384 : 320,
      ),
    [focusedRange, parameters, wavefunction],
  );

  return (
    <PanelFrame
      eyebrow="Momentum Space"
      title="Read the reciprocal answer"
      description="This high-resolution view shows the live Fourier partner of your drawing. When the position-space packet tightens, the momentum-space response usually spreads."
      badge="Live FFT"
      onOpenPhysicsHelp={onOpenPhysicsHelp}
    >
      <SignalCanvas
        fillData={displayMomentum.density}
        phaseData={undefined}
        helperText={focusedRange.focused ? 'Focused transform' : 'Full transform'}
        series={[
          {
            data: displayMomentum.re,
            color: '#ffc2b6',
            width: 2.2,
          },
          {
            data: displayMomentum.im,
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
