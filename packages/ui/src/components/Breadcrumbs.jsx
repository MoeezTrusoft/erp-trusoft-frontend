const CrumbSeparator = () => (
  <span
    aria-hidden="true"
    style={{
      margin: '0 8px',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
    }}
  >
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2L7 5L3 8V2Z" fill="var(--color-neutral-8, #333333)" />
    </svg>
  </span>
);

const Breadcrumbs = ({
  items = [ 'Home', 'DAM', 'Audit & Activity Log' ],
  showEllipsis = false,
  className = '',
  style = {},
  ...rest
}) => {
  const safeItems = Array.isArray(items) && items.length > 0 ? items : [ 'Home' ];
  const lastItem = safeItems[safeItems.length - 1];
  const prefixItems = safeItems.slice(0, -1);

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        height: '22px',
        opacity: 1,
        ...style,
      }}
      {...rest}
    >
      {prefixItems.map((item, index) => (
        <span key={`${item}-${index}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              color: 'var(--color-neutral-8, #333333)',
              letterSpacing: 0,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {item}
          </span>
          <CrumbSeparator />
        </span>
      ))}

      {showEllipsis && (
        <>
          <span
            style={{
              height: '22px',
              minWidth: '52px',
              borderRadius: '3px',
              background: '#B4E2DF',
              color: 'var(--color-neutral-7, #4B5563)',
              padding: '0 10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '100%',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            ...
          </span>
          <CrumbSeparator />
        </>
      )}

      <span
        style={{
          height: '22px',
          minWidth: '158px',
          borderRadius: '3px',
          background: '#B4E2DF',
          color: 'var(--color-teal-10, #045F58)',
          padding: '0 12px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: 0,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {lastItem}
      </span>
    </div>
  );
};

export default Breadcrumbs;
