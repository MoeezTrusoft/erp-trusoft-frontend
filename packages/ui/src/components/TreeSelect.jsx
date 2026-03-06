import { useMemo, useState } from 'react';

const TriggerArrowIcon = ({ open }) => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 150ms ease' }}
    aria-hidden="true"
  >
    <polygon points="0,7 5,0 10,7" fill="var(--color-neutral-10, #000000)" />
  </svg>
);

const NodeArrowIcon = ({ expanded }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {expanded ? (
      <path
        d="M4 7L9 12L14 7"
        stroke="var(--color-neutral-8, #333333)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M7 4L12 9L7 14"
        stroke="var(--color-neutral-8, #333333)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const defaultItems = [
  {
    id: 'item-1',
    label: 'Lorem ipsum dolor sit amet',
    children: [
      { id: 'item-1-1', label: 'Lorem ipsum' },
      { id: 'item-1-2', label: 'Lorem ipsum' },
      { id: 'item-1-3', label: 'Lorem ipsum' },
    ],
  },
  { id: 'item-2', label: 'Lorem ipsum dolor sit amet' },
  { id: 'item-3', label: 'Lorem ipsum dolor sit amet' },
];

const TreeSelect = ({
  items = defaultItems,
  value,
  onChange,
  placeholder = '',
  open,
  defaultOpen = true,
  onOpenChange,
  defaultExpandedIds = ['item-1'],
  className = '',
  style = {},
  triggerStyle = {},
  panelStyle = {},
  ...rest
}) => {
  const isOpenControlled = typeof open === 'boolean';
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isOpenControlled ? open : internalOpen;

  const [expandedIds, setExpandedIds] = useState(() => new Set(defaultExpandedIds));

  const displayLabel = useMemo(() => {
    if (!value) return placeholder;

    for (const item of items) {
      if (item.value === value || item.id === value) return item.label;
      if (item.children) {
        const child = item.children.find((node) => node.value === value || node.id === value);
        if (child) return child.label;
      }
    }

    return placeholder;
  }, [items, placeholder, value]);

  const toggleOpen = () => {
    const nextOpen = !isOpen;
    if (!isOpenControlled) {
      setInternalOpen(nextOpen);
    }
    if (typeof onOpenChange === 'function') {
      onOpenChange(nextOpen);
    }
  };

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSelect = (node) => {
    if (typeof onChange === 'function') {
      onChange(node.value || node.id, node);
    }
  };

  return (
    <div
      className={className}
      style={{ width: '360px', maxWidth: '100%', ...style }}
      {...rest}
    >
      <button
        type="button"
        onClick={toggleOpen}
        style={{
          width: '360px',
          maxWidth: '100%',
          height: '40px',
          borderRadius: '6px',
          border: '1px solid var(--color-teal-10, #045F58)',
          background: '#E1F3F2',
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          cursor: 'pointer',
          ...triggerStyle,
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'var(--color-neutral-10, #000000)',
          }}
        >
          {displayLabel}
        </span>

        <span
          style={{
            width: '10px',
            height: '7px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '2px',
          }}
        >
          <TriggerArrowIcon open={isOpen} />
        </span>
      </button>

      {isOpen ? (
        <div
          style={{
            width: '360px',
            maxWidth: '100%',
            minHeight: '174px',
            marginTop: '12px',
            borderRadius: '6px',
            border: '1px solid #A4ACAC',
            background: 'var(--color-neutral-1, #FFFFFF)',
            boxSizing: 'border-box',
            padding: '12px 16px',
            ...panelStyle,
          }}
        >
          {items.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isExpanded = expandedIds.has(item.id);

            return (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                <button
                  type="button"
                  onClick={() => {
                    if (hasChildren) {
                      toggleExpand(item.id);
                    }
                    handleSelect(item);
                  }}
                  style={{
                    width: '100%',
                    border: 'none',
                    background: 'transparent',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <NodeArrowIcon expanded={isExpanded} />
                  </span>

                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: 'var(--color-neutral-10, #000000)',
                    }}
                  >
                    {item.label}
                  </span>
                </button>

                {hasChildren && isExpanded ? (
                  <div style={{ marginLeft: '28px', marginTop: '6px' }}>
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        type="button"
                        onClick={() => handleSelect(child)}
                        style={{
                          width: '100%',
                          border: 'none',
                          background: 'transparent',
                          textAlign: 'left',
                          padding: '9px 0',
                          cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: 1,
                          color: 'var(--color-neutral-8, #333333)',
                        }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default TreeSelect;
