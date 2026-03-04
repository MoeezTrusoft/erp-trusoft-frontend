import React, { forwardRef } from 'react';


const percentageVariants = {
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

// Percentage icon SVG component
const PercentageIcon = ({ disabled }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: disabled ? 0.5 : 1,
    }}
  >
    <path d="M1.63305 0.0390248C0.787941 0.262182 0.15411 0.955142 0.0191279 1.8047C-0.0199974 2.04744 0.00347781 2.51137 0.0660783 2.73844C0.257792 3.4314 0.766422 3.9795 1.43938 4.22028C2.54271 4.6157 3.7732 4.06759 4.20554 2.98704C4.30922 2.72669 4.34443 2.55835 4.35617 2.25102C4.36791 1.92999 4.34052 1.72053 4.25249 1.45822C4.02556 0.775051 3.45042 0.232819 2.7579 0.0488124C2.58771 0.00378942 2.54076 -0.000125408 2.17102 0.00183201C1.84628 0.00183201 1.74455 0.00966215 1.63305 0.0390248ZM2.39404 1.58546C2.53489 1.63832 2.66596 1.75772 2.73247 1.89475C2.80681 2.04744 2.81072 2.27059 2.73834 2.41741C2.67769 2.54269 2.55836 2.66014 2.43512 2.72278C2.2884 2.79325 2.06538 2.79129 1.91279 2.71495C1.54502 2.53486 1.45112 2.06114 1.72304 1.75381C1.88932 1.56393 2.15537 1.49737 2.39404 1.58546Z" fill={disabled ? '#999999' : 'var(--color-neutral-8)'}/>
    <path d="M8.74194 0.0371923C8.69304 0.0567675 8.61283 0.0998335 8.56588 0.133111C8.51893 0.166389 6.60374 2.07105 4.311 4.36918C0.682125 8.00428 0.136327 8.55826 0.0913326 8.65418C0.013082 8.82057 -0.00648068 8.92627 0.00330065 9.13769C0.00916945 9.30799 0.0169945 9.34322 0.0815513 9.48025C0.179365 9.68187 0.320216 9.82282 0.521711 9.92069C0.662562 9.98725 0.68995 9.99312 0.879708 9.99899C1.11055 10.0068 1.26314 9.96963 1.42746 9.86588C1.47637 9.83456 3.39547 7.92598 5.69408 5.62394C9.44424 1.86747 9.87853 1.42703 9.9294 1.32132C9.98222 1.2117 9.98613 1.1843 9.992 0.923947L9.99982 0.642065L9.9294 0.497209C9.83941 0.305372 9.69269 0.158559 9.50293 0.0685129C9.36208 0 9.36012 0 9.09603 0C8.89062 0.00195694 8.81237 0.00978756 8.74194 0.0371923Z" fill={disabled ? '#999999' : 'var(--color-neutral-8)'}/>
    <path d="M7.52074 5.65139C7.39749 5.66901 7.15296 5.73752 7.01015 5.79429C6.36654 6.05073 5.89313 6.59883 5.70924 7.29766C5.65251 7.51103 5.63685 7.95343 5.67989 8.19616C5.82661 9.03594 6.43697 9.70737 7.27034 9.94031C7.44836 9.98925 7.48944 9.99316 7.83374 9.99316C8.18 9.99316 8.21913 9.98925 8.40106 9.93835C9.15813 9.7289 9.74697 9.14164 9.94651 8.39583C9.9915 8.22748 9.99542 8.17659 9.99542 7.82032C9.99542 7.46405 9.9915 7.41316 9.94651 7.24481C9.79588 6.68105 9.41245 6.19363 8.89013 5.90196C8.71797 5.80408 8.42649 5.70229 8.22108 5.66705C8.06654 5.63965 7.66746 5.63182 7.52074 5.65139ZM8.10566 7.27026C8.41084 7.41903 8.53995 7.81053 8.3815 8.1022C8.18587 8.46239 7.73006 8.54656 7.42684 8.27838C7.26251 8.13548 7.18426 7.88688 7.23512 7.67938C7.28403 7.48167 7.4601 7.29375 7.65572 7.23111C7.77897 7.19 7.97655 7.20762 8.10566 7.27026Z" fill={disabled ? '#999999' : 'var(--color-neutral-8)'}/>
  </svg>
);

const PercentageInput = forwardRef(
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
    const variantStyles = percentageVariants[variant] || percentageVariants.inactive;

    // Determine actual variant to use based on state
    const getActiveVariant = () => {
      if (disabled) return percentageVariants.disabled;
      if (readOnly) return percentageVariants.readonly;
      if (error) return percentageVariants.error;
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
            min="0"
            max="100"
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
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: '338px',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PercentageIcon disabled={disabled || readOnly} />
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

PercentageInput.displayName = 'PercentageInput';

export default PercentageInput;
