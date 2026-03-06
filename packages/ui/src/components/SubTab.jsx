const SubTab = ({
  label = 'Sub Tab 01',
  state = 'active',
  width = 68,
  className = '',
  style = {},
  onClick,
  ...rest
}) => {
  const resolvedState = String(state).toLowerCase();
  const isActive = resolvedState === 'active';
  const isDisabled = resolvedState === 'disabled';

  const textColor = isDisabled
    ? 'var(--color-neutral-6, #AFAFAF)'
    : 'var(--color-neutral-10, #000000)';

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={className}
      style={{
        minWidth: `${width}px`,
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '8px',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '15px',
          color: textColor,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          padding: '0 6px',
          boxSizing: 'border-box',
        }}
      >
        {label}
      </span>

      <span
        aria-hidden="true"
        style={{
          width: '100%',
          height: '3px',
          borderRadius: '2px',
          background: isActive
            ? 'var(--color-primary-dark, #00918D)'
            : 'var(--color-neutral-6, #AFAFAF)',
        }}
      />
    </button>
  );
};

export default SubTab;
