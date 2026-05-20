import { AnimatePresence, motion } from 'framer-motion';

export type PhysicsHelpTopic =
  | 'overview'
  | 'presets'
  | 'position-space'
  | 'momentum-space'
  | 'drawing-controls'
  | 'evolution'
  | 'telemetry';

interface TopicContent {
  eyebrow: string;
  title: string;
  summary: string;
  equation?: string;
  bullets: string[];
  experiment: string;
}

const helpTopics: Record<PhysicsHelpTopic, TopicContent> = {
  overview: {
    eyebrow: 'Physics Help',
    title: 'What this instrument is teaching',
    summary:
      'Wavefunction Graffiti is built around conjugate representations. You author a sampled state in position space, then immediately see how that same state appears in momentum space.',
    equation: 'psi(x) <-> phi(p)',
    bullets: [
      'The left panel shows the complex wavefunction in position space, including real part, imaginary part, density, and phase.',
      'The right panel shows the live Fourier transform, which reveals the momentum content required to build the state you drew.',
      'The telemetry cards estimate observables such as Delta x, Delta p, and their product from the sampled state.',
      'Time evolution lets you see how spectral content influences later motion rather than treating the state as a frozen picture.',
    ],
    experiment:
      'Start with a Gaussian packet, then compare it with the localized spike. That pair makes the position-momentum tradeoff visible immediately.',
  },
  presets: {
    eyebrow: 'Preset Library',
    title: 'Why the preset states matter',
    summary:
      'Each preset is a curated starting point for a specific quantum idea rather than a random shape.',
    bullets: [
      'Gaussian Packet is the clean minimum-uncertainty reference state.',
      'Plane Wave shows what an almost delocalized state looks like when momentum support is narrow.',
      'Double Packet and Superposition foreground interference and relative phase.',
      'Localized Spike exaggerates confinement so the reciprocal broadening becomes obvious.',
      'The harmonic-oscillator-style presets provide structured states with recognizable nodes and parity.',
    ],
    experiment:
      'Use a preset first, then distort it by hand. Seeing how a known state breaks is often more instructive than drawing from scratch.',
  },
  'position-space': {
    eyebrow: 'Position Space',
    title: 'What the drawing panel means',
    summary:
      'This panel is the sampled wavefunction psi(x). You are not just drawing probability density: you are editing a complex amplitude with both magnitude and phase structure.',
    equation: 'P(x) = |psi(x)|^2',
    bullets: [
      'The pearl trace is the real part of the wavefunction.',
      'The rose trace is the imaginary part of the wavefunction.',
      'The blush fill is probability density, which is what a position measurement samples.',
      'The phase strip shows the local complex angle, which can change momentum and interference even when density barely changes.',
    ],
    experiment:
      'Keep the density similar while switching from amplitude editing to phase editing. That makes it easier to see that phase carries real physical consequences.',
  },
  'momentum-space': {
    eyebrow: 'Momentum Space',
    title: 'What the Fourier panel is showing',
    summary:
      'The momentum panel is the reciprocal representation of the same state. It answers the question: which momentum components are needed to synthesize the wavefunction you drew?',
    equation: 'P(p) = |phi(p)|^2',
    bullets: [
      'The blush and amber traces are the complex momentum-space amplitudes.',
      'The density glow underneath is the momentum distribution.',
      'Broad structure in momentum space means the position-space state required many spatial frequencies.',
      'If the position-space state narrows, the Fourier response usually spreads.',
    ],
    experiment:
      'Squeeze the position-space packet tighter and watch the spectral response widen. That visual tradeoff is the heart of the panel.',
  },
  'drawing-controls': {
    eyebrow: 'Drawing Controls',
    title: 'What the brushes actually change',
    summary:
      'The control deck changes how your drawing modifies the complex wavefunction rather than just changing the look of a graph.',
    bullets: [
      'Amplitude mode changes the local envelope of the state, which strongly affects probability density.',
      'Phase mode rotates the local complex angle, which shifts interference and momentum content without necessarily making the density look dramatic.',
      'Brush radius controls how local or global each edit is in position space.',
      'Brush strength controls how aggressively the sampled state is perturbed before it is smoothed and renormalized.',
    ],
    experiment:
      'Draw with amplitude first, then apply a gentle phase gradient across the same packet and compare how differently momentum space reacts.',
  },
  evolution: {
    eyebrow: 'Time Evolution',
    title: 'Why the packet moves the way it does',
    summary:
      'Time evolution translates spectral structure into motion. In the current scaffold, the most important case is free-particle dispersion.',
    equation: 'psi(x, t) = F^-1[e^(-i E(p) t / hbar) phi(p)]',
    bullets: [
      'Static mode freezes the state so you can inspect its geometry without dynamics.',
      'Free particle mode applies momentum-dependent phase accumulation in reciprocal space.',
      'Different momentum components acquire different phase over time, which changes the packet shape back in position space.',
      'Broad momentum support usually leads to stronger visible dispersion.',
    ],
    experiment:
      'Turn on free-particle evolution after adding extra phase structure. The later motion will often reveal information that the density alone hid at t = 0.',
  },
  telemetry: {
    eyebrow: 'Telemetry',
    title: 'How to read the observable cards',
    summary:
      'The metric cards are there to confirm the visual story mathematically. They do not replace the intuition, but they let you quantify what the eye is noticing.',
    equation: 'Delta x Delta p >= hbar / 2',
    bullets: [
      'Delta x measures the spread of the state in position space.',
      'Delta p measures the spread of the reciprocal state in momentum space.',
      'Their product tracks the uncertainty tradeoff and should stay above the quantum lower bound for a valid normalized state.',
      'Normalization should stay near 1 because the app continuously renormalizes the sampled wavefunction after edits.',
      'Mean x and Mean p tell you where the packet is centered in each conjugate description.',
    ],
    experiment:
      'Compare the uncertainty numbers before and after drawing a sharper spike. The product should rise as the state becomes more localized.',
  },
};

