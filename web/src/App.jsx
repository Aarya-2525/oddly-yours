import { Fragment } from 'react';
import logoMark from './assets/logo.svg';
import packaging from './assets/packaging.png';
import Confetti from './components/Confetti';
import './App.css';
import {
  sectionCards, logoRules, doNotAttempt, logoJourney, palette, neutrals,
  voiceSliders, toneComparisons, toneExamples, weAreNot,
  audiences, audienceLikes, packagingCallouts,
  storySteps, brandRule, coreValues, oddinaryTraits,
  personalityAre, personalityAreNot, footerColumns,
} from './data/content';

function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__brand">
        <img src={logoMark} alt="Oddly Yours" className="header__logo" />
        <span className="header__wordmark">Brand Manual</span>
      </a>
      <div className="header__actions">
        <nav className="header__nav">
          <a href="#story" className="header__link">Brand Story</a>
          <a href="#personality" className="header__link">Personality</a>
          <a href="#vision" className="header__link">Vision &amp; Mission</a>
        </nav>
        <a href="mailto:hello@oddlyyours.com" className="btn btn--outline btn--sm">Contact</a>
        <a href="/oddly-yours-brand-manual.pdf" download className="btn btn--lavender btn--sm">Download</a>
        <a href="#packaging" className="btn btn--mint btn--sm">Get the kit</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title">
            Odd Because<br />Ordinary<br />Isn’t{' '}
            <span className="hero__circled">Our</span>{' '}
            Thing.
          </h1>
          <p className="hero__sub">The complete guide to being<br />gloriously &amp; unapologetically odd.</p>
          <p className="hero__manual-sub">Six Sections.<br />Zero Boring Bits.</p>
          <a href="#sections" className="hero__scroll">scroll to explore ↓</a>
        </div>
        <div className="hero__visual">
          <Confetti />
          <img src={logoMark} alt="Oddly Yours" className="hero__logo" />
        </div>
      </div>
    </section>
  );
}

