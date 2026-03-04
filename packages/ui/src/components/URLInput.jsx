import React, { forwardRef } from 'react';

const URLIcon = ({ disabled }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.24597 0.0226521C7.05624 0.0597954 6.78435 0.147767 6.62982 0.227918C6.32468 0.380401 6.2171 0.476192 5.20584 1.48493C4.22783 2.46043 4.22196 2.46629 4.22196 2.54644C4.22196 2.68524 4.26303 2.70479 4.58578 2.72825C4.91048 2.75171 5.09826 2.7869 5.37406 2.87878C5.50707 2.92374 5.59704 2.94329 5.62834 2.93547C5.65964 2.92765 5.95108 2.65201 6.37358 2.23366C6.77261 1.83681 7.10709 1.52012 7.15795 1.49079C7.48461 1.30312 7.89342 1.30898 8.1966 1.50252C8.32178 1.58072 8.49 1.76643 8.5526 1.8935C8.66018 2.11245 8.68365 2.38614 8.61323 2.61878C8.54282 2.85337 8.53304 2.8651 7.32812 4.07128C6.55158 4.84933 6.14082 5.24618 6.06844 5.29114C5.89827 5.3928 5.76135 5.4319 5.56183 5.43581C5.27821 5.43972 5.11782 5.37911 4.84984 5.16603C4.66598 5.01941 4.55839 4.97836 4.35692 4.97836C3.84444 4.97836 3.5393 5.50618 3.7799 5.97145C3.7975 6.00469 3.85814 6.07702 3.91291 6.13371C4.27477 6.48755 4.74226 6.71236 5.25669 6.77883C5.54227 6.81402 6.00585 6.76906 6.29534 6.67522C6.48312 6.61657 6.79022 6.45236 6.95844 6.32529C7.04059 6.26273 7.64891 5.66844 8.31201 5.00377C9.3174 3.99503 9.53648 3.76827 9.63037 3.6236C9.76924 3.41247 9.88074 3.16224 9.94724 2.91201C9.99614 2.73412 10.0001 2.69111 10.0001 2.32945C10.0001 1.96779 9.99614 1.92478 9.94724 1.74689C9.7223 0.910182 9.08855 0.276791 8.25724 0.0578403C8.09684 0.0167875 8.01273 0.00701284 7.73302 0.00114822C7.49439 -0.00276184 7.35747 0.00310278 7.24597 0.0226521Z" fill={disabled ? '#999999' : 'var(--color-neutral-8)'}/>
    <path d="M4.15313 3.22089C3.78344 3.26976 3.35115 3.44375 3.0558 3.66465C2.96386 3.73503 2.41422 4.27068 1.69636 4.99008C0.387777 6.30379 0.354525 6.34288 0.190219 6.72214C0.059165 7.02124 0.0141764 7.22846 0.00244026 7.57839C-0.00929588 7.92832 0.0200445 8.14531 0.117846 8.42878C0.192175 8.64968 0.246943 8.7572 0.383865 8.96638C0.728126 9.48638 1.25038 9.83436 1.87827 9.96534C2.0504 10.0005 2.12473 10.0044 2.40248 9.99662C2.7663 9.98684 2.98147 9.94188 3.26509 9.81872C3.6426 9.65646 3.67977 9.62518 4.77514 8.5363C5.78249 7.53343 5.78641 7.52952 5.78641 7.45132C5.78641 7.31252 5.74533 7.29102 5.42259 7.26756C5.09984 7.2441 4.91597 7.20891 4.62648 7.11703C4.49543 7.07402 4.39958 7.05252 4.3722 7.06034C4.34873 7.06816 4.01229 7.38876 3.625 7.77193C3.22401 8.17073 2.88366 8.49329 2.83281 8.52066C2.1482 8.90968 1.30711 8.39554 1.3521 7.61944C1.36188 7.42004 1.41469 7.26169 1.51054 7.12289C1.5477 7.0662 2.09734 6.50514 2.72914 5.87566C3.93014 4.6773 3.94187 4.66752 4.1766 4.59715C4.33308 4.55023 4.49347 4.54241 4.65191 4.57564C4.83773 4.61474 4.95901 4.67534 5.14092 4.82196C5.32283 4.96858 5.45193 5.01941 5.6397 5.01941C5.91355 5.01941 6.13849 4.88061 6.24803 4.64211C6.32627 4.47008 6.32822 4.25699 6.25194 4.09473C6.15023 3.87578 5.85291 3.6236 5.48322 3.44179C5.06463 3.23848 4.61279 3.1642 4.15313 3.22089Z" fill={disabled ? '#999999' : 'var(--color-neutral-8)'}/>
  </svg>
);

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
  focus: {
    background: 'bg-[#FFF5F580]',
    border: 'border-[#DD3838]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[#DD3838]',
    focusBorder: 'focus:border-[#DD3838]',
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
  variant7: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
  variant8: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
  variant9: {
    background: 'bg-[#B4E2DF66]',
    border: 'border-[var(--color-teal-10)]',
    text: 'text-gray-800',
    placeholder: 'placeholder-gray-600',
    focusRing: 'focus:ring-[var(--color-teal-10)]',
    focusBorder: 'focus:border-[var(--color-teal-10)]',
  },
};

const URLInput = forwardRef(
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
      showIcon = true,
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
          {/* URL Icon */}
          {showIcon && (
            <div className="absolute left-[12px] top-[15px] pointer-events-none w-[10px] h-[10px] flex items-center justify-center">
              <URLIcon disabled={disabled} />
            </div>
          )}

          <input
            ref={ref}
            id={name}
            name={name}
            type="url"
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
              paddingLeft: showIcon ? '28px' : '12px',
              ...style,
            }}
            className={`
              py-2 pr-3
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
              ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-text'}
              ${readOnly ? 'cursor-default' : ''}
              ${className}
            `}
            {...rest}
          />
        </div>

        {error && <p className={`text-xs text-red-600 ${errorClassName}`}>{error}</p>}
        {helpText && !error && (
          <p className={`text-xs text-gray-600 ${helpTextClassName}`}>{helpText}</p>
        )}
      </div>
    );
  }
);

URLInput.displayName = 'URLInput';

export default URLInput;
