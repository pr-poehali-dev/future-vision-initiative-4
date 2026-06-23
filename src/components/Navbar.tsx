import Icon from "@/components/ui/icon"

const navLinks = [
  { href: "#features", label: "Услуги" },
  { href: "#delivery", label: "Доставка" },
  { href: "#white", label: "Белая доставка" },
  { href: "#ved", label: "ВЭД" },
  { href: "#about", label: "О нас" },
  { href: "#cases", label: "Кейсы" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="#" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="Send" size={15} />
              <span>Telegram</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="MessageCircle" size={15} />
              <span>WhatsApp</span>
            </a>
            <a href="tel:+74952555282" className="flex items-center gap-1.5 font-medium hover:text-white/80 transition-colors">
              <Icon name="Phone" size={15} />
              <span>+7 (495) 255-52-82</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-green text-white text-xs font-semibold">
              <Icon name="Package" size={13} />
              Работаем от 100 кг
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Icon name="Clock" size={15} />
              Пн–Пт 10:00–19:00
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Icon name="MapPin" size={15} />
              Москва
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <a href="/" className="flex items-center gap-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-navy text-white font-display text-sm">
              C2R
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-brand-navy">
              C2R LOGISTICS
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-zinc-600 hover:text-brand-navy"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
          >
            Аудит закупок
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}
