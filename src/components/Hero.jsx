export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(800px_400px_at_50%_-100px,theme(colors.blue.300),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Din smarte el-pris guide – altid overblik i lommen
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Elguide gør det nemt at følge elpriser time for time, planlægge forbrug og spare penge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">Hent til iPhone</a>
              <a href="#features" className="px-5 py-3 rounded-xl border border-slate-300 text-slate-800 font-medium hover:border-slate-400 transition">Se funktioner</a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Gratis at bruge • Ingen konto nødvendig</p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
            <img
              src="/phone-mock.png"
              alt="Elguide app skærm"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
