/* @ds-bundle: {"format":4,"namespace":"OddlyYoursDesignSystem_961bec","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"233ca6904a0c","components/core/Badge.jsx":"fbf4f808f119","components/core/Button.jsx":"5d1e88efcc0a","components/core/Card.jsx":"2049b93437cf","components/feedback/Tooltip.jsx":"43ee7f7e497f","components/forms/Checkbox.jsx":"45bebd2b6579","components/forms/Input.jsx":"afbe1603abe4","components/forms/Switch.jsx":"d9071c2214a9","ui_kits/website/Hero.jsx":"4eb32f7061eb","ui_kits/website/ProductSpotlight.jsx":"dfbd19cee3ed","ui_kits/website/Sections.jsx":"e34ce6c8af1a","ui_kits/website/SiteHeader.jsx":"fce76de939d2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OddlyYoursDesignSystem_961bec = window.OddlyYoursDesignSystem_961bec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items
}) {
  const [openIndex, setOpenIndex] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => {
    const isOpen = openIndex === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '2.5px solid var(--color-almost-ink)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-card)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "oy-accordion-trigger",
      onClick: () => setOpenIndex(isOpen ? -1 : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--text-md)',
        color: 'var(--text-primary)'
      }
    }, it.question, /*#__PURE__*/React.createElement("span", {
      className: "oy-accordion-chevron",
      style: {
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "10",
      viewBox: "0 0 16 10",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 1L8 8L15 1",
      stroke: "#201A2B",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? '240px' : '0px',
        transition: 'max-height var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 18px',
        fontSize: 'var(--text-base)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--leading-relaxed)'
      }
    }, it.answer)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  color = 'pink',
  children
}) {
  const map = {
    pink: 'var(--color-bubblegum-pink)',
    blue: 'var(--color-splash-blue)',
    mint: 'var(--color-mint-green)',
    lavender: 'var(--color-dreamy-lavender)',
    yellow: 'var(--color-sunshine-yellow)',
    orange: 'var(--color-tang-orange)',
    ink: 'var(--color-almost-ink)'
  };
  const bg = map[color] || map.pink;
  const isInk = color === 'ink';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: isInk ? 'var(--text-on-ink)' : 'var(--text-primary)',
      border: '1.5px solid rgba(32,26,43,0.15)'
    }
  }, children);
}
function Tag({
  color = 'pink',
  selected = false,
  children,
  onClick
}) {
  const map = {
    pink: 'var(--color-bubblegum-pink)',
    blue: 'var(--color-splash-blue)',
    mint: 'var(--color-mint-green)',
    lavender: 'var(--color-dreamy-lavender)',
    yellow: 'var(--color-sunshine-yellow)'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "oy-tag",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? map[color] || map.pink : 'var(--surface-card)',
      border: '2px solid var(--color-almost-ink)',
      color: 'var(--text-primary)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    bg: 'var(--color-bubblegum-pink)',
    color: 'var(--text-primary)'
  },
  secondary: {
    bg: 'var(--color-cream-canvas)',
    color: 'var(--text-primary)'
  },
  ink: {
    bg: 'var(--color-almost-ink)',
    color: 'var(--text-on-ink)'
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--text-primary)'
  }
};
const SIZES = {
  sm: {
    padding: '10px 18px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '14px 26px',
    fontSize: 'var(--text-base)'
  },
  lg: {
    padding: '18px 34px',
    fontSize: 'var(--text-md)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const isGhost = variant === 'ghost';
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "oy-btn",
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      border: isGhost ? '2.5px solid transparent' : '2.5px solid var(--color-almost-ink)',
      borderRadius: 'var(--radius-pill)',
      background: v.bg,
      color: v.color,
      boxShadow: isGhost || disabled ? 'none' : 'var(--shadow-card)',
      ...s,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  hoverable = true,
  accent,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: hoverable ? 'oy-card oy-card--hoverable' : 'oy-card',
    style: {
      background: 'var(--surface-card)',
      border: '2.5px solid var(--color-almost-ink)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-card-soft)',
      borderTop: accent ? `10px solid ${accent}` : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children,
  side = 'top'
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: '120%',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: '120%',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }[side] || {
    bottom: '120%',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "oy-tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--color-almost-ink)',
      color: 'var(--text-on-ink)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      transform: `${pos.transform} translateY(${open ? '0' : '4px'})`
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oy-checkbox-box",
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '8px',
      border: '2.5px solid var(--color-almost-ink)',
      background: checked ? 'var(--color-mint-green)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "11",
    viewBox: "0 0 14 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.5L5 9.5L13 1.5",
    stroke: "#201A2B",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  error,
  type = 'text',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "oy-input",
    type: type,
    placeholder: placeholder,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: `2.5px solid ${error ? 'var(--color-tang-orange)' : 'var(--color-almost-ink)'}`,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-tang-orange)',
      fontWeight: 600
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oy-switch-track",
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '48px',
      height: '28px',
      borderRadius: 'var(--radius-pill)',
      border: '2.5px solid var(--color-almost-ink)',
      background: checked ? 'var(--color-bubblegum-pink)' : 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oy-switch-thumb",
    style: {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: 'var(--color-almost-ink)',
      transform: checked ? 'translateX(20px)' : 'translateX(0)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: '48px',
      padding: '80px 48px',
      background: 'var(--color-dreamy-lavender)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 26,
      height: 8,
      borderRadius: 4,
      background: 'var(--color-sunshine-yellow)',
      top: 60,
      left: 380,
      transform: 'rotate(20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 26,
      height: 8,
      borderRadius: 4,
      background: 'var(--color-tang-orange)',
      top: 120,
      left: 420,
      transform: 'rotate(-15deg)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-5xl)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-primary)'
    }
  }, "Odd Because", /*#__PURE__*/React.createElement("br", null), "Ordinary Isn’t", /*#__PURE__*/React.createElement("br", null), "Our Thing."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      maxWidth: '440px',
      marginTop: '20px',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "We craft quirky lifestyle products that combine unexpected design with everyday functionality. Life is too short for boring products."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Shop the collection"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Our story"))), /*#__PURE__*/React.createElement("div", {
    className: "oy-anim-float",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/packaging.png",
    alt: "Nose soap dispenser packaging",
    style: {
      width: '100%',
      maxWidth: '420px',
      borderRadius: 'var(--radius-lg)'
    }
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductSpotlight.jsx
try { (() => {
function ProductSpotlight({
  Card,
  Badge,
  Tag,
  Button
}) {
  const [color, setColor] = React.useState('pink');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center',
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    hoverable: false,
    style: {
      padding: '32px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/packaging.png",
    alt: "Nose soap dispenser",
    style: {
      width: '100%',
      maxWidth: '360px'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "mint"
  }, "Best seller"), /*#__PURE__*/React.createElement(Badge, {
    color: "ink"
  }, "Refillable")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Nose Soap Dispenser"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      marginTop: '10px'
    }
  }, "Snot your regular soap dispenser. Go on, pick your nose — we won’t judge."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      margin: '20px 0'
    }
  }, ['pink', 'blue', 'mint'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    color: c,
    selected: color === c,
    onClick: () => setColor(c)
  }, c === 'pink' ? 'Blush' : c === 'blue' ? 'Splash' : 'Mint'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-primary)',
      marginBottom: '20px'
    }
  }, "$28.00"), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Add to cart"))));
}
window.ProductSpotlight = ProductSpotlight;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductSpotlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function QuoteBanner() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      background: 'var(--color-almost-ink)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-4xl)',
      color: 'var(--color-sunshine-yellow)',
      maxWidth: '820px',
      margin: '0 auto',
      lineHeight: 'var(--leading-tight)'
    }
  }, "“Your sink just got a nose job.”"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-on-ink)',
      marginTop: '20px',
      fontSize: 'var(--text-base)'
    }
  }, "— the only review that matters"));
}
function FaqSection({
  Accordion
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '640px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-primary)',
      textAlign: 'center',
      marginBottom: '32px'
    }
  }, "Questions? Odd, normal, whatever."), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'Is it dishwasher safe?',
      answer: 'Yes! Top rack only, please — the nose deserves gentle care.'
    }, {
      question: 'Will it judge me?',
      answer: 'Never. Go on, pick your nose. We won’t judge.'
    }, {
      question: 'What if my order hasn’t shown up?',
      answer: 'We’ll track it down and keep you posted — no jokes when it matters.'
    }]
  })));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '56px 48px',
      background: 'var(--color-cream-canvas)',
      borderTop: '2.5px solid var(--color-almost-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '32px',
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, "oddly yours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '64px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: '10px',
      color: 'var(--text-primary)'
    }
  }, "Shop"), /*#__PURE__*/React.createElement("div", null, "All Products"), /*#__PURE__*/React.createElement("div", null, "New Arrivals")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: '10px',
      color: 'var(--text-primary)'
    }
  }, "Support"), /*#__PURE__*/React.createElement("div", null, "FAQs"), /*#__PURE__*/React.createElement("div", null, "Shipping"), /*#__PURE__*/React.createElement("div", null, "Returns")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: '10px',
      color: 'var(--text-primary)'
    }
  }, "About"), /*#__PURE__*/React.createElement("div", null, "Our Story"), /*#__PURE__*/React.createElement("div", null, "Why Oddly?"), /*#__PURE__*/React.createElement("div", null, "Packaging")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '40px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Made for people who like things a little different. \xA9 2026 Oddly Yours."));
}
window.QuoteBanner = QuoteBanner;
window.FaqSection = FaqSection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
function SiteHeader({
  Button,
  Badge
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      background: 'var(--surface-page)',
      borderBottom: '2.5px solid var(--color-almost-ink)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpeg",
    alt: "Oddly Yours",
    style: {
      height: '44px',
      borderRadius: '10px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '32px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "Shop"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "Why Oddly?"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "yellow"
  }, "18–35 & odd"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Get the kit")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
