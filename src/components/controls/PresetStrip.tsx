import { PhysicsHelpButton } from '@/components/help/PhysicsHelp';
import type { PresetDefinition, PresetId } from '@/types/quantum';

interface PresetStripProps {
  presets: PresetDefinition[];
  activePresetId: PresetId;
  onSelect: (presetId: PresetId) => void;
  onOpenPhysicsHelp: () => void;
}

export function PresetStrip({
  presets,
  activePresetId,
  onSelect,
  onOpenPhysicsHelp,
}: PresetStripProps) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-coral/80">
            Signal Library
          </p>
          <p className="mt-1 text-sm text-mist">
            Load a prepared state, then tune it like a quantum control sketch.
          </p>
        </div>
        <PhysicsHelpButton
          compact
          label="What these teach"
          onClick={onOpenPhysicsHelp}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {presets.map((preset) => {
          const active = preset.id === activePresetId;

          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelect(preset.id)}
              className={[
                'rounded-[26px] border px-4 py-4 text-left transition duration-300',
                active
                  ? 'border-coral/40 bg-[linear-gradient(135deg,rgba(255,111,127,0.12),rgba(255,194,182,0.06))] shadow-[0_0_24px_rgba(255,111,127,0.12)]'
                  : 'border-white/10 bg-white/[0.055] hover:border-white/20 hover:bg-white/[0.08]',
              ].join(' ')}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                {preset.badge}
              </p>
              <p className="mt-2 font-display text-lg text-ink">
                {preset.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-mist">
                {preset.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
