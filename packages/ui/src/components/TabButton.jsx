const DefaultTabIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7.5 3.625C7.5 3.97018 7.77982 4.25 8.125 4.25C8.47018 4.25 8.75 3.97018 8.75 3.625H8.125H7.5ZM8.75 0.625C8.75 0.279822 8.47018 0 8.125 0C7.77982 0 7.5 0.279822 7.5 0.625H8.125H8.75ZM7.5 15.625C7.5 15.9702 7.77982 16.25 8.125 16.25C8.47018 16.25 8.75 15.9702 8.75 15.625H8.125H7.5ZM8.75 12.625C8.75 12.2798 8.47018 12 8.125 12C7.77982 12 7.5 12.2798 7.5 12.625H8.125H8.75ZM12.625 7.5C12.2798 7.5 12 7.77982 12 8.125C12 8.47018 12.2798 8.75 12.625 8.75V8.125V7.5ZM15.625 8.75C15.9702 8.75 16.25 8.47018 16.25 8.125C16.25 7.77982 15.9702 7.5 15.625 7.5V8.125V8.75ZM0.625 7.5C0.279822 7.5 0 7.77982 0 8.125C0 8.47018 0.279822 8.75 0.625 8.75V8.125V7.5ZM3.625 8.75C3.97018 8.75 4.25 8.47018 4.25 8.125C4.25 7.77982 3.97018 7.5 3.625 7.5V8.125V8.75ZM14.125 8.12496H13.5C13.5 11.0935 11.0935 13.5 8.125 13.5V14.125V14.75C11.7839 14.75 14.75 11.7838 14.75 8.12496H14.125ZM8.125 14.125V13.5C5.15647 13.5 2.75 11.0935 2.75 8.12496H2.125H1.5C1.5 11.7838 4.46611 14.75 8.125 14.75V14.125ZM2.125 8.12496H2.75C2.75 5.15643 5.15647 2.74996 8.125 2.74996V2.12496V1.49996C4.46611 1.49996 1.5 4.46607 1.5 8.12496H2.125ZM8.125 2.12496V2.74996C11.0935 2.74996 13.5 5.15643 13.5 8.12496H14.125H14.75C14.75 4.46607 11.7839 1.49996 8.125 1.49996V2.12496ZM8.125 3.625H8.75V0.625H8.125H7.5V3.625H8.125ZM8.125 15.625H8.75V12.625H8.125H7.5V15.625H8.125ZM12.625 8.125V8.75H15.625V8.125V7.5H12.625V8.125ZM0.625 8.125V8.75H3.625V8.125V7.5H0.625V8.125ZM10.375 8.125H9.75C9.75 9.02246 9.02246 9.75 8.125 9.75V10.375V11C9.71282 11 11 9.71282 11 8.125H10.375ZM8.125 10.375V9.75C7.22754 9.75 6.5 9.02246 6.5 8.125H5.875H5.25C5.25 9.71282 6.53718 11 8.125 11V10.375ZM5.875 8.125H6.5C6.5 7.22754 7.22754 6.5 8.125 6.5V5.875V5.25C6.53718 5.25 5.25 6.53718 5.25 8.125H5.875ZM8.125 5.875V6.5C9.02246 6.5 9.75 7.22754 9.75 8.125H10.375H11C11 6.53718 9.71282 5.25 8.125 5.25V5.875Z"
      fill="var(--color-neutral-1, #FFFFFF)"
    />
  </svg>
);

const TabButton = ({
  label = 'Course Catalog',
  selected = false,
  disabled = false,
  showIcon = false,
  icon,
  showUnderline,
  width,
  className = '',
  style = {},
  onClick,
  ...rest
}) => {
  const isSelected = selected && !disabled;
  const effectiveUnderline = showUnderline ?? isSelected;
  const tabWidth = width ?? (isSelected ? 154 : 146);

  const background = disabled
    ? 'var(--color-neutral-6, #AFAFAF)'
    : isSelected
    ? 'var(--color-neutral-8, #333333)'
    : 'var(--color-tab-unselected, #56A29C)';

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={{
        width: `${tabWidth}px`,
        height: '39px',
        border: 'none',
        borderTopLeftRadius: '18px',
        borderTopRightRadius: '17px',
        background,
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: showIcon ? '6px' : '0px',
        }}
      >
        {showIcon ? icon || <DefaultTabIcon /> : null}
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '15px',
            color: 'var(--color-neutral-1, #FFFFFF)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            opacity: disabled ? 0.95 : 1,
          }}
        >
          {label}
        </span>
      </span>

      {effectiveUnderline ? (
        <span
          aria-hidden="true"
          style={{
            width: '105px',
            height: '3px',
            borderTopLeftRadius: '2px',
            borderTopRightRadius: '2px',
            background: 'var(--color-neutral-1, #FFFFFF)',
            display: 'block',
          }}
        />
      ) : null}
    </button>
  );
};

export default TabButton;
