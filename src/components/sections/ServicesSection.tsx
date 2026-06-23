import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Search",
    title: "Поиск поставщика",
    desc: "Находим проверенных производителей на фабриках Китая.",
    tag: "Бесплатно с доставкой",
    tagColor: "text-brand-green bg-brand-green/10",
    highlight: false,
  },
  {
    icon: "ShoppingCart",
    title: "Выкуп товара",
    desc: "Выкупаем у любых поставщиков без скрытых наценок.",
    tag: "0% комиссия · от 200 000 ₽",
    tagColor: "text-brand-navy bg-brand-navy/8",
    highlight: false,
  },
  {
    icon: "ShieldCheck",
    title: "Контроль качества",
    desc: "Проверяем товар на 3 складах до отправки в Россию.",
    tag: "3 склада в Китае",
    tagColor: "text-brand-navy bg-brand-navy/8",
    highlight: false,
  },
  {
    icon: "Truck",
    title: "Автокарго",
    desc: "Доставка автотранспортом — быстро и по выгодной цене.",
    tag: "от 0,9$/кг · 15–30 дней",
    tagColor: "text-brand-navy bg-brand-navy/8",
    highlight: false,
  },
  {
    icon: "FileCheck",
    title: "Белая доставка",
    desc: "Официальный ввоз с НДС, контрактом и полным пакетом документов для бухгалтерии.",
    tag: "НОВОЕ",
    tagColor: "text-white bg-brand-green",
    highlight: true,
  },
  {
    icon: "Barcode",
    title: "Фулфилмент Фошань",
    desc: "Маркировка, упаковка и отправка на склады Wildberries и Ozon напрямую из Китая.",
    tag: "WB и Ozon",
    tagColor: "text-brand-navy bg-brand-navy/8",
    highlight: false,
  },
]

export function ServicesSection() {
  return (
    <section id="features" className="bg-zinc-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Наши услуги
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Полный цикл импорта — от поиска товара до маркировки на складе маркетплейса
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-2xl bg-white p-7 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg ${
                service.highlight
                  ? "border-2 border-brand-green shadow-md shadow-brand-green/10"
                  : "border border-zinc-200 hover:border-brand-navy/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy/8">
                  <Icon name={service.icon} size={24} className="text-brand-navy" />
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${service.tagColor}`}
                >
                  {service.tag}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
              </div>
              <a
                href="#cta"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-green transition-colors"
              >
                Узнать подробнее
                <Icon name="ArrowRight" size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
