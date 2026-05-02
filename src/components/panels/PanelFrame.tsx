import { motion } from 'framer-motion';
import { PhysicsHelpButton } from '@/components/help/PhysicsHelp';
import type { ReactNode } from 'react';

interface PanelFrameProps {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  onOpenPhysicsHelp?: () => void;
  children: ReactNode;
}

export function PanelFrame({
  eyebrow,
  title,
  description,
  badge,
  onOpenPhysicsHelp,
  children,
}: PanelFrameProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[32px] border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-xl lg:p-7"
    >
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-coral/80">
            {eyebrow}
          </p>
          <div className="flex flex-wrap gap-2">
            {onOpenPhysicsHelp ? (
              <PhysicsHelpButton
                compact
                label="Physics note"
                onClick={onOpenPhysicsHelp}
              />
            ) : null}
            <div className="rounded-full border border-white/10 bg-[#0a121d]/76 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-amber/85">
              {badge}
            </div>
          </div>
        </div>

        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.05em] text-ink">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-mist">
          {description}
        </p>
      </div>
      {children}
    </motion.section>
  );
}
