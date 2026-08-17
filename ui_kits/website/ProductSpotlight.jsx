function ProductSpotlight({ Card, Badge, Tag, Button }) {
  const [color, setColor] = React.useState('pink');
  return (
    <section style={{ padding: '80px 48px', background: 'var(--surface-page)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        <Card hoverable={false} style={{ padding: '32px', display: 'flex', justifyContent: 'center' }}>
          <img src="../../assets/packaging.png" alt="Nose soap dispenser" style={{ width: '100%', maxWidth: '360px' }} />
        </Card>
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            <Badge color="mint">Best seller</Badge>
            <Badge color="ink">Refillable</Badge>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-3xl)', color: 'var(--text-primary)', margin: 0 }}>
            Nose Soap Dispenser
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', marginTop: '10px' }}>
            Snot your regular soap dispenser. Go on, pick your nose &mdash; we won&rsquo;t judge.
          </p>
          <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
            {['pink', 'blue', 'mint'].map((c) => (
              <Tag key={c} color={c} selected={color === c} onClick={() => setColor(c)}>
                {c === 'pink' ? 'Blush' : c === 'blue' ? 'Splash' : 'Mint'}
              </Tag>
            ))}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: '20px' }}>
            $28.00
          </div>
          <Button size="lg">Add to cart</Button>
        </div>
      </div>
    </section>
  );
}
window.ProductSpotlight = ProductSpotlight;
