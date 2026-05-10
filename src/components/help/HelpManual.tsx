import { motion } from 'framer-motion';

function ManualCard({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 shadow-panel backdrop-blur-xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan/80">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-display text-2xl text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-mist">{body}</p>
    </div>
  );
}

function BulletColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-black/22 p-5">
      <h4 className="font-display text-xl text-ink">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-mist">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HelpManual() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-8 space-y-6"
      id="help"
    >
      <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber/90">
          Instruction Manual
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          How to play the instrument
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-mist">
          Wavefunction Graffiti is designed like a scientific instrument, not a
          worksheet. Start by drawing, then watch the conjugate picture respond.
          If you remember one lesson, let it be this: narrowing the state in
          position space makes momentum space pay the price.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <ManualCard
          eyebrow="Quick Start"
          title="1. Paint first, analyze second"
          body="Choose a preset, then drag directly on the position-space panel. Use amplitude mode to sculpt the envelope and phase mode to inject internal winding. Every stroke is normalized automatically so the state stays physically interpretable."
        />
        <ManualCard
          eyebrow="Reciprocal View"
          title="2. Read the answer in momentum space"
          body="The right panel is the live Fourier transform of the state on the left. Broad, smooth packets tend to concentrate in momentum space, while sharp localization forces the spectrum to spread and develop high-frequency structure."
        />
        <ManualCard
          eyebrow="Uncertainty"
          title="3. Track the tradeoff numerically"
          body="The uncertainty cards estimate Delta x, Delta p, and their product from the sampled state. They are there to reinforce the visual lesson, not replace it. Try squeezing a packet and watch the product climb."
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <BulletColumn
          title="Feature Guide"
          items={[
            'Amplitude brush changes the magnitude of the wavefunction without directly choosing a sign by hand.',
            'Phase brush rotates the complex argument locally, which matters for interference and time evolution even when the density barely changes.',
            'Preset states give fast entry points into Gaussian packets, near plane waves, split packets, localized spikes, and oscillator-style states.',
            'Free-particle evolution advances each momentum component by its phase factor, so dispersion unfolds naturally from the spectral content.',
            'Educational overlays condense the main conceptual lenses: Fourier duality, uncertainty, and phase structure.',
          ]}
        />
        <BulletColumn
          title="Best Ways To Explore"
          items={[
            'Compare a wide Gaussian against a tight spike to feel the position-momentum tradeoff immediately.',
            'Switch to phase mode and paint a gradient across an otherwise smooth packet to see momentum shift without changing the overall envelope dramatically.',
            'Reset time and play free-particle evolution after adding structure, then notice how complicated spectra create more dramatic spreading.',
            'Use the double packet or superposition presets to study interference-friendly states with richer internal phase relationships.',
            'Treat the bottom phase strip as a hidden layer of information: density alone never tells the whole story.',
          ]}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan/80">
            Reading The Panels
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-mist">
            <p>
              In position space, cyan traces the real part and coral traces the
              imaginary part. The teal fill is the probability density
              {' '}|psi(x)|^2, and the spectral strip underneath encodes phase.
            </p>
            <p>
              In momentum space, the same complex structure is re-expressed in
              the conjugate basis. The panel is not decorative. It is the
              central conceptual payoff of the app.
            </p>
            <p>
              The numerical values are computed from a finite sampled grid using
              a documented FFT convention, so the app is mathematically serious
              while still optimized for responsiveness and intuition.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-amber/20 bg-[linear-gradient(180deg,rgba(247,198,108,0.09),rgba(247,198,108,0.03))] p-6 shadow-panel backdrop-blur-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber/90">
            Physics Scope
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-mist">
            <p>
              This is a one-dimensional intuition builder with dimensionless
              default units and hbar = 1.
            </p>
            <p>
              The app emphasizes normalization, conjugate representations,
              complex phase, and uncertainty, rather than solving arbitrary
              potentials with research-grade precision.
            </p>
            <p>
              That tradeoff is deliberate: the goal is honest undergraduate
              insight with an instrument-like visual experience.
            </p>
          </div>
          <a
            href="https://supashbhat.github.io"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-amber/25 bg-black/18 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-amber transition hover:bg-black/28"
          >
            Visit Supash Bhat portfolio
          </a>
        </div>
      </div>
    </motion.section>
  );
}
