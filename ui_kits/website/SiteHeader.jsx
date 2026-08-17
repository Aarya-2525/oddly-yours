function SiteHeader({ Button, Badge }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px', background: 'var(--surface-page)',
      borderBottom: '2.5px solid var(--color-almost-ink)', position: 'sticky', top: 0, zIndex: 10,
    }}>
      <img src="../../assets/logo.jpeg" alt="Oddly Yours" style={{ height: '44px', borderRadius: '10px' }} />
      <nav style={{ display: 'flex', gap: '32px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
        <span style={{ cursor: 'pointer' }}>Shop</span>
        <span style={{ cursor: 'pointer' }}>Why Oddly?</span>
        <span style={{ cursor: 'pointer' }}>FAQs</span>
        <span style={{ cursor: 'pointer' }}>Contact</span>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <Badge color="yellow">18–35 &amp; odd</Badge>
        <Button size="sm">Get the kit</Button>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
