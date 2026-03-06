import { useState } from 'react';

const RadioButton = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 15,
  className = '',
  style = {},
  ariaLabel = 'Radio button',
  ...rest
}) => {
  const isControlled = typeof checked === 'boolean';
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    if (!isControlled) {
      setInternalChecked(true);
    }
    if (typeof onChange === 'function') {
      onChange(true);
    }
  };

  return (
    <button
      type="button"
      role="radio"
      aria-label={ariaLabel}
      aria-checked={isChecked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={handleToggle}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: isChecked
          ? '1.5px solid var(--color-teal-10, #045F58)'
          : '1.5px solid var(--color-teal-10, #045F58)',
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
        <span
          aria-hidden="true"
          style={{
            width: `${Math.round(size * 0.54)}px`,
            height: `${Math.round(size * 0.54)}px`,
            borderRadius: '50%',
            background: 'var(--color-neutral-1, #FFFFFF)',
          }}
        />
      ) : null}
    </button>
  );
};

export default RadioButton;
