import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PresetStrip } from '@/components/controls/PresetStrip';
import { GuidePanel } from '@/components/help/GuidePanel';
import {
  PhysicsHelpSheet,
  type PhysicsHelpTopic,
} from '@/components/help/PhysicsHelp';
import { InstrumentDock } from '@/components/layout/InstrumentDock';
import { TopBar } from '@/components/layout/TopBar';
import { IntroSequence } from '@/components/overlays/IntroSequence';
import { MomentumPanel } from '@/components/panels/MomentumPanel';
import { PositionPanel } from '@/components/panels/PositionPanel';
import { useWavefunctionInstrument } from '@/lib/state/useWavefunctionInstrument';

export function AppShell() {
  const instrument = useWavefunctionInstrument();
  const helpRef = useRef<HTMLDivElement | null>(null);
  const [introPhase, setIntroPhase] = useState<'active' | 'done' | null>('active');
  const [physicsHelpTopic, setPhysicsHelpTopic] = useState<PhysicsHelpTopic | null>(null);

  useEffect(() => {
    const doneTimer = window.setTimeout(() => {
      setIntroPhase('done');
    }, 2600);
    const clearTimer = window.setTimeout(() => {
      setIntroPhase(null);
    }, 3020);

    return () => {
      window.clearTimeout(doneTimer);
      window.clearTimeout(clearTimer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      'wg-intro-visible',
      introPhase !== null,
    );

    return () => {
      document.body.classList.remove('wg-intro-visible');
    };
  }, [introPhase]);

  const openHelp = () => {
    helpRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-obsidian text-ink">
      <IntroSequence phase={introPhase} />
      <PhysicsHelpSheet
        topic={physicsHelpTopic}
        onClose={() => setPhysicsHelpTopic(null)}
      />
      <div className="pointer-events-none absolute inset-0 bg-haze opacity-90" />
      <div className="pointer-events-none absolute left-[-10%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-coral/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-[150px]" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8"
      >
        <TopBar
          sampleCount={instrument.parameters.sampleCount}
          domain={instrument.parameters.domain}
          hbar={instrument.parameters.hbar}
          onOpenHelp={openHelp}
          onOpenPhysicsHelp={() => setPhysicsHelpTopic('overview')}
        />

        <PresetStrip
          presets={instrument.presets}
          activePresetId={instrument.presetId}
          onSelect={instrument.loadPreset}
          onOpenPhysicsHelp={() => setPhysicsHelpTopic('presets')}
        />

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <PositionPanel
            wavefunction={instrument.displayState}
            density={instrument.positionDensity}
            phase={instrument.positionPhase}
            drawMode={instrument.drawMode}
            onPaint={instrument.paintWavefunction}
            onOpenPhysicsHelp={() => setPhysicsHelpTopic('position-space')}
          />

          <MomentumPanel
            momentum={instrument.momentum}
            wavefunction={instrument.displayState}
            parameters={instrument.parameters}
            onOpenPhysicsHelp={() => setPhysicsHelpTopic('momentum-space')}
          />
        </section>

        <InstrumentDock
          drawMode={instrument.drawMode}
          onDrawModeChange={instrument.setDrawMode}
          hamiltonian={instrument.hamiltonian}
          onHamiltonianChange={(mode) => {
            instrument.setHamiltonian(mode);
            instrument.setIsPlaying(false);
            instrument.setTime(0);
          }}
          isPlaying={instrument.isPlaying}
          onTogglePlayback={() =>
            instrument.setIsPlaying((current) => !current)
          }
          onResetTime={() => {
            instrument.setTime(0);
            instrument.setIsPlaying(false);
          }}
          brushRadius={instrument.brushRadius}
          onBrushRadiusChange={instrument.setBrushRadius}
          brushStrength={instrument.brushStrength}
          onBrushStrengthChange={instrument.setBrushStrength}
          overlayConcept={instrument.overlayConcept}
          onOverlayConceptChange={instrument.setOverlayConcept}
          observables={instrument.observables}
          time={instrument.time}
          onOpenPhysicsHelp={setPhysicsHelpTopic}
        />

        <div ref={helpRef}>
          <GuidePanel />
        </div>
      </motion.main>
    </div>
  );
}
