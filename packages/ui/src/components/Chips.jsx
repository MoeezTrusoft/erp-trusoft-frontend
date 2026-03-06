const SIZE_CONFIG = {
  standard: {
    height: 24,
    dismissibleWidth: 75,
    staticWidth: 57,
    iconSize: 14,
    fontSize: 13,
  },
  small: {
    height: 20,
    dismissibleWidth: 71,
    staticWidth: 53,
    iconSize: 12,
    fontSize: 12,
  },
  mini: {
    height: 16,
    dismissibleWidth: 79,
    staticWidth: 49,
    iconSize: 10,
    fontSize: 11,
  },
};

const CloseIcon = ({ size = 14, color = '#6B7280' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L10 10" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M10 4L4 10" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const Chips = ({
  label = 'Option',
  dismissible = true,
  size = 'standard',
  state = 'default',
  color = 'green',
  outline = false,
  width,
  className = '',
  style = {},
  onDismiss,
  ...rest
}) => {
  const normalizedSize = SIZE_CONFIG[size] ? size : 'standard';
  const config = SIZE_CONFIG[normalizedSize];
  const isDisabled = state === 'disabled';

  const colorConfig = {
    green: {
      filledBackground: 'var(--color-teal-3, #64E2D4)',
      outlineBorder: 'var(--color-teal-10, #045F58)',
      textColor: 'var(--color-neutral-9, #2B2B2B)',
    },
  };

  const palette = colorConfig[color] || colorConfig.green;
  const resolvedWidth =
    typeof width !== 'undefined'
      ? typeof width === 'number'
        ? `${width}px`
        : width
      : `${dismissible ? config.dismissibleWidth : config.staticWidth}px`;

  const background = isDisabled
    ? 'var(--color-neutral-2, #F7F8FA)'
    : outline
      ? 'var(--color-neutral-1, #FFFFFF)'
      : palette.filledBackground;

  const border = isDisabled
    ? '1px solid transparent'
    : outline
      ? `1px solid ${palette.outlineBorder}`
      : '1px solid var(--color-neutral-6, #AFAFAF)';

  const textColor = isDisabled ? 'var(--color-neutral-6, #AFAFAF)' : palette.textColor;

  return (
    <span
      className={className}
      style={{
        width: resolvedWidth,
        height: `${config.height}px`,
        borderRadius: isDisabled ? '8px' : dismissible ? '100px' : '8px',
        border,
        background,
        boxSizing: 'border-box',
        paddingLeft: '6px',
        paddingRight: dismissible ? '4px' : '6px',
        gap: dismissible ? '4px' : '8px',
        opacity: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: `${config.fontSize}px`,
          lineHeight: '100%',
          letterSpacing: 0,
          color: textColor,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>

      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          disabled={isDisabled || !onDismiss}
          aria-label={`Dismiss ${label}`}
          style={{
            width: `${config.iconSize}px`,
            height: `${config.iconSize}px`,
            borderRadius: '999px',
            border: 'none',
            padding: 0,
            background: isDisabled ? 'transparent' : 'var(--color-neutral-2, #E7EAEE)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isDisabled || !onDismiss ? 'default' : 'pointer',
          }}
        >
          <CloseIcon
            size={Math.max(8, config.iconSize - 2)}
            color={isDisabled ? 'var(--color-neutral-6, #AFAFAF)' : 'var(--color-neutral-8, #333333)'}
          />
        </button>
      )}
    </span>
  );
};

export default Chips;
