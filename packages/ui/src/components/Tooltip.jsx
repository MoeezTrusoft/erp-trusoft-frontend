const ARROW_SIZE = { width: 8, height: 6 };

const getArrowStyle = (placement) => {
  const base = {
    position: 'absolute',
    width: `${ARROW_SIZE.width}px`,
    height: `${ARROW_SIZE.height}px`,
    display: 'block',
    pointerEvents: 'none',
  };

  switch (placement) {
    case 'left':
      return { ...base, right: '-6px', top: '50%', transform: 'translateY(-50%) rotate(270deg)' };
    case 'right':
      return { ...base, left: '-6px', top: '50%', transform: 'translateY(-50%) rotate(90deg)' };
    case 'bottom':
      return { ...base, top: '-5px', left: '50%', transform: 'translateX(-50%) rotate(180deg)' };
    case 'bottom-left':
      return { ...base, top: '-5px', left: '22px', transform: 'rotate(180deg)' };
    case 'bottom-right':
      return { ...base, top: '-5px', right: '22px', transform: 'rotate(180deg)' };
    case 'top-right':
      return { ...base, bottom: '-5px', right: '22px' };
    case 'top-left':
      return { ...base, bottom: '-5px', left: '22px' };
    case 'up':
    case 'top':
    default:
      return { ...base, bottom: '-5px', left: '50%', transform: 'translateX(-50%)' };
  }
};

const TooltipArrow = ({ placement }) => (
  <span aria-hidden="true" style={getArrowStyle(placement)}>
    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.46387 4.5L6.92797 0H-0.000234365L3.46387 4.5Z" fill="#069388" />
    </svg>
  </span>
);

const Tooltip = ({
  text = 'This is a tooltip',
  placement = 'left',
  background = '#069388',
  color = '#FFFFFF',
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: 'fit-content',
        display: 'inline-flex',
      }}
      {...rest}
    >
      <div
        style={{
          minWidth: '105px',
          height: '24px',
          borderRadius: '2px',
          paddingLeft: '8px',
          paddingRight: '8px',
          gap: '8px',
          opacity: 1,
          background,
          color,
          boxSizing: 'border-box',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '100%',
          whiteSpace: 'nowrap',
          ...style,
        }}
      >
        {text}
      </div>

      <TooltipArrow placement={placement} />
    </div>
  );
};

export default Tooltip;
