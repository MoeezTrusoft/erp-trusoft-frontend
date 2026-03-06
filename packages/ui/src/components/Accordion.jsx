import { useState } from 'react';

const Chevron = ({ open }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      transform: `rotate(${open ? -180 : 0}deg)`,
      transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
      transformOrigin: 'center',
      display: 'block',
    }}
  >
    <path d="M1 1L5 5L9 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Accordion = ({
  title = 'Name of user || All',
  content = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorezx',
  defaultOpen = false,
  open,
  onToggle,
  width = 944,
  collapsedHeight = 45,
  expandedHeight = 90,
  background = 'rgba(180, 226, 223, 0.4)',
  borderColor = 'var(--color-teal-10, #045F58)',
  className = '',
  style = {},
  ...rest
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = typeof open === 'boolean';
  const isOpen = isControlled ? open : internalOpen;

  const toggle = () => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    if (onToggle) onToggle(next);
  };

  const normalizedWidth = typeof width === 'number' ? `${width}px` : width;

  return (
    <div
      className={className}
      style={{
        width: normalizedWidth,
        height: isOpen ? `${expandedHeight}px` : `${collapsedHeight}px`,
        borderRadius: '6px',
        border: `1px solid ${borderColor}`,
        background,
        opacity: 1,
        overflow: 'hidden',
        boxSizing: 'border-box',
        transition: 'height 420ms cubic-bezier(0.22, 1, 0.36, 1)',
        ...style,
      }}
      {...rest}
    >
      <button
        type="button"
        onClick={toggle}
        style={{
          width: '100%',
          height: `${collapsedHeight - 2}px`,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          boxSizing: 'border-box',
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            width: '146px',
            height: '24px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: 0,
            color: 'var(--color-neutral-9, #2B2B2B)',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {title}
        </span>
        <Chevron open={isOpen} />
      </button>

      <div
        style={{
          height: `${expandedHeight - collapsedHeight}px`,
          padding: '4px 24px 10px 24px',
          boxSizing: 'border-box',
          opacity: isOpen ? 1 : 0,
          transform: `translateY(${isOpen ? 0 : -4}px)`,
          transition: 'opacity 260ms ease, transform 260ms ease',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '150%',
            color: 'var(--color-neutral-10, #111111)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
