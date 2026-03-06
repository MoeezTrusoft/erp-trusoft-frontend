const ChevronIcon = ({ direction = 'right', disabled = false }) => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
  >
    <path
      d="M2 1.5L7 5.5L2 9.5"
      stroke={disabled ? 'var(--color-neutral-5, #C3C3C3)' : 'var(--color-teal-10, #045F58)'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TabsPagination = ({
  prevDisabled = false,
  nextDisabled = false,
  onPrev,
  onNext,
  width = 70,
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        height: '23px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style,
      }}
      {...rest}
    >
      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Previous tab"
        style={{
          width: '23px',
          height: '23px',
          borderRadius: '3px',
          border: `1px solid ${prevDisabled ? 'var(--color-neutral-4, #D8D8D8)' : 'var(--color-teal-10, #045F58)'}`,
          background: 'var(--color-neutral-1, #FFFFFF)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          cursor: prevDisabled ? 'not-allowed' : 'pointer',
          boxSizing: 'border-box',
        }}
      >
        <ChevronIcon direction="left" disabled={prevDisabled} />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next tab"
        style={{
          width: '23px',
          height: '23px',
          borderRadius: '3px',
          border: `1px solid ${nextDisabled ? 'var(--color-neutral-4, #D8D8D8)' : 'var(--color-teal-10, #045F58)'}`,
          background: 'var(--color-neutral-1, #FFFFFF)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          cursor: nextDisabled ? 'not-allowed' : 'pointer',
          boxSizing: 'border-box',
        }}
      >
        <ChevronIcon direction="right" disabled={nextDisabled} />
      </button>
    </div>
  );
};

export default TabsPagination;