interface PhysicsHelpButtonProps {
  label?: string;
  compact?: boolean;
  onClick: () => void;
}

export function PhysicsHelpButton({
  label = 'Physics help',
  compact = false,
  onClick,
}: PhysicsHelpButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-full border border-white/10 bg-[#0a121d]/76 font-mono uppercase tracking-[0.22em] text-mist transition hover:border-coral/20 hover:text-ink',
        compact
          ? 'px-3 py-2 text-[10px]'
          : 'px-4 py-2 text-[11px]',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

interface PhysicsHelpSheetProps {
  topic: PhysicsHelpTopic | null;
  onClose: () => void;
}

export function PhysicsHelpSheet({
  topic,
  onClose,
}: PhysicsHelpSheetProps) {
  const content = topic ? helpTopics[topic] : null;

  return (
    <AnimatePresence>
      {content ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[rgba(2,6,12,0.56)] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
            className="absolute inset-y-4 right-4 w-[min(28rem,calc(100vw-2rem))] overflow-y-auto rounded-[30px] border border-white/10 bg-[rgba(8,16,26,0.94)] p-6 shadow-panel backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-coral/80">
                  {content.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] text-ink">
                  {content.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mist transition hover:text-ink"
              >
                Close
              </button>
            </div>

            <p className="mt-5 text-base leading-8 text-mist">
              {content.summary}
            </p>

            {content.equation ? (
              <div className="mt-5 rounded-[22px] border border-amber/15 bg-[linear-gradient(180deg,rgba(255,155,146,0.08),rgba(242,209,152,0.04))] px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber/90">
                  Key equation
                </p>
                <p className="mt-2 font-mono text-sm text-amber">
                  {content.equation}
                </p>
              </div>
            ) : null}

            <div className="mt-6 rounded-[24px] border border-white/10 bg-[#0a121d]/78 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-coral/85">
                What this tool is saying
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-mist">
                {content.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral/80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blush/90">
                Try this
              </p>
              <p className="mt-3 text-sm leading-7 text-mist">
                {content.experiment}
              </p>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
