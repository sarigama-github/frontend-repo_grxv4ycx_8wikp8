export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {["Hent appen", "Vælg dit område", "Få overblik og spar"].map((title, i) => (
            <div key={title} className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-semibold shadow-lg">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {i === 0 && "Installer på din iPhone. Android kommer senere."}
                {i === 1 && "Vælg Vest- eller Østdanmark (DK1/DK2) og din el-afgift."}
                {i === 2 && "Se priserne time for time, planlæg forbrug og sæt prisalarmer."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
