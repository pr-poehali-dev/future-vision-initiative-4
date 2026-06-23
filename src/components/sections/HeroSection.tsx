import Icon from "@/components/ui/icon"

const cards = [
  { value: "от 100 кг", label: "минимальный объём", icon: "Package" },
  { value: "15–30 дн", label: "автодоставка", icon: "Truck" },
  { value: "БЕЛАЯ", label: "доставка с документами", icon: "FileCheck" },
  { value: "3 склада", label: "в Китае", icon: "Warehouse" },
]

const stats = [
  { value: "200+", label: "клиентов" },
  { value: "3", label: "склада" },
  { value: "0%", label: "комиссия" },
  { value: "15–30", label: "дней" },
]

export function HeroSection() {
  return (
    <section className="bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-6">
            Найдём товар в Китае и организуем поставку{" "}
            <span className="text-brand-green">под ключ</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-xl mb-8 leading-relaxed">
            Белая доставка, карго, ВЭД. Один партнёр для всего цикла.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
            >
              Аудит закупок — бесплатно
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
            >
              <Icon name="Send" size={18} />
              Написать в Telegram
            </a>
          </div>
        </div>

        {/* Right cards 2x2 */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-brand-navy rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
            >
              <Icon name={card.icon} size={28} className="text-brand-green mb-4" />
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-white">
                  {card.value}
                </div>
                <div className="text-sm text-white/70 mt-1">{card.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center pt-4 md:pt-0 first:pt-0">
              <div className="font-display text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
