export function RevolvingBorder() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full [background:conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.9)_90deg,transparent_180deg,transparent_360deg)] animate-[spin_3s_linear_infinite]"
      />
      <span aria-hidden="true" className="absolute inset-[1px] rounded-full bg-zinc-900" />
    </>
  );
}
