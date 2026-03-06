import { useState } from 'react';

const Checkbox = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 15,
  className = '',
  style = {},
  ariaLabel = 'Checkbox',
  ...rest
}) => {
  const isControlled = typeof checked === 'boolean';
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const next = !isChecked;

    if (!isControlled) {
      setInternalChecked(next);
    }

    if (typeof onChange === 'function') {
      onChange(next);
    }
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-label={ariaLabel}
      aria-checked={isChecked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={handleToggle}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '3px',
        border: '1.5px solid var(--color-teal-10, #045F58)',
        background: isChecked
          ? 'var(--color-teal-10, #045F58)'
          : 'var(--color-neutral-1, #FFFFFF)',
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {isChecked ? (
        <svg
          width="7"
          height="6"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1.5 6.5L5.3 10.2L12.5 2"
            stroke="var(--color-neutral-1, #FFFFFF)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
};

export default Checkbox;
