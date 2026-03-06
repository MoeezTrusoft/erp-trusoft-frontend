import { useState } from 'react';

const sizeConfig = {
  standard: {
    width: 40,
    height: 20,
    thumb: 14,
    paddingX: 3,
  },
  small: {
    width: 32,
    height: 16,
    thumb: 10,
    paddingX: 3,
  },
};

const Switch = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  status = 'default',
  size = 'standard',
  className = '',
  style = {},
  id,
  name,
  ariaLabel = 'Toggle switch',
  ...rest
}) => {
  const isControlled = typeof checked === 'boolean';
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internalChecked;

  const resolvedSize = sizeConfig[size] ? size : 'standard';
  const cfg = sizeConfig[resolvedSize];

  const resolvedStatus = disabled ? 'disabled' : String(status).toLowerCase();

  const getTrackColor = () => {
    if (isChecked) {
      if (resolvedStatus === 'disabled') return 'var(--color-teal-1, #B4E2DF)';
      if (resolvedStatus === 'hover' || resolvedStatus === 'focus') {
        return 'var(--color-teal-10, #045F58)';
      }
      return '#069388';
    }

    if (resolvedStatus === 'disabled') return 'var(--color-neutral-4, #D8D8D8)';
    if (resolvedStatus === 'hover' || resolvedStatus === 'focus') {
      return 'var(--color-neutral-6, #AFAFAF)';
    }
    return 'var(--color-neutral-5, #C3C3C3)';
  };

  const focusBorder =
    resolvedStatus === 'focus' ? '2px solid var(--color-teal-1, #B4E2DF)' : 'none';

  const translateX = isChecked
    ? `${cfg.width - cfg.paddingX * 2 - cfg.thumb}px`
    : '0px';

  const handleToggle = () => {
    if (disabled) return;
    const nextValue = !isChecked;

    if (!isControlled) {
      setInternalChecked(nextValue);
    }

    if (typeof onChange === 'function') {
      onChange(nextValue);
    }
  };

  return (
    <button
      id={id}
      name={name}
      type="button"
      role="switch"
      aria-label={ariaLabel}
      aria-checked={isChecked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={handleToggle}
      className={className}
      style={{
        width: `${cfg.width}px`,
        height: `${cfg.height}px`,
        borderRadius: '400px',
        border: focusBorder,
        paddingLeft: `${cfg.paddingX}px`,
        paddingRight: `${cfg.paddingX}px`,
        background: getTrackColor(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxSizing: 'border-box',
        transition: 'background-color 180ms ease',
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          width: `${cfg.thumb}px`,
          height: `${cfg.thumb}px`,
          borderRadius: '50%',
          background: 'var(--color-white, #FFFFFF)',
          transform: `translateX(${translateX})`,
          transition: 'transform 180ms ease',
        }}
      />
    </button>
  );
};

export default Switch;
