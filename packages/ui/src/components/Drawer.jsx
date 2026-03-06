const Drawer = ({
  title = 'Drawer',
  width = 532,
  height = 839,
  titleColor = 'var(--color-teal-10, #045F58)',
  background = 'var(--color-neutral-1, #FFFFFF)',
  className = '',
  style = {},
  children,
  ...rest
}) => {
  const normalizedWidth = typeof width === 'number' ? `${width}px` : width;
  const normalizedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <aside
      className={className}
      style={{
        width: normalizedWidth,
        height: normalizedHeight,
        borderTopLeftRadius: '30px',
        borderBottomLeftRadius: '30px',
        boxShadow: '-6px 6px 11px 0 rgba(51, 51, 51, 0.15)',
        background,
        opacity: 1,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          height: '66px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          boxSizing: 'border-box',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '100%',
            color: titleColor,
          }}
        >
          {title}
        </h3>
      </div>

      <div
        aria-hidden="true"
        style={{
          width: '100%',
          borderTop: '1px solid transparent',
          borderImageSlice: 1,
          borderImageSource:
            'linear-gradient(90deg, rgba(4, 95, 88, 0.2) 0%, rgba(4, 95, 88, 1) 50%, rgba(4, 95, 88, 0.2) 100%)',
        }}
      />

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', boxSizing: 'border-box' }}>
        {children}
      </div>
    </aside>
  );
};

export default Drawer;
