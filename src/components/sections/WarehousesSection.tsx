import Icon from "@/components/ui/icon"

const cities = ["Иу", "Гуанчжоу", "Фошань"]

const foshanFeatures = [
  { icon: "Boxes", title: "Фулфилмент", desc: "Принимаем, сортируем и храним ваши грузы" },
  { icon: "Barcode", title: "Маркировка WB и Ozon", desc: "Этикетки, упаковка под требования маркетплейсов" },
  { icon: "Warehouse", title: "Хранение", desc: "Краткосрочное и долгосрочное хранение на складе" },
  { icon: "Camera", title: "Фотоотчёт", desc: "Фото каждой партии до и после проверки качества" },
]

export function WarehousesSection() {
  return (
    <section className="bg-zinc-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Наши склады в Китае
          </h2>
          <p className="text-zinc-500 text-lg">
            3 стратегических точки в главных производственных регионах
          </p>
        </div>

        {/* City badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map((city) => (
            <div
              key={city}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors ${
                city === "Фошань"
                  ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/25"
                  : "bg-white border border-zinc-200 text-zinc-600"
              }`}
            >
              <Icon name="MapPin" size={16} className={city === "Фошань" ? "text-brand-green" : "text-zinc-400"} />
              {city}
            </div>
          ))}
        </div>

        {/* Foshan detail block */}
        <div className="rounded-2xl border-2 border-brand-navy bg-white overflow-hidden">
          <div className="bg-brand-navy px-7 py-5 flex items-center gap-3">
            <Icon name="Star" size={20} className="text-brand-green" />
            <span className="font-display text-lg font-bold text-white">Склад Фошань — главный хаб</span>
            <span className="ml-auto inline-flex items-center px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold">
              Фулфилмент
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            {foshanFeatures.map((f) => (
              <div key={f.title} className="p-7 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/8 flex items-center justify-center">
                  <Icon name={f.icon} size={20} className="text-brand-navy" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-brand-navy mb-1">{f.title}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
