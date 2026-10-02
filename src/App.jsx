import { ArrowUpRight, BriefcaseBusiness, Check, Clock, ExternalLink, Instagram, Mail, Menu, Send, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const contacts = [
  { key: 'telegram', label: 'Telegram', value: '@morphlxng', href: 'https://t.me/morphlxng', icon: Send },
  { key: 'instagram', label: 'Instagram', value: '@morphlxng', href: 'https://instagram.com/morphlxng', icon: Instagram },
  { key: 'email', label: 'Email', value: 'nevizhin40@gmail.com', href: 'mailto:nevizhin40@gmail.com', icon: Mail },
];

const pricing = [
  { name: 'Landing page', price: 'от 15 000 ₽', time: '5–7 дней', featured: false, desc: 'Одностраничный сайт: услуги, цены, мастера и кнопка записи. Идеально для барбершопа или студии.', features: ['Дизайн под ваш бренд', 'Адаптив под телефон', 'Форма или кнопка записи', 'Подключение домена'] },
  { name: 'Многостраничный сайт', price: 'от 30 000 ₽', time: '10–14 дней', featured: true, desc: 'Полноценный сайт с каталогом услуг, страницами мастеров, галереей работ и онлайн-записью.', features: ['Всё из Landing', 'Страницы услуг и мастеров', 'Онлайн-запись (YClients / Dikidi)', 'SEO-база и аналитика', 'Обучение: как менять контент'] },
  { name: 'Дизайн-концепт', price: 'от 8 000 ₽', time: '3–5 дней', featured: false, desc: 'Дизайн главной страницы без вёрстки — увидеть свой будущий сайт до старта разработки.', features: ['Дизайн-макет главной', 'Мобильная версия', '2 раунда правок', 'Файлы в Figma'] },
  { name: 'Запись и настройка', price: 'от 5 000 ₽', time: '1–2 дня', featured: false, desc: 'Подключение онлайн-записи и базовой настройки к уже работающему сайту или профилю.', features: ['Подключение виджета записи', 'Настройка уведомлений', 'Привязка домена и почты'] },
];

const projects = {
  prestige: { slug: 'prestige', title: 'Prestige Barber Co', type: 'Booking-first website concept', place: 'San Antonio, USA', accent: 'copper', cover: '/assets/images/prestige-cover.png', coverAlt: 'Premium dark editorial barber concept cover with copper accents', route: '/projects/prestige', short: 'Luxury grooming, made easy to book.', summary: 'A premium, mobile-first concept that replaces a temporary website with a clear service overview, location details and a direct booking path.', challenge: 'The public site was marked “Website Under Construction”, leaving the first impression unfinished.', solution: 'A confident landing page with clear services, contact details and a single next step: book an appointment.', external: 'https://booksy.com/en-us/1610801_prestige-barber-co_barber-shop_134789_san-antonio', externalLabel: 'Open booking flow', services: ['Classic cut', 'Fresh fade', 'Beard trim', 'Kids cuts'] },
  'day-hair': { slug: 'day-hair', title: 'Day Hair Habit', type: 'Bali salon experience concept', place: 'Uluwatu & Ubud, Bali', accent: 'green', cover: '/assets/images/day-hair-cover.png', coverAlt: 'Warm sand and botanical green editorial salon concept cover', route: '/projects/day-hair', short: 'A good hair day, wherever you are.', summary: 'A warm salon experience that helps visitors choose a location, find a treatment and move to booking without getting lost in a link hub.', challenge: 'The Instagram path relies on Linktree and multiple booking destinations for different Bali locations.', solution: 'A calm visual flow: choose Uluwatu or Ubud, discover a treatment, then continue to the existing booking channel.', external: 'https://linktr.ee/dayhairhabit', externalLabel: 'Open booking links', services: ['Hair cut', 'Styling', 'Coloring', 'Keratin', 'Scalp treatment'] },
  pitstop: { slug: 'pitstop', title: 'Pitstop Barbershop', type: 'Motorsport booking concept', place: 'Riverside, Nairobi', accent: 'red', cover: '/assets/images/pitstop-cover.png', coverAlt: 'Graphite and racing red editorial motorsport barber concept cover', route: '/projects/pitstop', short: 'Sharp looks. Fast pit stops.', summary: 'A motorsport-inspired concept that keeps the pit-crew identity while making service selection and booking more direct on mobile.', challenge: 'The brand has a strong idea, but a long service flow can make the first booking decision feel heavy.', solution: 'A faster pit-lane path: choose the service, understand the experience and enter the booking flow.', external: 'https://pitstopbarbershop.co.ke/', externalLabel: 'Open current site', services: ['The Main Race', 'Bodywork', 'Wheel service', 'The Chicane'] },
};

const scrollTo = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="hdr">
      <div className="hdr-inner">
        <Link className="logo" to="/" onClick={close}>A<span>.</span></Link>
        <nav className={open ? 'nav open' : 'nav'}>
          <a href="#work" onClick={(e) => { close(); scrollTo('work')(e); }}>Работы</a>
          <a href="#pricing" onClick={(e) => { close(); scrollTo('pricing')(e); }}>Цены</a>
          <a href="#about" onClick={(e) => { close(); scrollTo('about')(e); }}>Обо мне</a>
          <a href="#contact" onClick={(e) => { close(); scrollTo('contact')(e); }}>Контакты</a>
          <a className="nav-cta" href="https://t.me/morphlxng" target="_blank" rel="noreferrer" onClick={close}>Написать <Send size={14} /></a>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Меню">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function ContactChips() {
  return (
    <div className="chips">
      {contacts.map((c) => (
        <a className="chip" key={c.key} href={c.href} target="_blank" rel="noreferrer">
          <c.icon size={17} />
          <span><b>{c.label}</b> {c.value}</span>
          <ArrowUpRight size={14} />
        </a>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow"><Sparkles size={14} /> Независимый веб-дизайнер</p>
          <h1>Сайты, которые<br /><em>продают за вас.</em></h1>
          <p className="hero-copy">Делаю понятные сайты с характером для барбершопов, салонов и локального бизнеса. Запись в два клика — вместо «позвоните нам».</p>
          <div className="hero-actions">
            <a className="btn primary" href="#pricing" onClick={scrollTo('pricing')}>Смотреть цены</a>
            <a className="btn ghost" href="#work" onClick={scrollTo('work')}>Работы <ArrowUpRight size={16} /></a>
          </div>
          <ContactChips />
        </div>
        <div className="hero-visual">
          <img className="hero-cover" src="/assets/images/hero-cover.png" alt="Обложка портфолио — Alexey design" />
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="section-head">
          <p className="eyebrow">Услуги и цены</p>
          <h2>Прозрачно.<br /><em>Без сюрпризов в счёте.</em></h2>
          <p className="section-sub">Фиксированная цена до старта работ. Предоплата 50%, остальное — после приёмки.</p>
        </div>
        <div className="price-grid">
          {pricing.map((p) => (
            <article className={`price-card${p.featured ? ' featured' : ''}`} key={p.name}>
              {p.featured && <span className="price-badge">Популярный выбор</span>}
              <h3>{p.name}</h3>
              <div className="price-row"><span className="price">{p.price}</span><span className="price-time"><Clock size={13} /> {p.time}</span></div>
              <p className="price-desc">{p.desc}</p>
              <ul>{p.features.map((f) => <li key={f}><Check size={14} /> {f}</li>)}</ul>
              <a className="btn primary wide" href="https://t.me/morphlxng" target="_blank" rel="noreferrer">Обсудить в Telegram <Send size={14} /></a>
            </article>
          ))}
        </div>
        <p className="price-note">Не нашли свой случай? Напишите — соберу индивидуальное предложение под вашу задачу.</p>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <p className="eyebrow">Избранные концепты</p>
          <h2>Работы, которые<br /><em>говорят сами.</em></h2>
          <p className="section-sub">Self-initiated концепты: как я вижу сайты для сервисного бизнеса.</p>
        </div>
        <div className="work-grid">
          {Object.values(projects).map((p) => (
            <Link className={`work-card ${p.accent}`} to={p.route} key={p.slug}>
              <div className="work-cover"><img src={p.cover} alt={p.coverAlt} /><span className="work-index">{p.slug === 'prestige' ? '01' : p.slug === 'day-hair' ? '02' : '03'}</span></div>
              <div className="work-meta"><span>{p.type}</span><ArrowUpRight size={17} /></div>
              <h3>{p.title}</h3>
              <p>{p.place}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-inner">
          <div>
            <p className="eyebrow">Обо мне</p>
            <h2>Ясность прежде всего.<br /><em>Характер — всегда.</em></h2>
          </div>
          <div className="about-cols">
            <p className="about-lead">Я Алексей — независимый веб-дизайнер. Работаю с сервисным бизнесом: барбершопы, салоны, студии, которым нужен сайт, работающий так же усердно, как они сами.</p>
            <p className="about-text">Мои работы — между ясностью и характером. Интерфейс остаётся очевидным и быстрым, а бренд получает достаточно индивидуальности, чтобы запомниться. Никаких шаблонов «как у всех».</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Открыт для проектов</p>
        <h2>Есть идея?<br /><em>Напишите первым.</em></h2>
        <p className="contact-sub">Расскажите, что строите и что должно работать лучше. Отвечу с конкретным направлением в течение дня.</p>
        <div className="contact-cards">
          {contacts.map((c) => (
            <a className="contact-card" key={c.key} href={c.href} target="_blank" rel="noreferrer">
              <span className="contact-icon"><c.icon size={20} /></span>
              <span><b>{c.label}</b><i>{c.value}</i></span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectPage({ project }) {
  return (
    <main className={`project ${project.accent}`}>
      <Link className="back" to="/">← Назад к работам</Link>
      <div className="project-head">
        <p className="eyebrow">{project.type} · {project.place}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <div className="project-cover"><img src={project.cover} alt={project.coverAlt} /></div>
      <div className="project-cols">
        <article><span>Задача</span><h2>{project.challenge}</h2></article>
        <article><span>Решение</span><h2>{project.solution}</h2></article>
      </div>
      <div className="project-actions">
        <a className="btn primary" href={project.external} target="_blank" rel="noreferrer">{project.externalLabel} <ExternalLink size={15} /></a>
        <Link className="btn ghost" to="/">Все работы</Link>
      </div>
      <p className="project-note"><Check size={14} /> Self-initiated концепт — не официальный кейс клиента.</p>
    </main>
  );
}

function NotFound() {
  return (
    <main className="nf">
      <BriefcaseBusiness size={28} />
      <h1>Страница не найдена</h1>
      <Link to="/">Вернуться в портфолио</Link>
    </main>
  );
}

export default function App() {
  return (
    <div className="shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/prestige" element={<ProjectPage project={projects.prestige} />} />
        <Route path="/projects/day-hair" element={<ProjectPage project={projects['day-hair']} />} />
        <Route path="/projects/pitstop" element={<ProjectPage project={projects.pitstop} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="ftr">
        <span>Alexey — web & product design</span>
        <span className="ftr-links">
          <a href="https://t.me/morphlxng" target="_blank" rel="noreferrer">t.me/morphlxng</a> · <a href="mailto:nevizhin40@gmail.com">nevizhin40@gmail.com</a>
        </span>
        <span>Концепты · 2026</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Наверх ↑</a>
      </footer>
    </div>
  );
}
