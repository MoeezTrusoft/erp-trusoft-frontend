import { useState } from 'react';

const StarIcon = ({ fill = 'none', stroke = '#BDBFC2' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 2.6L14.75 8.17L20.9 9.06L16.45 13.4L17.5 19.52L12 16.63L6.5 19.52L7.55 13.4L3.1 9.06L9.25 8.17L12 2.6Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const RatingSelector = ({
  value,
  defaultValue = 2.5,
  onChange,
  max = 5,
  readOnly = false,
  className = '',
  style = {},
  ...rest
}) => {
  const isControlled = typeof value === 'number';
  const [internalValue, setInternalValue] = useState(defaultValue);
  const rating = isControlled ? value : internalValue;

  const setRating = (nextValue) => {
    const bounded = Math.max(0, Math.min(max, nextValue));

    if (!isControlled) {
      setInternalValue(bounded);
    }

    if (typeof onChange === 'function') {
      onChange(bounded);
    }
  };

  const handleStarClick = (index, event) => {
    if (readOnly) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const isHalf = clickX <= rect.width / 2;
    const nextValue = isHalf ? index + 0.5 : index + 1;

    setRating(nextValue);
  };

  return (
    <div
      className={className}
      style={{
        width: '193px',
        height: '55px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          background: '#069388',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: 1,
          color: 'var(--color-neutral-1, #FFFFFF)',
        }}
      >
        {rating.toFixed(1)}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {Array.from({ length: max }).map((_, index) => {
          const starNumber = index + 1;
          const activeAmount = Math.max(0, Math.min(1, rating - index));
          const fillPercent = Math.round(activeAmount * 100);

          return (
            <button
              key={starNumber}
              type="button"
              onClick={(event) => handleStarClick(index, event)}
              disabled={readOnly}
              aria-label={`Set rating to ${starNumber}`}
              style={{
                width: '24px',
                height: '24px',
                border: 'none',
                background: 'transparent',
                padding: 0,
                position: 'relative',
                cursor: readOnly ? 'default' : 'pointer',
              }}
            >
              <StarIcon fill="none" stroke="#BDBFC2" />

              {fillPercent > 0 ? (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: `${fillPercent}%`,
                    height: '24px',
                    overflow: 'hidden',
                  }}
                >
                  <StarIcon fill="#069388" stroke="#069388" />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RatingSelector;
