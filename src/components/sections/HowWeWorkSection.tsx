const steps = [
  { num: "01", title: "Заявка", desc: "Оставляете запрос — менеджер связывается в течение часа" },
  { num: "02", title: "Поиск фабрики", desc: "Находим проверенного поставщика под ваш товар и бюджет" },
  { num: "03", title: "Выкуп", desc: "Выкупаем товар без комиссии, контролируем оплату" },
  { num: "04", title: "Контроль на складе", desc: "Проверяем качество и комплектацию на нашем складе в Китае" },
  { num: "05", title: "Доставка", desc: "Отправляем автокарго или белой доставкой с отслеживанием" },
  { num: "06", title: "Груз на вашем складе", desc: "Вы получаете товар с документами — готов к продаже" },
]

export function HowWeWorkSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Как мы работаем
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Шесть шагов от заявки до товара на вашем складе
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] h-0.5 bg-brand-navy/15 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-brand-navy flex flex-col items-center justify-center mb-5 shadow-lg shadow-brand-navy/20 flex-shrink-0">
                  <span className="text-xs font-bold text-white/60 leading-none">{step.num}</span>
                  <span className="text-white text-[10px] font-semibold mt-0.5 px-1 leading-tight">{step.title}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-brand-navy flex flex-col items-center justify-center flex-shrink-0 shadow-md shadow-brand-navy/20">
                  <span className="text-[10px] font-bold text-white/60 leading-none">{step.num}</span>
                  <span className="text-white text-[9px] font-semibold mt-0.5 px-1 leading-tight text-center">{step.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-brand-navy/15 my-2 min-h-[32px]" />
                )}
              </div>
              <div className="pb-6 pt-1">
                <div className="font-display text-base font-bold text-brand-navy mb-1">{step.title}</div>
                <div className="text-sm text-zinc-500 leading-relaxed">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
