export default function CTA() {
  return (
    <section id="download" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Klar til at spare på elregningen?</h3>
            <p className="text-blue-50 mt-1">Hent Elguide nu og få det fulde overblik over elpriserne</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition"
            >
              Download i App Store
            </a>
            <span className="text-blue-100 text-sm">Android på vej</span>
          </div>
        </div>
      </div>
    </section>
  );
}
