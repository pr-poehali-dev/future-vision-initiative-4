import { useState } from "react"
import Icon from "@/components/ui/icon"

export function ContactFormSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-2xl bg-brand-navy overflow-hidden grid lg:grid-cols-2">
          {/* Left info */}
          <div className="p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs font-semibold mb-6">
                <Icon name="Zap" size={13} />
                Бесплатно и без обязательств
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Аудит закупок — бесплатно
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Расскажите о вашем товаре — мы проведём аудит текущих закупок, найдём выгодных поставщиков и предложим лучшую схему доставки.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              {[
                "Анализ вашего товара и рынка в Китае",
                "Сравнение цен у 3–5 поставщиков",
                "Расчёт стоимости доставки",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <Icon name="Check" size={16} className="text-brand-green flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white p-10 lg:p-14 flex flex-col justify-center">
            {sent ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCircle" size={32} className="text-brand-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">Заявка отправлена!</h3>
                <p className="text-zinc-500 text-sm">Менеджер свяжется с вами в течение 1 часа в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors flex items-center justify-center gap-2"
                >
                  Аудит закупок — бесплатно
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="text-center text-xs text-zinc-400">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
