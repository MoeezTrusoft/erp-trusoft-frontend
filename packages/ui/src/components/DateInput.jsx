import React, { forwardRef, useRef } from 'react';


const dateVariants = {
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
  error: {
    background: 'bg-[#FFF5F580]',
    border: 'border-[#DD3838]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[#DD3838]',
    focusBorder: 'focus:border-[#DD3838]',
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

// Calendar icon SVG component
const CalendarIcon = ({ disabled }) => (
  <svg
    width="10"
    height="11.25"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: disabled ? 0.5 : 1,
    }}
  >
    <path
      d="M3.125 9.51261V9.46427M5.9375 9.51261V9.46427M5.9375 6.89285V6.84451M8.4375 6.89285V6.84451M1.25 4.32141H10M2.38095 0.625V1.5894M8.75 0.625V1.58928M8.75 1.58928H2.5C1.46447 1.58928 0.625 2.45273 0.625 3.51784V9.94644C0.625 11.0116 1.46447 11.875 2.5 11.875H8.75C9.78553 11.875 10.625 11.0116 10.625 9.94644L10.625 3.51784C10.625 2.45273 9.78553 1.58928 8.75 1.58928Z"
      stroke={disabled ? '#999999' : '#000000'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DateInput = forwardRef(
  (
    {
      label,
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
    const internalRef = useRef(null);
    const inputRef = ref || internalRef;

    const variantStyles = dateVariants[variant] || dateVariants.inactive;

    // Determine actual variant to use based on state
    const getActiveVariant = () => {
      if (disabled) return dateVariants.disabled;
      if (readOnly) return dateVariants.readonly;
      if (error) return dateVariants.error;
      return variantStyles;
    };

    const activeVariant = getActiveVariant();

    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={name}
            className={`text-sm font-medium text-gray-700 ${
              required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''
            } ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <div className="relative inline-block">
          <input
            ref={inputRef}
            id={name}
            name={name}
            type="date"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            style={{
              width: '360px',
              height: '40px',
              borderRadius: '6px',
              paddingRight: '50px',
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
              ${className}
              [&::-webkit-calendar-picker-indicator]:hidden
            `}
            {...rest}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.showPicker?.()}
            disabled={disabled || readOnly}
            style={{
              position: 'absolute',
              top: '12px',
              left: '333px',
              background: 'none',
              border: 'none',
              padding: '0',
              cursor: disabled || readOnly ? 'not-allowed' : 'pointer',
              opacity: disabled || readOnly ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CalendarIcon disabled={disabled || readOnly} />
          </button>
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

DateInput.displayName = 'DateInput';

export default DateInput;