function SectionOverview() {
  return (
    <section id="sections" className="overview">
      <h2 className="overview__title">Welcome to Oddly Yours brand world</h2>
      <p className="overview__hint">Tap a card to jump straight there.</p>
      <div className="overview__grid">
        {sectionCards.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="overview__card">
            <span className="overview__num">{c.num}</span>
            <h3 className="overview__card-title">{c.title}</h3>
            <p className="overview__card-blurb">{c.blurb}</p>
            <span className="overview__card-link">View section →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
}

function LogoSection() {
  return (
    <section id="logo" className="section section--tint-lavender">
      <SectionHeading eyebrow="01 / Logo" title="Our face. Handle with care." />
      <p className="section__lede">
        Oddly Yours in a nutshell — the double “d” in oddly forms the eyes, the extended “y” forms
        the smile and the “o” in yours is the tongue forming a hidden face which is impossible to
        take too seriously. Here's how to keep it looking like itself and not like it fell asleep
        on the copier.
      </p>
      <div className="logo-showcase">
        <img src={logoMark} alt="Oddly Yours logo" className="logo-showcase__img" />
        <ul className="logo-rules">
          {logoRules.map((r) => (
            <li key={r.title}>
              <strong>{r.title}.</strong> {r.body}
            </li>
          ))}
        </ul>
      </div>
      <div className="do-not">
        <h3 className="do-not__title">Do not attempt</h3>
        <ul className="do-not__list">
          {doNotAttempt.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>
      <div className="logo-journey">
        <h3 className="logo-journey__title">Logo Journey</h3>
        <p className="logo-journey__sub">The face was there<br />all along.</p>
        <div className="logo-journey__strip">
          {logoJourney.map((step, i) => (
            <Fragment key={step.label}>
              <div className="logo-journey__item">
                <div className="logo-journey__card">
                  {step.image ? (
                    <img src={logoMark} alt="Oddly Yours" className="logo-journey__logo" />
                  ) : (
                    step.lines.map((line) => <span key={line}>{line}</span>)
                  )}
                </div>
                <span className="logo-journey__label">{step.label}</span>
              </div>
              {i < logoJourney.length - 1 && <span className="logo-journey__arrow">→</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ColorSection() {
  return (
    <section id="color" className="section">
      <SectionHeading eyebrow="02 / Color Palette" title="Pastel, but make it loud." />
      <p className="section__lede">
        Soft on the surface, unmistakable in a room. Every product, every page picks from this
        exact set — no exceptions, no beige.
      </p>
      <div className="swatch-grid">
        {palette.map((c) => (
          <div key={c.name} className="swatch" style={{ background: `var(${c.varName})` }}>
            <span className="swatch__name">{c.name}</span>
            <span className="swatch__hex">{c.hex}</span>
          </div>
        ))}
      </div>
      <div className="swatch-grid swatch-grid--neutrals">
        {neutrals.map((c) => (
          <div
            key={c.name}
            className="swatch swatch--neutral"
            style={{ background: `var(${c.varName})`, color: c.name === 'Cream Canvas' ? 'var(--text-primary)' : 'var(--text-on-ink)' }}
          >
            <span className="swatch__name">{c.name}</span>
            <span className="swatch__hex">{c.hex}</span>
          </div>
        ))}
      </div>
      <div className="callout">
        <strong>The Two-Colour Rule.</strong> Pick one loud colour and one quiet one per layout.
        Two loud colours together is a party. Four is a headache.
      </div>
    </section>
  );
}

function TypographySection() {
  return (
    <section id="typography" className="section section--tint-mint">
      <SectionHeading eyebrow="03 / Typography" title="Fonts have personalities too." />
      <div className="type-specimen">
        <span className="eyebrow">Primary — Headings</span>
        <h3 className="type-specimen__name" style={{ fontFamily: 'var(--font-display)' }}>Fredoka</h3>
        <p className="type-specimen__glyphs" style={{ fontFamily: 'var(--font-display)' }}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
        <p className="type-specimen__body">
          Rounded, bold and friendly — used for major headings, product names, CTAs and playful
          quotes. It reflects the fun, quirky personality of Oddly Yours.
        </p>
      </div>
      <div className="type-specimen">
        <span className="eyebrow">Secondary — Body</span>
        <h3 className="type-specimen__name" style={{ fontFamily: 'var(--font-body)' }}>Poppins</h3>
        <p className="type-specimen__glyphs" style={{ fontFamily: 'var(--font-body)' }}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
        <p className="type-specimen__body">
          Clean and modern — used for body copy, descriptions, navigation and product details.
          It keeps the website readable and balanced.
        </p>
      </div>
      <blockquote className="pull-quote">“Fredoka makes us odd. Poppins keeps us clear.”</blockquote>
    </section>
  );
}

function ToneSection() {
  return (
    <section id="tone" className="section">
      <SectionHeading eyebrow="04 / Tone & Voice" title="How we sound." />
      <p className="section__lede">
        Oddly Yours sounds like your funniest, most creative friend — playful enough to make you
        laugh, bold enough to say the unexpected, and never afraid of being a little weird.
      </p>
      <div className="sliders">
        {voiceSliders.map((s) => (
          <div key={s.left} className="slider">
            <div className="slider__labels">
              <span>{s.left}</span>
              <span>{s.right}</span>
            </div>
            <div className="slider__track">
              <div className="slider__fill" style={{ width: `${s.value}%` }} />
              <div className="slider__thumb" style={{ left: `${s.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="tone-compare">
        {toneComparisons.map((t) => (
          <div key={t.label} className="tone-compare__row">
            <div className="tone-compare__other">
              <span className="tone-compare__eyebrow">Other brands</span>
              <p>{t.other}</p>
            </div>
            <div className="tone-compare__oddly" style={{ background: `var(${t.color})` }}>
              <span className="tone-compare__eyebrow">Oddly Yours</span>
              <p>{t.oddly}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tone-examples">
        {toneExamples.map((t) => (
          <div key={t.tag} className="tone-example">
            <span className="badge">{t.tag}</span>
            <p>“{t.quote}”</p>
          </div>
        ))}
      </div>
      <div className="we-are-not">
        <h3 className="we-are-not__title">We are not:</h3>
        <div className="we-are-not__tags">
          {weAreNot.map((w) => <span key={w} className="tag tag--muted">{w}</span>)}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="audience" className="section section--tint-blue">
      <SectionHeading eyebrow="05 / Target Audience" title="Made for the odd ones." />
      <p className="section__lede">
        Ages 18–35. People who appreciate creativity, individuality and extraordinary design.
      </p>
      <div className="audience-grid">
        {audiences.map((a) => (
          <div key={a.title} className="audience-card">
            <span className="audience-card__sparkle">✦</span>
            <h3 className="audience-card__title">{a.title}</h3>
            <p className="audience-card__body">{a.body}</p>
          </div>
        ))}
      </div>
      <h3 className="we-are-not__title">What they like</h3>
      <div className="we-are-not__tags">
        {audienceLikes.map((l) => <span key={l} className="tag">{l}</span>)}
      </div>
    </section>
  );
}

function PackagingSection() {
  return (
    <section id="packaging" className="section section--tint-mint">
      <span className="eyebrow">06 / Packaging</span>
      <h2 className="section-heading__title">Unbox the <span className="packaging-highlight">odd</span>.</h2>
      <p className="section__lede">
        Packaging shouldn't end up straight in the bin. Ours is part of the joke.
      </p>
      <div className="packaging-stage">
        <img src={packaging} alt="Oddly Yours packaging" className="packaging-stage__img" />
        <div className="packaging-callouts">
          {packagingCallouts.map((c) => (
            <span key={c.text} className="packaging-callout">{c.text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="section section--ink">
      <SectionHeading eyebrow="How we got here" title="Brand Story" />
      <div className="story-steps">
        {storySteps.map((s) => (
          <div key={s.num} className="story-step">
            <span className="story-step__num">{s.num}</span>
            <h3 className="story-step__title">{s.title}</h3>
            <p className="story-step__body">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="brand-rule">
        <h3 className="brand-rule__title">The Oddly Yours rule</h3>
        <ol className="brand-rule__list">
          {brandRule.map((r) => <li key={r}>{r}</li>)}
        </ol>
        <p className="brand-rule__punch">
          And if it makes someone say “Where'd you get that?” — we've done our job.
        </p>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section">
      <SectionHeading eyebrow="What drives us" title="Core values" />
      <div className="values-grid">
        {coreValues.map((v) => (
          <div key={v.title} className="value-card">
            <h3 className="value-card__title">{v.title}</h3>
            <p className="value-card__quote">“{v.quote}”</p>
            <p className="value-card__body">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="section section--tint-yellow">
      <div className="vision-grid">
        <div>
          <span className="eyebrow">Our vision</span>
          <p className="vision-text">
            To fill homes with products that make people ‘Stop, Smile, and Say "Where'd you get
            that?"’
          </p>
          <p className="vision-sub">
            Transforming standard interior decor into interactive points of humor and lighthearted
            joy.
          </p>
        </div>
        <div>
          <span className="eyebrow">Our mission</span>
          <p className="vision-text">
            “To rescue everyday products from being boring and to prove that products can be
            practical and yet make people laugh.”
          </p>
          <p className="vision-sub">
            Bridging the gap between high utility and playful absurdity, why choose one when
            there's room for both.
          </p>
        </div>
      </div>
    </section>
  );
}

function OddinarySection() {
  return (
    <section className="section">
      <SectionHeading eyebrow="Ordinary to oddinary" title="Boring → Creative → Unexpected → Functional" />
      <div className="values-grid">
        {oddinaryTraits.map((t) => (
          <div key={t.title} className="value-card">
            <h3 className="value-card__title">{t.title}</h3>
            <p className="value-card__body">{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PersonalitySection() {
  return (
    <section id="personality" className="section section--tint-pink">
      <SectionHeading eyebrow="Brand personality" title="Four words. No fluff." />
      <p className="section__lede">
        If Oddly Yours were a person at a party, here's exactly who they'd be — and, just as
        importantly, who they wouldn't.
      </p>
      <div className="personality-grid">
        <div className="personality-col personality-col--are">
          <h3>We are:</h3>
          <ul>{personalityAre.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="personality-col personality-col--not">
          <h3>We are not:</h3>
          <ul>{personalityAreNot.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
      <blockquote className="pull-quote">
        “Normal” is a setting on the washing machine. Not a personality.
      </blockquote>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__square-border">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} style={{ background: `var(${palette[i % palette.length].varName})` }} />
        ))}
      </div>
      <div className="footer__main">
        <div className="footer__columns">
          <div className="footer__brand">
            <img src={logoMark} alt="Oddly Yours" className="footer__logo" />
          </div>
          {footerColumns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              {col.links.map((l) => <div key={l}>{l}</div>)}
            </div>
          ))}
        </div>
        <h2 className="footer__slogan">Because ordinary isn’t our thing.</h2>
        <p className="footer__copyright">
          Made for people who like things a little different. © 2026 Oddly Yours.
        </p>
      </div>
      <div className="footer__square-border">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} style={{ background: `var(${palette[(i + 3) % palette.length].varName})` }} />
        ))}
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SectionOverview />
      <LogoSection />
      <ColorSection />
      <TypographySection />
      <ToneSection />
      <AudienceSection />
      <PackagingSection />
      <StorySection />
      <ValuesSection />
      <VisionSection />
      <OddinarySection />
      <PersonalitySection />
      <Footer />
    </>
  );
}

export default App;
