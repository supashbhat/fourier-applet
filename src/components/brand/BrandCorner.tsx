import { motion } from 'framer-motion';
import { IcosahedronMark } from '@/components/brand/IcosahedronMark';

interface BrandCornerProps {
  onReplayIntro: () => void;
}

export function BrandCorner({ onReplayIntro }: BrandCornerProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.5 }}
      className="fixed right-4 top-4 z-40 flex items-start gap-3 sm:right-6 sm:top-6"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        className="hidden sm:block"
      >
        <IcosahedronMark className="h-14 w-14" />
      </motion.div>

      <div className="rounded-[24px] border border-white/10 bg-black/35 px-4 py-3 shadow-panel backdrop-blur-xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber/90">
          Supash Bhat
        </p>
        <a
          href="https://supashbhat.github.io"
          target="_blank"
          rel="noreferrer"
          className="mt-2 block text-sm text-ink transition hover:text-cyan"
        >
          Main portfolio
        </a>
        <button
          type="button"
          onClick={onReplayIntro}
          className="mt-3 rounded-full border border-amber/20 bg-amber/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-amber transition hover:bg-amber/16"
        >
          Replay intro
        </button>
      </div>
    </motion.aside>
  );
}
