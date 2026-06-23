import Icon from "@/components/ui/icon"

const usps = [
  {
    icon: "Package",
    value: "от 100 кг",
    desc: "Работаем только с серьёзными объёмами",
  },
  {
    icon: "Clock",
    value: "15–30 дн",
    desc: "Предсказуемые сроки, статус груза онлайн",
  },
  {
    icon: "FileCheck",
    value: "Белая",
    desc: "Официальный ввоз с НДС и контрактом",
  },
  {
    icon: "Warehouse",
    value: "3 склада",
    desc: "Иу, Гуанчжоу, Фошань",
  },
]

export function UspSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.value}
              className="group rounded-2xl border border-zinc-200 bg-white p-7 hover:border-brand-navy hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy/8 mb-5">
                <Icon name={usp.icon} size={24} className="text-brand-navy" />
              </div>
              <div className="font-display text-2xl font-bold text-brand-navy mb-2">
                {usp.value}
              </div>
              <div className="text-sm text-zinc-500 leading-relaxed">{usp.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
