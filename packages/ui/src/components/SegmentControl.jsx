import { useState } from 'react';

const SegmentControl = ({
  options = [
    { label: 'Day', value: 'day' },
    { label: 'Month', value: 'month' },
    { label: 'Week', value: 'week' },
  ],
  value,
  defaultValue,
  onChange,
  status = 'active',
  hoveredValue,
  disabled = false,
  className = '',
  style = {},
  ariaLabel = 'Segment control',
  ...rest
}) => {
  const isControlled = value !== undefined;
  const initialValue =
    defaultValue !== undefined
      ? defaultValue
      : options[0]
      ? options[0].value
      : undefined;

  const [internalValue, setInternalValue] = useState(initialValue);
  const selectedValue = isControlled ? value : internalValue;

  const resolvedStatus = disabled ? 'disabled' : String(status).toLowerCase();

  const handleSelect = (nextValue) => {
    if (resolvedStatus === 'disabled') return;
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    if (typeof onChange === 'function') {
      onChange(nextValue);
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={className}
      style={{
        width: '276px',
        maxWidth: '100%',
        height: '50px',
        background: 'var(--color-neutral-3, #EDEDED)',
        borderRadius: '12px',
        padding: '5px 6px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        ...style,
      }}
      {...rest}
    >
      {options.map((option) => {
        const isSelected = option.value === selectedValue;
        const isHovered =
          resolvedStatus === 'hover' &&
          option.value === hoveredValue &&
          !isSelected;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            disabled={resolvedStatus === 'disabled'}
            onClick={() => handleSelect(option.value)}
            style={{
              flex: 1,
              height: '40px',
              border: 'none',
              borderRadius: '6px',
              padding: '0 8px',
              background: isSelected
                ? '#069388'
                : isHovered
                ? 'var(--color-neutral-4, #D8D8D8)'
                : 'transparent',
              boxShadow: isSelected
                ? '0px 0px 5px 1px #63636380'
                : 'none',
              color: isSelected
                ? 'var(--color-white, #FFFFFF)'
                : resolvedStatus === 'disabled'
                ? 'var(--color-neutral-6, #AFAFAF)'
                : 'var(--color-black, #000000)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1,
              cursor: resolvedStatus === 'disabled' ? 'not-allowed' : 'pointer',
              transition: 'background-color 160ms ease, color 160ms ease, box-shadow 160ms ease',
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentControl;
