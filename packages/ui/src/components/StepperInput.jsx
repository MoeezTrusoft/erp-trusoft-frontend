import { useState } from 'react';

const StepperInput = ({
  value,
  defaultValue = 0,
  onChange,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  disabled = false,
  className = '',
  style = {},
  ariaLabel = 'Stepper input',
  ...rest
}) => {
  const isControlled = typeof value === 'number';
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : internalValue;

  const commitValue = (next) => {
    const clamped = Math.min(max, Math.max(min, next));

    if (!isControlled) {
      setInternalValue(clamped);
    }

    if (typeof onChange === 'function') {
      onChange(clamped);
    }
  };

  const decrease = () => {
    if (disabled) return;
    commitValue(currentValue - step);
  };

  const increase = () => {
    if (disabled) return;
    commitValue(currentValue + step);
  };

  return (
    <div
      className={className}
      style={{
        width: '78px',
        height: '25px',
        borderRadius: '4px',
        background: disabled ? '#06938861' : '#069388',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    >
      <button
        type="button"
        onClick={decrease}
        disabled={disabled}
        aria-label={`${ariaLabel} decrease`}
        style={{
          width: '26px',
          height: '25px',
          border: 'none',
          background: 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          padding: 0,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: '10px',
            height: '1.83px',
            background: 'var(--color-neutral-10, #000000)',
            display: 'block',
            borderRadius: '1px',
          }}
        />
      </button>

      <div
        style={{
          width: '26px',
          height: '19px',
          borderRadius: '2px',
          border: '1px solid var(--color-teal-10, #045F58)',
          background: 'var(--color-neutral-1, #FFFFFF)',
          boxSizing: 'border-box',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: 1,
          color: 'var(--color-neutral-10, #000000)',
        }}
      >
        {currentValue}
      </div>

      <button
        type="button"
        onClick={increase}
        disabled={disabled}
        aria-label={`${ariaLabel} increase`}
        style={{
          width: '26px',
          height: '25px',
          border: 'none',
          background: 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          padding: 0,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: '10px',
            height: '10px',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: '0px',
              top: '4.08px',
              width: '10px',
              height: '1.83px',
              background: 'var(--color-neutral-10, #000000)',
              borderRadius: '1px',
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: '4.08px',
              top: '0px',
              width: '1.83px',
              height: '10px',
              background: 'var(--color-neutral-10, #000000)',
              borderRadius: '1px',
            }}
          />
        </span>
      </button>
    </div>
  );
};

export default StepperInput;
