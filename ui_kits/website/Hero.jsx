function Hero({ Button }) {
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '48px',
      padding: '80px 48px', background: 'var(--color-dreamy-lavender)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', width: 26, height: 8, borderRadius: 4, background: 'var(--color-sunshine-yellow)', top: 60, left: 380, transform: 'rotate(20deg)' }} />
      <div style={{ position: 'absolute', width: 26, height: 8, borderRadius: 4, background: 'var(--color-tang-orange)', top: 120, left: 420, transform: 'rotate(-15deg)' }} />
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-5xl)', lineHeight: 'var(--leading-tight)', color: 'var(--text-primary)' }}>
          Odd Because<br />Ordinary Isn&rsquo;t<br />Our Thing.
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', maxWidth: '440px', marginTop: '20px', lineHeight: 'var(--leading-relaxed)' }}>
          We craft quirky lifestyle products that combine unexpected design with everyday functionality. Life is too short for boring products.
        </p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
          <Button size="lg">Shop the collection</Button>
          <Button size="lg" variant="secondary">Our story</Button>
        </div>
      </div>
      <div className="oy-anim-float" style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="../../assets/packaging.png" alt="Nose soap dispenser packaging" style={{ width: '100%', maxWidth: '420px', borderRadius: 'var(--radius-lg)' }} />
      </div>
    </section>
  );
}
window.Hero = Hero;
