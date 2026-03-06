const ProgressBar = ({
  value = 64,
  max = 100,
  showInfo = true,
  timeLeft = '30 seconds left',
  width = 470,
  className = '',
  style = {},
  trackStyle = {},
  fillStyle = {},
  ...rest
}) => {
  const safeMax = max <= 0 ? 100 : max;
  const clamped = Math.max(0, Math.min(value, safeMax));
  const percent = Math.round((clamped / safeMax) * 100);

  return (
    <div className={className} style={{ width: `${width}px`, maxWidth: '100%', ...style }} {...rest}>
      {showInfo ? (
        <p
          style={{
            margin: '0 0 8px 0',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '160%',
            letterSpacing: 0,
            color: 'var(--color-neutral-8, #333333)',
          }}
        >
          {percent}% • {timeLeft}
        </p>
      ) : null}

      <div
        style={{
          width: `${width}px`,
          maxWidth: '100%',
          height: '8px',
          borderRadius: '999px',
          background: 'var(--color-neutral-3, #EDEDED)',
          overflow: 'hidden',
          ...trackStyle,
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            borderRadius: '999px',
            background:
              'linear-gradient(90deg, var(--color-progress-start, #068F84) 0%, var(--color-teal-3, #64E2D4) 100%)',
            ...fillStyle,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
