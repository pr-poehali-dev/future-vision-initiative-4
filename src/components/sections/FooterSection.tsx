import Icon from "@/components/ui/icon"

const navLinks = [
  { href: "#features", label: "Услуги" },
  { href: "#delivery", label: "Доставка" },
  { href: "#white", label: "Белая доставка" },
  { href: "#ved", label: "ВЭД" },
  { href: "#about", label: "О нас" },
  { href: "#cases", label: "Кейсы" },
]

export function FooterSection() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + description */}
          <div className="flex flex-col gap-5">
            <a href="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white font-display text-sm font-bold">
                C2R
              </span>
              <span className="font-display text-lg font-bold tracking-tight">C2R LOGISTICS</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Импорт из Китая для бизнеса. Поиск поставщика, выкуп, карго и белая доставка под ключ.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="Users" size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Навигация</div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Контакты</div>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+74952555282" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                  <Icon name="Phone" size={15} className="text-brand-green flex-shrink-0" />
                  +7 (495) 255-52-82
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                  <Icon name="Send" size={15} className="text-brand-green flex-shrink-0" />
                  Telegram-канал
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={15} className="text-brand-green flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                  <Icon name="Users" size={15} className="text-brand-green flex-shrink-0" />
                  ВКонтакте
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Icon name="Clock" size={15} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span>Пн–Пт 10:00–19:00, Москва</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <span>© C2R Logistics. Все права защищены.</span>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </footer>
  )
}
