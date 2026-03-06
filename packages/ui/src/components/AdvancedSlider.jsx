const AdvancedSlider = ({
  min = 0,
  max = 10,
  minValue = 2,
  maxValue = 8,
  onChange,
  step = 1,
  width = 200,
  showValueBubble = true,
  className = '',
  style = {},
  ...rest
}) => {
  const safeMin = Math.max(min, Math.min(maxValue, minValue));
  const safeMax = Math.min(max, Math.max(minValue, maxValue));

  const leftPercent = ((safeMin - min) / (max - min)) * 100;
  const rightPercent = ((safeMax - min) / (max - min)) * 100;

  const emitChange = (nextMin, nextMax) => {
    if (typeof onChange === 'function') {
      onChange({ minValue: nextMin, maxValue: nextMax });
    }
  };

  const handleMinChange = (event) => {
    const next = Number(event.target.value);
    emitChange(Math.min(next, safeMax), safeMax);
  };

  const handleMaxChange = (event) => {
    const next = Number(event.target.value);
    emitChange(safeMin, Math.max(next, safeMin));
  };

  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        maxWidth: '100%',
        position: 'relative',
        paddingTop: '5px',
        paddingBottom: '24px',
        ...style,
      }}
      {...rest}
    >
      <style>
        {`
          .advanced-slider-input {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            pointer-events: none;
          }

          .advanced-slider-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            pointer-events: auto;
          }

          .advanced-slider-input::-moz-range-thumb {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: none;
            pointer-events: auto;
          }
        `}
      </style>

      {showValueBubble ? (
        <>
          <div
            style={{
              position: 'absolute',
              left: `${leftPercent}%`,
              top: '-27px',
              transform: 'translateX(-50%)',
              background: 'var(--color-primary-dark, #00918D)',
              color: 'var(--color-neutral-1, #FFFFFF)',
              borderRadius: '4px',
              minWidth: '26px',
              height: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: 1,
              padding: '0 6px',
              boxSizing: 'border-box',
            }}
          >
            <span>{safeMin}</span>
          </div>

          <div
            style={{
              position: 'absolute',
              left: `${rightPercent}%`,
              top: '-27px',
              transform: 'translateX(-50%)',
              background: 'var(--color-primary-dark, #00918D)',
              color: 'var(--color-neutral-1, #FFFFFF)',
              borderRadius: '4px',
              minWidth: '26px',
              height: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: 1,
              padding: '0 6px',
              boxSizing: 'border-box',
            }}
          >
            <span>{safeMax}</span>
          </div>
        </>
      ) : null}

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '8px',
          borderRadius: '999px',
          background: 'var(--color-teal-1, #B4E2DF)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: `${leftPercent}%`,
            width: `${rightPercent - leftPercent}%`,
            height: '100%',
            borderRadius: '999px',
            background: 'var(--color-primary-dark, #00918D)',
          }}
        />

        {[leftPercent, rightPercent].map((percent, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${percent}%`,
              top: '50%',
              width: '14px',
              height: '14px',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              border: '1.5px solid var(--color-neutral-4, #D8D8D8)',
              background: 'var(--color-neutral-1, #FFFFFF)',
              boxSizing: 'border-box',
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      <input
        className="advanced-slider-input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={safeMin}
        onChange={handleMinChange}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '5px',
          width: '100%',
          height: '8px',
          opacity: 0,
          cursor: 'pointer',
          margin: 0,
          zIndex: 2,
        }}
      />

      <input
        className="advanced-slider-input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={safeMax}
        onChange={handleMaxChange}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '5px',
          width: '100%',
          height: '8px',
          opacity: 0,
          cursor: 'pointer',
          margin: 0,
          zIndex: 3,
        }}
      />

      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
        {Array.from({ length: max - min + 1 }).map((_, i) => {
          const tick = min + i;
          const showLabel = tick % 2 === 0;

          return (
            <div
              key={tick}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '1px',
                transform: 'translateX(-0.5px)',
              }}
            >
              <span
                style={{
                  width: '2px',
                  height: '8px',
                  background: 'var(--color-neutral-8, #333333)',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  marginTop: '4px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: 1,
                  color: 'var(--color-neutral-10, #000000)',
                  opacity: showLabel ? 1 : 0,
                }}
              >
                {tick}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvancedSlider;
