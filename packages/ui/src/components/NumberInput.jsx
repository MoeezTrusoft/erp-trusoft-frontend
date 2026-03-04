import React, { forwardRef } from 'react';


const inputVariants = {
  inactive: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[#045F5866]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
  active: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
  disabled: {
    background: 'bg-[#D2EEEC66]',
    border: 'border-[#33333366]',
    text: 'text-gray-500',
    placeholder: 'placeholder-gray-400',
    focusRing: 'focus:ring-[var(--color-neutral-8)]',
    focusBorder: 'focus:border-[var(--color-neutral-8)]',
  },
  readonly: {
    background: 'bg-[#B4E2DF99]',
    border: 'border-[#A3A9A9]',
    text: 'text-gray-700',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[#A3A9A9]',
    focusBorder: 'focus:border-[#A3A9A9]',
  },
  error: {
    background: 'bg-[#FFF5F580]',
    border: 'border-[#DD3838]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[#DD3838]',
    focusBorder: 'focus:border-[#DD3838]',
  },
  'error-text': {
    background: 'bg-[#FFF5F580]',
    border: 'border-[#DD3838]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[#DD3838]',
    focusBorder: 'focus:border-[#DD3838]',
  },
  helper: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
  required: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
  linear: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
};

const NumberInput = forwardRef(
  (
    {
      name,
      value,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      disabled = false,
      readOnly = false,
      error,
      helpText,
      variant = 'inactive',
      required = false,
      min,
      max,
      step = '1',
      className = '',
      containerClassName = '',
      labelClassName = '',
      errorClassName = '',
      helpTextClassName = '',
      style = {},
      ...rest
    },
    ref
  ) => {
    const variantStyles = inputVariants[variant] || inputVariants.inactive;

    // Determine actual variant to use based on state
    const getActiveVariant = () => {
      if (disabled) return inputVariants.disabled;
      if (readOnly) return inputVariants.readonly;
      if (error) return inputVariants.error;
      return variantStyles;
    };

    const activeVariant = getActiveVariant();

    const handleIncrement = () => {
      if (!disabled && !readOnly) {
        const currentValue = parseFloat(value) || 0;
        const stepValue = parseFloat(step) || 1;
        const maxValue = max ? parseFloat(max) : undefined;
        const newValue = currentValue + stepValue;
        
        if (maxValue === undefined || newValue <= maxValue) {
          onChange({ target: { value: newValue.toString() } });
        }
      }
    };

    const handleDecrement = () => {
      if (!disabled && !readOnly) {
        const currentValue = parseFloat(value) || 0;
        const stepValue = parseFloat(step) || 1;
        const minValue = min ? parseFloat(min) : undefined;
        const newValue = currentValue - stepValue;
        
        if (minValue === undefined || newValue >= minValue) {
          onChange({ target: { value: newValue.toString() } });
        }
      }
    };

    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        <div className="relative">
          <input
            ref={ref}
            id={name}
            name={name}
            type="number"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            min={min}
            max={max}
            step={step}
            style={{
              width: '360px',
              height: '40px',
              borderRadius: '6px',
              paddingRight: '45px',
              ...style,
            }}
            className={`
              px-3 py-2 
              border border-[1px]
              text-sm
              font-normal
              transition-all duration-200
              focus:outline-none focus:ring-2
              ${activeVariant.background}
              ${activeVariant.border}
              ${activeVariant.text}
              ${activeVariant.placeholder}
              ${activeVariant.focusRing}
              ${activeVariant.focusBorder}
              ${disabled ? 'cursor-not-allowed opacity-60' : ''}
              ${readOnly ? 'cursor-default' : ''}
              [&::-webkit-outer-spin-button]:hidden
              [&::-webkit-inner-spin-button]:hidden
              ${className}
            `}
            {...rest}
          />

          {/* Custom Spinner Controls */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
            {/* Up Arrow */}
            <button
              type="button"
              disabled={disabled || readOnly}
              onClick={handleIncrement}
              className={`flex items-center justify-center w-3 h-2 transition-all ${
                disabled || readOnly ? 'cursor-not-allowed opacity-50' : 'hover:opacity-70'
              }`}
              aria-label="Increment"
            >
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="0,7 5,0 10,7"
                  fill={disabled || readOnly ? '#999999' : '#000000'}
                />
              </svg>
            </button>

            {/* Down Arrow */}
            <button
              type="button"
              disabled={disabled || readOnly}
              onClick={handleDecrement}
              className={`flex items-center justify-center w-3 h-2 transition-all ${
                disabled || readOnly ? 'cursor-not-allowed opacity-50' : 'hover:opacity-70'
              }`}
              aria-label="Decrement"
            >
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(180deg)' }}
              >
                <polygon
                  points="0,7 5,0 10,7"
                  fill={disabled || readOnly ? '#999999' : '#000000'}
                />
              </svg>
            </button>
          </div>
        </div>

        {error && (
          <p className={`text-xs text-red-600 ${errorClassName}`}>{error}</p>
        )}
        {helpText && !error && (
          <p className={`text-xs text-gray-600 ${helpTextClassName}`}>{helpText}</p>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;
