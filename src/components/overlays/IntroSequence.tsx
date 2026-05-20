import { IcosaShellCanvas } from '@/components/brand/IcosaShellCanvas';

interface IntroSequenceProps {
  phase: 'active' | 'done' | null;
}

export function IntroSequence({
  phase,
}: IntroSequenceProps) {
  if (!phase) {
    return null;
  }

  return (
    <div
      className={[
        'wg-intro',
        phase === 'active' ? 'wg-intro--active' : '',
        phase === 'done' ? 'wg-intro--done' : '',
      ].join(' ')}
      aria-hidden="true"
    >
      <div className="wg-intro__core">
        <div className="wg-intro__halo" />
        <div className="wg-intro__orb" />
        <div className="wg-intro__row">
          <div className="intro-mark">
            <IcosaShellCanvas
              variant="intro"
              className="relative z-[1] h-[6.4rem] w-[6.4rem]"
            />
          </div>
          <div className="wg-intro__copy">
            <p className="wg-intro__eyebrow">
              Berkeley Physics 137A Enrichment
            </p>
            <h1 className="wg-intro__title">
              Wavefunction Graffiti
            </h1>
            <p className="wg-intro__subtitle">
              Paint arbitrary quantum states and watch Fourier duality,
              probability, and uncertainty answer back instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
