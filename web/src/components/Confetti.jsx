const COLOR_VARS = {
  pink: 'var(--color-bubblegum-pink)',
  blue: 'var(--color-splash-blue)',
  mint: 'var(--color-mint-green)',
  lavender: 'var(--color-dreamy-lavender)',
  yellow: 'var(--color-sunshine-yellow)',
  orange: 'var(--color-tang-orange)',
  ink: 'var(--color-almost-ink)',
};

function svgBox({ top, left, right, bottom, width, height, rotate = 0 }) {
  return { top, left, right, bottom, width, height, transform: `rotate(${rotate}deg)` };
}

function Squiggle({ color, rotate, ...pos }) {
  return (
    <svg className="confetti-piece" style={svgBox({ ...pos, rotate })} viewBox="0 0 40 20" fill="none">
      <path d="M2 10c4-8 8 8 12 0s8-8 12 0 8 8 12 0" stroke={COLOR_VARS[color]} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function Hook({ color, rotate, ...pos }) {
  return (
    <svg className="confetti-piece" style={svgBox({ ...pos, rotate })} viewBox="0 0 30 30" fill="none">
      <path d="M25 5C16 5 6 10 6 18c0 6 5 8 9 6" stroke={COLOR_VARS[color]} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function Zigzag({ color, rotate, ...pos }) {
  return (
    <svg className="confetti-piece" style={svgBox({ ...pos, rotate })} viewBox="0 0 24 34" fill="none">
      <path d="M4 2l16 6-16 6 16 6-16 6" stroke={COLOR_VARS[color]} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dash({ color, rotate = 0, width, height, ...pos }) {
  return (
    <span
      className="confetti-piece confetti-piece--dash"
      style={{ ...pos, width, height, background: COLOR_VARS[color], transform: `rotate(${rotate}deg)` }}
    />
  );
}

function Dot({ color, size = 12, ...pos }) {
  return (
    <span
      className="confetti-piece confetti-piece--dot"
      style={{ ...pos, width: size, height: size, background: COLOR_VARS[color] }}
    />
  );
}

const pieces = [
  { as: Hook, color: 'orange', top: '2%', right: '10%', width: 46, height: 46 },
  { as: Squiggle, color: 'blue', top: '10%', left: '4%', width: 56, height: 28 },
  { as: Zigzag, color: 'pink', top: '4%', left: '30%', width: 26, height: 40 },
  { as: Dot, color: 'yellow', top: '9%', left: '48%', size: 14 },
  { as: Dot, color: 'pink', top: '54%', left: '2%', size: 12 },
  { as: Dash, color: 'mint', top: '32%', left: '10%', width: 30, height: 9, rotate: -20 },
  { as: Dash, color: 'pink', top: '44%', left: '6%', width: 26, height: 9, rotate: 35 },
  { as: Hook, color: 'orange', bottom: '4%', left: '2%', width: 60, height: 60 },
  { as: Squiggle, color: 'blue', bottom: '14%', left: '8%', width: 48, height: 24, rotate: 10 },
  { as: Dash, color: 'orange', top: '2%', right: '30%', width: 22, height: 8, rotate: -30 },
  { as: Dash, color: 'lavender', top: '46%', right: '4%', width: 22, height: 8, rotate: 55 },
  { as: Dot, color: 'mint', top: '18%', right: '6%', size: 12 },
  { as: Dot, color: 'mint', bottom: '30%', right: '10%', size: 10 },
  { as: Squiggle, color: 'orange', bottom: '8%', right: '6%', width: 50, height: 26 },
  { as: Hook, color: 'blue', bottom: '2%', right: '20%', width: 44, height: 44, rotate: 200 },
  { as: Dot, color: 'pink', bottom: '4%', right: '2%', size: 10 },
];

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => {
        const { as: Shape, ...rest } = p;
        return <Shape key={i} {...rest} />;
      })}
    </div>
  );
}

export default Confetti;
