import { ArrowUpRight, BriefcaseBusiness, Check, Clock, ExternalLink, Instagram, Mail, Menu, Send, Sparkles, X } from 'lucide-react';
import { createContext, useContext, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { contacts, content, projects } from './content';

const iconMap = { send: Send, instagram: Instagram, mail: Mail };

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: content.en });

function detectLang() {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-lang') : null;
  if (saved === 'en' || saved === 'ru') return saved;
  if (typeof navigator !== 'undefined' && /^ru\b/i.test(navigator.language || '')) return 'ru';
  return 'en';
}

function useT() {
  return useContext(LangContext);
}

function LangToggle() {
  const { lang, setLang } = useT();
  return (
    <div className="lang" role="group" aria-label="Language">
      <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
      <button className={lang === 'ru' ? 'on' : ''} onClick={() => setLang('ru')} aria-pressed={lang === 'ru'}>RU</button>
    </div>
  );
}

const scrollTo = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="hdr">
      <div className="hdr-inner">
        <Link className="logo" to="/" onClick={close}>A<span>.</span></Link>
        <nav className={open ? 'nav open' : 'nav'}>
          <a href="#work" onClick={(e) => { close(); scrollTo('work')(e); }}>{t.nav.work}</a>
          <a href="#pricing" onClick={(e) => { close(); scrollTo('pricing')(e); }}>{t.nav.pricing}</a>
          <a href="#about" onClick={(e) => { close(); scrollTo('about')(e); }}>{t.nav.about}</a>
          <a href="#contact" onClick={(e) => { close(); scrollTo('contact')(e); }}>{t.nav.contact}</a>
          <a className="nav-cta" href="https://t.me/morphlxng" target="_blank" rel="noreferrer" onClick={close}>{t.nav.cta} <Send size={14} /></a>
        </nav>
        <div className="hdr-right">
          <LangToggle />
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}

function ContactChips() {
  return (
    <div className="chips">
      {contacts.map((c) => {
        const Icon = iconMap[c.icon];
        return (
          <a className="chip" key={c.key} href={c.href} target="_blank" rel="noreferrer">
            <Icon size={17} />
            <span><b>{c.label}</b> {c.value}</span>
            <ArrowUpRight size={14} />
          </a>
        );
      })}
    </div>
  );
}

function Home() {
  const { t } = useT();
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow"><Sparkles size={14} /> {t.hero.eyebrow}</p>
          <h1>{t.hero.titleA}<br /><em>{t.hero.titleB}</em></h1>
          <p className="hero-copy">{t.hero.copy}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#pricing" onClick={scrollTo('pricing')}>{t.hero.ctaPricing}</a>
            <a className="btn ghost" href="#work" onClick={scrollTo('work')}>{t.hero.ctaWork} <ArrowUpRight size={16} /></a>
          </div>
          <ContactChips />
        </div>
        <div className="hero-visual">
          <img className="hero-cover" src="/assets/images/hero-cover.png" alt="Portfolio cover — Alexey design" />
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="section-head">
          <p className="eyebrow">{t.pricing.eyebrow}</p>
          <h2>{t.pricing.titleA}<br /><em>{t.pricing.titleB}</em></h2>
          <p className="section-sub">{t.pricing.sub}</p>
        </div>
        <div className="price-grid">
          {t.pricingItems.map((p) => (
            <article className={`price-card${p.featured ? ' featured' : ''}`} key={p.name}>
              {p.featured && <span className="price-badge">{t.pricing.badge}</span>}
              <h3>{p.name}</h3>
              <div className="price-row"><span className="price">{p.price}</span><span className="price-time"><Clock size={13} /> {p.time}</span></div>
              <p className="price-desc">{p.desc}</p>
              <ul>{p.features.map((f) => <li key={f}><Check size={14} /> {f}</li>)}</ul>
              <a className="btn primary wide" href="https://t.me/morphlxng" target="_blank" rel="noreferrer">{t.pricing.cta} <Send size={14} /></a>
            </article>
          ))}
        </div>
        <p className="price-note">{t.pricing.note}</p>
      </section>

      <section className="work" id="work">
        <div className="section-head">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2>{t.work.titleA}<br /><em>{t.work.titleB}</em></h2>
          <p className="section-sub">{t.work.sub}</p>
        </div>
        <div className="work-grid">
          {Object.values(projects).map((p, i) => (
            <Link className={`work-card ${p.accent}`} to={p.route} key={p.slug}>
              <div className="work-cover"><img src={p.cover} alt={p.coverAlt} /><span className="work-index">{String(i + 1).padStart(2, '0')}</span></div>
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
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.titleA}<br /><em>{t.about.titleB}</em></h2>
          </div>
          <div className="about-cols">
            <p className="about-lead">{t.about.lead}</p>
            <p className="about-text">{t.about.text}</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2>{t.contact.titleA}<br /><em>{t.contact.titleB}</em></h2>
        <p className="contact-sub">{t.contact.sub}</p>
        <div className="contact-cards">
          {contacts.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <a className="contact-card" key={c.key} href={c.href} target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon size={20} /></span>
                <span><b>{c.label}</b><i>{c.value}</i></span>
                <ArrowUpRight size={16} />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}

function ProjectPage({ project }) {
  const { t } = useT();
  return (
    <main className={`project ${project.accent}`}>
      <Link className="back" to="/">{t.project.back}</Link>
      <div className="project-head">
        <p className="eyebrow">{project.type} · {project.place}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <div className="project-cover"><img src={project.cover} alt={project.coverAlt} /></div>
      <div className="project-cols">
        <article><span>{t.project.challenge}</span><h2>{project.challenge}</h2></article>
        <article><span>{t.project.solution}</span><h2>{project.solution}</h2></article>
      </div>
      <div className="project-actions">
        <a className="btn primary" href={project.external} target="_blank" rel="noreferrer">{project.externalLabel} <ExternalLink size={15} /></a>
        <Link className="btn ghost" to="/">{t.project.all}</Link>
      </div>
      <p className="project-note"><Check size={14} /> {t.project.note}</p>
    </main>
  );
}

function NotFound() {
  const { t } = useT();
  return (
    <main className="nf">
      <BriefcaseBusiness size={28} />
      <h1>{t.notFound.title}</h1>
      <Link to="/">{t.notFound.back}</Link>
    </main>
  );
}

export default function App() {
  const [lang, setLangState] = useState(detectLang);
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('portfolio-lang', l); } catch { /* ignore */ }
  };
  const t = content[lang] || content.en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta.description);
  }, [lang, t]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
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
          <span>{t.footer.role}</span>
          <span className="ftr-links">
            <a href="https://t.me/morphlxng" target="_blank" rel="noreferrer">t.me/morphlxng</a> · <a href="mailto:nevizhin40@gmail.com">nevizhin40@gmail.com</a>
          </span>
          <span>{t.footer.tagline}</span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.footer.top}</a>
        </footer>
      </div>
    </LangContext.Provider>
  );
}
