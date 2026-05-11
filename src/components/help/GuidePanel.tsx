import { motion } from 'framer-motion';

function StatPill({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <article className="rounded-[22px] border border-white/10 bg-[#0b141f]/80 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber/85">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-mist">{body}</p>
    </article>
  );
}

function ListBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-[26px] border border-white/10 bg-[#0a121d]/78 p-5 shadow-panel backdrop-blur-xl">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-mist">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GuidePanel() {
  return (
    <motion.section
      id="help"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_1fr]"
    >
      <section className="rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-coral/20 bg-black/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-coral/90">
            Guided Manual + Notes
          </span>
          <a
            href="https://supashbhat.github.io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/10 bg-[#0a121d]/72 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mist transition hover:text-ink"
          >
            Visit main portfolio
          </a>
        </div>

        <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-ink sm:text-4xl">
          Learn it the way the interface wants to teach it
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-mist">
          This app works best when you treat it like a controls lab for quantum
          intuition. Draw a state, read the reciprocal response, then use the
          overlays and metrics to explain what your eye already noticed.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StatPill
            label="Quick Start"
            body="Choose a preset, drag in position space, and let the live FFT answer back in momentum space."
          />
          <StatPill
            label="Phase Awareness"
            body="Use the phase brush when density alone feels too quiet. Phase changes can shift and interfere without loudly changing the envelope."
          />
          <StatPill
            label="Uncertainty"
            body="Tight packets broaden spectrally. The numeric cards are there to confirm the visual tradeoff, not replace it."
          />
        </div>

        <div className="mt-6 rounded-[24px] border border-amber/15 bg-[linear-gradient(180deg,rgba(255,155,146,0.08),rgba(242,209,152,0.04))] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber/90">
            What to notice
          </p>
          <p className="mt-3 text-sm leading-7 text-mist">
            Wide smooth states tend to produce tight momentum structure. Sharp
            localized marks require a much broader frequency story. Superposed
            packets make the role of internal phase especially visible, and the
            free-particle mode lets that hidden structure bloom over time.
          </p>
        </div>
      </section>

      <div className="grid gap-6">
        <ListBlock
          title="Feature guide"
          items={[
            'Amplitude mode edits the envelope of the complex state directly on the position-space canvas.',
            'Phase mode rotates the local complex argument, which matters for transport, interference, and spectral skew.',
            'Preset states seed clean examples such as Gaussian packets, double packets, localized spikes, and oscillator-style states.',
            'Momentum space is computed live from the sampled wavefunction using the app FFT convention described in the docs.',
            'Educational overlays rotate between duality, uncertainty, and phase so the app can teach while you experiment.',
          ]}
        />
        <ListBlock
          title="Best exploration paths"
          items={[
            'Compare Gaussian Packet and Localized Spike first to lock in the reciprocal tradeoff.',
            'Paint a phase gradient across a broad packet and watch the momentum distribution shift rather than merely widen.',
            'Switch on free-particle evolution after drawing extra structure to see dispersion follow the spectrum you created.',
            'Use the manual as a controls deck: draw, observe, compare, then refine.',
          ]}
        />
      </div>
    </motion.section>
  );
}
