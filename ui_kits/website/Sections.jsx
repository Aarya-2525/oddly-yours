function QuoteBanner() {
  return (
    <section style={{ padding: '80px 48px', background: 'var(--color-almost-ink)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-4xl)', color: 'var(--color-sunshine-yellow)', maxWidth: '820px', margin: '0 auto', lineHeight: 'var(--leading-tight)' }}>
        &ldquo;Your sink just got a nose job.&rdquo;
      </div>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-on-ink)', marginTop: '20px', fontSize: 'var(--text-base)' }}>
        &mdash; the only review that matters
      </p>
    </section>
  );
}

function FaqSection({ Accordion }) {
  return (
    <section style={{ padding: '80px 48px', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-3xl)', color: 'var(--text-primary)', textAlign: 'center', marginBottom: '32px' }}>
          Questions? Odd, normal, whatever.
        </h2>
        <Accordion items={[
          { question: 'Is it dishwasher safe?', answer: 'Yes! Top rack only, please — the nose deserves gentle care.' },
          { question: 'Will it judge me?', answer: 'Never. Go on, pick your nose. We won’t judge.' },
          { question: 'What if my order hasn’t shown up?', answer: 'We’ll track it down and keep you posted — no jokes when it matters.' },
        ]} />
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer style={{ padding: '56px 48px', background: 'var(--color-cream-canvas)', borderTop: '2.5px solid var(--color-almost-ink)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>oddly yours</div>
        <div style={{ display: 'flex', gap: '64px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>Shop</div>
            <div>All Products</div><div>New Arrivals</div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>Support</div>
            <div>FAQs</div><div>Shipping</div><div>Returns</div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>About</div>
            <div>Our Story</div><div>Why Oddly?</div><div>Packaging</div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
        Made for people who like things a little different. &copy; 2026 Oddly Yours.
      </div>
    </footer>
  );
}
window.QuoteBanner = QuoteBanner;
window.FaqSection = FaqSection;
window.SiteFooter = SiteFooter;
