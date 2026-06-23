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

function RouteMap() {
  return (
    <div className="relative w-full rounded-2xl bg-brand-navy overflow-hidden" style={{ minHeight: 340 }}>
      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main SVG map */}
      <svg
        viewBox="0 0 500 320"
        className="relative w-full h-full"
        style={{ minHeight: 300 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Russia landmass (simplified) */}
        <path
          d="M60,40 L200,30 L280,50 L300,80 L260,100 L240,130 L200,140 L160,130 L120,140 L80,120 L50,90 Z"
          fill="#1a3f7a"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {/* China landmass (simplified) */}
        <path
          d="M260,130 L340,120 L420,130 L450,160 L440,210 L400,240 L360,250 L310,240 L280,210 L250,180 L240,150 Z"
          fill="#1a3f7a"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {/* Central Asia connecting strip */}
        <path
          d="M200,100 L260,90 L300,100 L310,130 L260,130 L200,140 Z"
          fill="#162e5e"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />

        {/* Animated dashed route line */}
        <path
          id="route"
          d="M 155,100 C 200,85 220,100 255,105 C 290,110 320,135 355,160"
          fill="none"
          stroke="#0F6E56"
          strokeWidth="2.5"
          strokeDasharray="8 5"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Arrow at end of route */}
        <polygon points="355,152 365,162 345,168" fill="#0F6E56" opacity="0.9" />

        {/* Moscow dot */}
        <circle cx="155" cy="100" r="10" fill="#0D2D6B" stroke="#0F6E56" strokeWidth="2.5" />
        <circle cx="155" cy="100" r="4" fill="#0F6E56" />
        {/* Moscow pulse */}
        <circle cx="155" cy="100" r="10" fill="none" stroke="#0F6E56" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" from="10" to="22" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="155" y="82" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Москва</text>
        <text x="155" y="94" textAnchor="middle" fill="white" fontSize="8" opacity="0.6">🇷🇺</text>

        {/* China warehouse cluster */}
        {/* Yiwu */}
        <circle cx="390" cy="175" r="7" fill="#0D2D6B" stroke="#0F6E56" strokeWidth="2" />
        <circle cx="390" cy="175" r="3" fill="#0F6E56" />
        <text x="390" y="163" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Иу</text>

        {/* Guangzhou */}
        <circle cx="355" cy="210" r="7" fill="#0D2D6B" stroke="#0F6E56" strokeWidth="2" />
        <circle cx="355" cy="210" r="3" fill="#0F6E56" />
        <text x="343" y="225" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Гуанчжоу</text>

        {/* Foshan */}
        <circle cx="335" cy="195" r="9" fill="#0F6E56" stroke="white" strokeWidth="2" />
        <circle cx="335" cy="195" r="4" fill="white" />
        <text x="315" y="183" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Фошань</text>
        {/* Foshan glow */}
        <circle cx="335" cy="195" r="9" fill="none" stroke="#0F6E56" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="r" from="9" to="20" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Labels */}
        <text x="130" y="55" fill="white" fontSize="10" opacity="0.5" fontWeight="500">РОССИЯ</text>
        <text x="360" y="135" fill="white" fontSize="10" opacity="0.5" fontWeight="500">КИТАЙ</text>

        {/* Route label */}
        <rect x="195" y="78" width="110" height="18" rx="9" fill="#0F6E56" fillOpacity="0.2" />
        <text x="250" y="90" textAnchor="middle" fill="#0F6E56" fontSize="9" fontWeight="600">15–30 дней · Автокарго</text>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-brand-green inline-block" style={{ borderTop: '2px dashed #0F6E56' }} />
            <span className="text-white/60 text-xs">Маршрут доставки</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-brand-green inline-block" />
            <span className="text-white/60 text-xs">Наш склад</span>
          </div>
        </div>
        <span className="text-white/40 text-[10px]">Китай → Россия</span>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left text */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-6">
            Найдём товар в Китае и организуем поставку{" "}
            <span className="text-brand-green">под ключ</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-xl mb-8 leading-relaxed">
            Белая доставка, карго, ВЭД. Один партнёр для всего цикла.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
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

          {/* Cards 2x2 under buttons */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map((card) => (
              <div
                key={card.label}
                className="bg-brand-navy rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={card.icon} size={18} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white leading-tight">
                    {card.value}
                  </div>
                  <div className="text-[11px] text-white/60 leading-tight mt-0.5">{card.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Route map */}
        <div className="w-full">
          <RouteMap />
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
