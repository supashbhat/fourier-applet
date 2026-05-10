import { AnimatePresence, motion } from 'framer-motion';
import { IcosahedronMark } from '@/components/brand/IcosahedronMark';

interface IntroSequenceProps {
  visible: boolean;
  onComplete: () => void;
}

const introLines = [
  'Supash Bhat presents',
  'a quantum instrument for painted states',
  'position, momentum, uncertainty, and phase',
];

export function IntroSequence({
  visible,
  onComplete,
}: IntroSequenceProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          onAnimationComplete={(definition) => {
            if (definition === 'exit') {
              onComplete();
            }
          }}
          className="fixed inset-0 z-50 overflow-hidden bg-[#05070d]/96 backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,198,108,0.18),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(88,214,255,0.16),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(62,230,198,0.12),transparent_30%)]" />

          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: ['0%', '0%', '-118%'] }}
            transition={{
              times: [0, 0.72, 1],
              duration: 4.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={onComplete}
            className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <IcosahedronMark className="h-24 w-24 sm:h-32 sm:w-32" />
            </motion.div>

            <div className="mt-10 space-y-4">
              {introLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + index * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    index === 0
                      ? 'font-mono text-[11px] uppercase tracking-[0.38em] text-amber/85'
                      : 'font-display text-2xl tracking-[0.08em] text-ink sm:text-4xl'
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 font-display text-5xl tracking-[0.18em] text-white sm:text-7xl"
            >
              Wavefunction Graffiti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.35 }}
              className="mt-5 max-w-2xl font-mono text-[11px] uppercase tracking-[0.26em] text-cyan/80"
            >
              draw a state. watch reciprocal space answer.
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
