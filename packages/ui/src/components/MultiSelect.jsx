import { useMemo, useState } from 'react';

const DropdownIcon = () => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polygon points="0,7 5,0 10,7" fill="var(--color-neutral-10, #000000)" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M2 2L8 8" stroke="var(--color-neutral-8, #333333)" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8 2L2 8" stroke="var(--color-neutral-8, #333333)" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const MultiSelect = ({
  label = 'Field Label:',
  options = [],
  selectedValues,
  defaultSelectedValues = [],
  onChange,
  placeholder = 'Select options',
  width = 360,
  maxVisibleChips,
  showChipsContainerArrow = false,
  className = '',
  style = {},
  ...rest
}) => {
  const isControlled = Array.isArray(selectedValues);
  const [internalValues, setInternalValues] = useState(defaultSelectedValues);
  const [isOpen, setIsOpen] = useState(false);

  const values = isControlled ? selectedValues : internalValues;

  const selectedOptions = useMemo(
    () => options.filter((option) => values.includes(option.value)),
    [options, values]
  );

  const visibleChips =
    typeof maxVisibleChips === 'number' ? selectedOptions.slice(0, maxVisibleChips) : selectedOptions;

  const hiddenCount = selectedOptions.length - visibleChips.length;

  const updateValues = (nextValues) => {
    if (!isControlled) {
      setInternalValues(nextValues);
    }
    if (typeof onChange === 'function') {
      onChange(nextValues);
    }
  };

  const toggleValue = (value) => {
    const exists = values.includes(value);
    const nextValues = exists ? values.filter((v) => v !== value) : [ ...values, value ];
    updateValues(nextValues);
  };

  const removeChip = (value) => {
    updateValues(values.filter((v) => v !== value));
  };

  return (
    <div className={className} style={{ width: `${width}px`, maxWidth: '100%', ...style }} {...rest}>
      <label
        style={{
          display: 'block',
          marginBottom: '8px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '15px',
          color: 'var(--color-neutral-10, #000000)',
        }}
      >
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: `${width}px`,
          maxWidth: '100%',
          height: '40px',
          borderRadius: '6px',
          border: '1px solid #89B8B4',
          background: '#E1F3F2',
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'var(--color-neutral-8, #333333)',
            opacity: selectedOptions.length ? 1 : 0.8,
          }}
        >
          {selectedOptions.length ? `${selectedOptions.length} selected` : placeholder}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <DropdownIcon />
        </span>
      </button>

      {isOpen ? (
        <div
          style={{
            marginTop: '6px',
            border: '1px solid var(--color-neutral-5, #C3C3C3)',
            borderRadius: '6px',
            background: 'var(--color-neutral-1, #FFFFFF)',
            maxHeight: '180px',
            overflowY: 'auto',
          }}
        >
          {options.map((option) => {
            const checked = values.includes(option.value);

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleValue(option.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  background: checked ? 'var(--color-teal-1, #B4E2DF)' : 'transparent',
                  textAlign: 'left',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '18px',
                  color: 'var(--color-neutral-10, #000000)',
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        style={{
          width: `${width}px`,
          maxWidth: '100%',
          minHeight: '24px',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          paddingRight: showChipsContainerArrow ? '8px' : 0,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {visibleChips.map((option) => (
            <span
              key={option.value}
              style={{
                height: '24px',
                borderRadius: '100px',
                border: '1px solid var(--color-neutral-6, #AFAFAF)',
                background: 'var(--color-teal-3, #64E2D4)',
                paddingLeft: '6px',
                paddingRight: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                boxSizing: 'border-box',
              }}
            >
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: 'var(--color-neutral-8, #333333)',
                }}
              >
                {option.label}
              </span>

              <button
                type="button"
                onClick={() => removeChip(option.value)}
                style={{
                  width: '16px',
                  height: '16px',
                  border: 'none',
                  borderRadius: '50%',
                  background: 'var(--color-neutral-1, #FFFFFF)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <CloseIcon />
              </button>
            </span>
          ))}

          {hiddenCount > 0 ? (
            <span
              style={{
                height: '24px',
                borderRadius: '4px',
                border: '1px solid var(--color-neutral-6, #AFAFAF)',
                background: 'var(--color-teal-3, #64E2D4)',
                padding: '0 10px',
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '15px',
                color: 'var(--color-neutral-8, #333333)',
                boxSizing: 'border-box',
              }}
            >
              +{hiddenCount}
            </span>
          ) : null}
        </div>

        {showChipsContainerArrow ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <DropdownIcon />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default MultiSelect;
