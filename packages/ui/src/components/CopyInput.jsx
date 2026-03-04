import React, { forwardRef, useState } from 'react';


const copyVariants = {
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
  copied: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
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

// Copy icon SVG component
const CopyIcon = ({ disabled }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: disabled ? 0.5 : 1,
    }}
  >
    <rect
      x="0"
      y="0"
      width="16"
      height="16"
      rx="2"
      fill={disabled ? '#999999' : 'var(--color-neutral-8)'}
    />
    <path
      d="M4 2.5H1.5V14H9.5V11.5M4 2.5V6.5H9.5V14M4 2.5H9.5"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M5.5 6.5H12V13.5H5.5V6.5Z"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const CopyInput = forwardRef(
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
      onCopy,
      ...rest
    },
    ref
  ) => {
    const [isCopied, setIsCopied] = useState(false);

    const variantStyles = copyVariants[variant] || copyVariants.inactive;

    // Determine actual variant to use based on state
    const getActiveVariant = () => {
      if (disabled) return copyVariants.disabled;
      if (readOnly) return copyVariants.readonly;
      if (isCopied) return copyVariants.copied;
      if (error) return copyVariants.error;
      return variantStyles;
    };

    const activeVariant = getActiveVariant();

    const handleCopy = () => {
      if (value) {
        navigator.clipboard.writeText(value).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
          onCopy?.();
        });
      }
    };

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
            ref={ref}
            id={name}
            name={name}
            type="text"
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
            `}
            {...rest}
          />
          <button
            type="button"
            onClick={handleCopy}
            disabled={disabled || readOnly || !value}
            style={{
              position: 'absolute',
              top: '17.07px',
              left: '338.41px',
              background: 'none',
              border: 'none',
              padding: '0',
              cursor: disabled || readOnly || !value ? 'not-allowed' : 'pointer',
              opacity: disabled || readOnly ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CopyIcon disabled={disabled || readOnly} />
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

CopyInput.displayName = 'CopyInput';

export default CopyInput;
