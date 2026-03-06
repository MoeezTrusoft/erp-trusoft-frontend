const HeaderGlyph = ({ color = 'var(--color-teal-10, #045F58)' }) => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="15" cy="15" r="4" fill={color} />
    <circle cx="15" cy="6.5" r="3.5" fill={color} opacity="0.9" />
    <circle cx="22.5" cy="10" r="3.2" fill={color} opacity="0.85" />
    <circle cx="23" cy="18.5" r="3" fill={color} opacity="0.8" />
    <circle cx="15" cy="23.5" r="3.1" fill={color} opacity="0.85" />
    <circle cx="7.2" cy="18.5" r="3" fill={color} opacity="0.8" />
    <circle cx="7.5" cy="10" r="3.2" fill={color} opacity="0.85" />
  </svg>
);

const FoundationGridSystem = ({
  width = 1440,
  height = 1024,
  top = 20,
  left = 20,
  padding = 10,
  gap = 10,
  background = 'var(--color-neutral-3, #EDEDED)',
  heading = 'Main Heading',
  headingColor = 'var(--color-teal-10, #045F58)',
  showHeading = true,
  showGuides = true,
  className = '',
  style = {},
  children,
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        top: `${top}px`,
        left: `${left}px`,
        padding: `${padding}px`,
        gap: `${gap}px`,
        opacity: 1,
        background,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '20px',
        ...style,
      }}
      {...rest}
    >
      {showGuides && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '30px',
            left: '20px',
            right: '20px',
            height: '2px',
            background:
              'linear-gradient(90deg, rgba(4, 95, 88, 0.2) 0%, rgba(4, 95, 88, 1) 50%, rgba(4, 95, 88, 0.2) 100%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {showHeading && (
        <div
          style={{
            minHeight: '82px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '0 28px',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <HeaderGlyph color={headingColor} />
          <h2
            style={{
              margin: 0,
              width: '170px',
              height: '17px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: 0,
              color: headingColor,
            }}
          >
            {heading}
          </h2>
        </div>
      )}

      {showGuides && (
        <div
          aria-hidden="true"
          style={{
            width: '100%',
            height: '2px',
            background:
              'linear-gradient(90deg, rgba(4, 95, 88, 0.2) 0%, rgba(4, 95, 88, 1) 50%, rgba(4, 95, 88, 0.2) 100%)',
            position: 'relative',
            zIndex: 1,
          }}
        />
      )}

      <div style={{ position: 'relative', flex: 1, padding: '18px 20px 20px 20px', boxSizing: 'border-box' }}>
        {showGuides && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '0 20px 20px 20px',
              border: '1px solid rgba(4, 95, 88, 0.3)',
              borderTop: 'none',
              pointerEvents: 'none',
            }}
          />
        )}

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FoundationGridSystem;
