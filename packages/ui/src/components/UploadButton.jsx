const UploadIcon = ({ color = '#FFFFFF' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.2 18.5C4.9 18.5 3 16.7 3 14.4C3 12.3 4.5 10.6 6.5 10.2C7 7.9 9 6.2 11.4 6.2C14.2 6.2 16.5 8.4 16.6 11.2C18.8 11.3 20.5 13.1 20.5 15.3C20.5 17.6 18.6 19.5 16.3 19.5H7.2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20.5V12.8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M8.9 15.8L12 12.7L15.1 15.8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UploadButton = ({
  label = 'Upload',
  variant = 'default',
  width = 116,
  height = 36,
  className = '',
  style = {},
  ...rest
}) => {
  const isVariant2 = variant === 'variant2';
  const normalizedWidth = typeof width === 'number' ? `${width}px` : width;
  const normalizedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <button
      type="button"
      className={className}
      style={{
        width: normalizedWidth,
        height: normalizedHeight,
        borderRadius: '4px',
        padding: '6px 20px',
        gap: '8px',
        opacity: 1,
        background: isVariant2 ? '#045F58' : '#069388',
        border: isVariant2 ? '2px solid #B4E2DF' : '1px solid transparent',
        color: '#FFFFFF',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        cursor: 'pointer',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '100%',
        ...style,
      }}
      {...rest}
    >
      <UploadIcon />
      <span>{label}</span>
    </button>
  );
};

export default UploadButton;
