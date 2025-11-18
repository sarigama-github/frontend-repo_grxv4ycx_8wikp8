import { Clock, Leaf, Bell, LineChart } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Time-for-time priser",
    text: "Se dagens og morgendagens elpriser i klare grafer og lister.",
  },
  {
    icon: LineChart,
    title: "Prisgrafer",
    text: "Følg udviklingen og find de billigste timer.",
  },
  { icon: Bell, title: "Advarsler", text: "Få besked når prisen falder under dit niveau." },
  { icon: Leaf, title: "Spar på strømmen", text: "Forslag til hvornår du bør starte vask, opvask og opladning." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Funktioner der hjælper dig</h2>
        <p className="text-slate-600 text-center mt-2">Designet til danske husstande med variabel elpris</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
