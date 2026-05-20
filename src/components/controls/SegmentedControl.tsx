interface SegmentedOption<T extends string> {
  value: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedOption<T>[];
}

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
}: SegmentedControlProps<T>) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-[#0a121d]/76 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
      {options.map((option) => {
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={[
              'rounded-full px-4 py-2 text-sm transition',
              active
                ? 'bg-[linear-gradient(135deg,rgba(255,155,146,0.16),rgba(242,209,152,0.16))] text-ink shadow-[0_0_20px_rgba(255,111,127,0.12)]'
                : 'text-mist hover:text-ink',
            ].join(' ')}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
