interface LogoTypeProps {
  className?: string;
}

export default function LogoType({ className = '' }: LogoTypeProps) {
  return (
    <span
      aria-hidden='true'
      className={`relative grid h-full w-full place-items-center overflow-hidden rounded-[inherit] border border-white/5 bg-[linear-gradient(140deg,rgba(31,31,33,0.92),rgba(10,10,11,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_26px_rgba(0,0,0,0.45)] ${className}`}
    >
      <span className='pointer-events-none absolute inset-[5px] rounded-xl border border-white/10' />
      <span className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.14),transparent_54%)]' />
      <span className='font-Space_Grotesk relative z-10 text-[31px] leading-none font-black tracking-[-0.08em] text-transparent italic [background:linear-gradient(180deg,var(--near-white),var(--light-gray-2))] bg-clip-text select-none'>
        S
      </span>
    </span>
  );
}