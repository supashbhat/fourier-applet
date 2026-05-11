import { useMemo } from 'react';
import { PanelFrame } from '@/components/panels/PanelFrame';
import { PanelLegendCard } from '@/components/panels/PanelLegendCard';
import { SignalCanvas } from '@/components/visualization/SignalCanvas';
import type { MomentumWavefunction } from '@/types/quantum';

function computeFocusedWindow(momentum: MomentumWavefunction): {
  start: number;
  end: number;
} | undefined {
  const { density } = momentum;

  if (density.length < 32) {
    return undefined;
  }

  let maxDensity = 0;

  for (let index = 0; index < density.length; index += 1) {
    maxDensity = Math.max(maxDensity, density[index]);
  }

  if (maxDensity <= 1e-10) {
    return undefined;
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
    return {
      start: 0.4,
      end: 0.6,
    };
  }

  const activeWidth = right - left + 1;

  if (activeWidth > density.length * 0.72) {
    return undefined;
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
    start: start / Math.max(density.length - 1, 1),
    end: end / Math.max(density.length - 1, 1),
  };
}

interface MomentumPanelProps {
  momentum: MomentumWavefunction;
  onOpenPhysicsHelp: () => void;
}

export function MomentumPanel({
  momentum,
  onOpenPhysicsHelp,
}: MomentumPanelProps) {
  const focusedWindow = useMemo(
    () => computeFocusedWindow(momentum),
    [momentum],
  );

  return (
    <PanelFrame
      eyebrow="Momentum Space"
      title="Read the reciprocal answer"
      description="This focused view shows the live Fourier partner of your drawing. When the position-space packet tightens, the momentum-space response usually spreads."
      badge="Live FFT"
      onOpenPhysicsHelp={onOpenPhysicsHelp}
    >
      <SignalCanvas
        fillData={momentum.density}
        phaseData={undefined}
        helperText="Focused transform"
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
        viewWindow={focusedWindow}
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
