import React, { forwardRef } from 'react';



const currencyVariants = {
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

// Currency icon SVG component
const CurrencyIcon = ({ disabled }) => (
  <svg
    width="7.786833763122559"
    height="14.997199058532715"
    viewBox="0 0 8 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: disabled ? 0.5 : 1,
    }}
  >
    <path
      d="M3.14381 0.0382929C2.99147 0.105676 2.97389 0.181848 2.95631 0.90841C2.93581 1.73165 2.96803 1.67306 2.41139 1.88986C1.96901 2.06271 1.76979 2.16232 1.47389 2.35568C0.975844 2.67794 0.559829 3.1672 0.348891 3.6711C0.00611769 4.49435 0.000258319 5.48165 0.331313 6.1965C0.477797 6.51876 0.650649 6.75314 0.961196 7.06075C1.4651 7.5588 1.95436 7.84005 3.20534 8.35567C4.2278 8.77755 4.50612 8.92989 4.77858 9.22286C4.99245 9.45138 5.07741 9.65646 5.07741 9.94357C5.07741 10.1516 5.06569 10.2043 4.98073 10.3742C4.82545 10.6906 4.53249 10.9016 4.06666 11.0334C3.75612 11.1184 3.0442 11.1067 2.56374 11.0041C2.05397 10.8957 1.60573 10.7463 1.16334 10.5412C0.656508 10.3039 0.536391 10.3098 0.419204 10.594C0.372329 10.7053 0.129165 11.5344 0.0383443 11.8918C-0.0261089 12.1379 -0.00853073 12.3371 0.0852193 12.4367C0.322524 12.6916 1.16334 12.9904 2.11842 13.1662C2.62233 13.257 2.71022 13.2863 2.75416 13.3654C2.78053 13.4094 2.79811 13.6467 2.80983 14.0598C2.82741 14.757 2.84499 14.8332 3.02077 14.9387C3.10573 14.9914 3.17311 14.9973 3.78834 14.9973C4.7903 14.9973 4.76686 15.0178 4.77272 14.1008C4.77272 13.7639 4.78737 13.4328 4.80495 13.3625C4.84889 13.1838 4.97487 13.0871 5.31764 12.9758C5.71022 12.8469 5.99147 12.7121 6.27565 12.5246C7.70241 11.5754 8.18874 9.78829 7.43288 8.2795C7.27174 7.95724 7.07545 7.69357 6.79127 7.40939C6.32252 6.94064 5.92995 6.71798 4.53249 6.12325C3.14674 5.53439 2.7776 5.2297 2.7776 4.68185C2.7776 4.33907 2.97096 4.06661 3.3401 3.89376C3.60084 3.77071 3.85866 3.73556 4.41823 3.75607C5.09791 3.7795 5.56081 3.8879 6.20241 4.17208C6.52174 4.31271 6.636 4.33028 6.73854 4.24825C6.83522 4.17208 6.89088 4.02267 7.11354 3.26095C7.30104 2.62521 7.32155 2.467 7.23073 2.32052C7.12233 2.13888 6.41627 1.86935 5.70729 1.73458C5.17116 1.63497 5.00709 1.58224 4.93678 1.48849C4.88698 1.42111 4.87819 1.33614 4.86061 0.820519C4.82838 -0.0261602 4.86061 0.000206947 3.87624 0.000206947C3.40749 0.000206947 3.20827 0.00899601 3.14381 0.0382929Z"
      fill={disabled ? '#999999' : 'var(--color-neutral-8)'}
    />
  </svg>
);

const CurrencyInput = forwardRef(
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
    const variantStyles = currencyVariants[variant] || currencyVariants.inactive;

    // Determine actual variant to use based on state
    const getActiveVariant = () => {
      if (disabled) return currencyVariants.disabled;
      if (readOnly) return currencyVariants.readonly;
      if (error) return currencyVariants.error;
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
            step="0.01"
            style={{
              width: '360px',
              height: '40px',
              borderRadius: '6px',
              paddingLeft: '35px',
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
              top: '12.5px',
              left: '12px',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CurrencyIcon disabled={disabled || readOnly} />
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

CurrencyInput.displayName = 'CurrencyInput';

export default CurrencyInput;
