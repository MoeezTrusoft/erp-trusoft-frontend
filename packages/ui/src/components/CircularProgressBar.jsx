import { useId } from 'react';

const CircularProgressBar = ({
  value = 70,
  max = 100,
  size = 180,
  strokeWidth = 14,
  className = '',
  style = {},
  textFormatter,
  ...rest
}) => {
  const gradientId = useId();

  const safeMax = max <= 0 ? 100 : max;
  const clamped = Math.max(0, Math.min(value, safeMax));
  const percent = Math.round((clamped / safeMax) * 100);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const sweepRatio = 1;
  const sweepLength = circumference * sweepRatio;

  const trackDasharray = `${sweepLength} ${circumference}`;
  const progressLength = sweepLength * (percent / 100);
  const progressDasharray = `${progressLength} ${circumference}`;

  return (
    <div
      className={className}
      style={{
        width: `${size + 2}px`,
        height: `${size}px`,
        position: 'relative',
        ...style,
      }}
      {...rest}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="8.97%" stopColor="var(--color-progress-start, #068F84)" />
            <stop offset="52.08%" stopColor="var(--color-progress-mid, #35B9AC)" />
            <stop offset="95.19%" stopColor="var(--color-teal-3, #64E2D4)" />
          </linearGradient>
        </defs>

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-neutral-3, #EDEDED)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={trackDasharray}
          transform={`rotate(-150 ${center} ${center})`}
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={progressDasharray}
          transform={`rotate(-150 ${center} ${center})`}
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '36px',
          lineHeight: '160%',
          letterSpacing: 0,
          color: 'var(--color-neutral-10, #000000)',
        }}
      >
        {typeof textFormatter === 'function' ? textFormatter(percent) : `${percent}%`}
      </div>
    </div>
  );
};

export default CircularProgressBar;
