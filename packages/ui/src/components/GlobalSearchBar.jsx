import { useState } from 'react';

const SearchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="6.75"
      cy="6.75"
      r="5"
      stroke="var(--color-neutral-8, #333333)"
      strokeWidth="1.8"
    />
    <path
      d="M10.6 10.6L13.6 13.6"
      stroke="var(--color-neutral-8, #333333)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ClearIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.15"
      stroke="var(--color-neutral-8, #333333)"
      strokeWidth="1.3"
    />
    <path
      d="M5.5 5.5L9.5 9.5"
      stroke="var(--color-neutral-8, #333333)"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M9.5 5.5L5.5 9.5"
      stroke="var(--color-neutral-8, #333333)"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const GlobalSearchBar = ({
  value,
  defaultValue = '',
  onChange,
  onClear,
  placeholder = 'Search here',
  disabled = false,
  showClearButton = true,
  className = '',
  style = {},
  inputProps = {},
  ariaLabel = 'Global search',
  ...rest
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputValue = isControlled ? value : internalValue;

  const handleChange = (event) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  const handleClear = () => {
    if (disabled) return;

    if (!isControlled) {
      setInternalValue('');
    }

    if (typeof onClear === 'function') {
      onClear();
    }
  };

  return (
    <div
      className={className}
      style={{
        width: '406px',
        maxWidth: '100%',
        height: '40px',
        borderRadius: '97px',
        border: '1px solid var(--color-neutral-6, #AFAFAF)',
        background: 'var(--color-neutral-3, #EDEDED)',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        gap: '10px',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: '15px',
          height: '15px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <SearchIcon />
      </span>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={ariaLabel}
        style={{
          width: '100%',
          border: 'none',
          background: 'transparent',
          outline: 'none',
          color: 'var(--color-neutral-10, #000000)',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '22px',
        }}
        {...inputProps}
      />

      {showClearButton ? (
        <button
          type="button"
          onClick={handleClear}
          disabled={disabled}
          aria-label="Clear search"
          style={{
            width: '15px',
            height: '15px',
            border: 'none',
            padding: 0,
            background: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: disabled ? 'not-allowed' : 'pointer',
            flexShrink: 0,
          }}
        >
          <ClearIcon />
        </button>
      ) : null}
    </div>
  );
};

export default GlobalSearchBar;
