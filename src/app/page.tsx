export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black">
      <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
        <h1 className="text-3xl font-bold tracking-tight">Servus, Next.js + Tailwind! 👋</h1>
        <p className="mt-3 text-white/80">Wenn des hier hübsch ausschaut, dann läuft Tailwind sauber.</p>
        <button className="mt-6 rounded-xl px-4 py-2 font-medium ring-1 ring-white/25 hover:bg-white/10">
          Passt scho!
        </button>
      </div>
    </main>
  );
}
