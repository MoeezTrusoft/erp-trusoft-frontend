import { useMemo, useRef, useState } from 'react';

const SAMPLE_IMAGE =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80';

const GridOverlay = () => (
  <>
    <span
      style={{
        position: 'absolute',
        left: '33.3333%',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'var(--color-neutral-1, #FFFFFF)',
      }}
    />
    <span
      style={{
        position: 'absolute',
        left: '66.6666%',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'var(--color-neutral-1, #FFFFFF)',
      }}
    />
    <span
      style={{
        position: 'absolute',
        top: '33.3333%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'var(--color-neutral-1, #FFFFFF)',
      }}
    />
    <span
      style={{
        position: 'absolute',
        top: '66.6666%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'var(--color-neutral-1, #FFFFFF)',
      }}
    />
  </>
);

const ImageCrop = ({
  src = SAMPLE_IMAGE,
  alt = 'Crop preview',
  variant = 'square',
  width = 403,
  height = 403,
  className = '',
  style = {},
  imageStyle = {},
  minZoom = 1,
  maxZoom = 3,
  zoomStep = 0.1,
  enableCrop = true,
  ...rest
}) => {
  const isCircle = variant === 'circle';
  const frameRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, originX: 0, originY: 0 });

  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });

  const clampPan = (x, y, scale) => {
    const halfExtraX = ((scale - 1) * width) / 2;
    const halfExtraY = ((scale - 1) * height) / 2;

    const nextX = Math.min(halfExtraX, Math.max(-halfExtraX, x));
    const nextY = Math.min(halfExtraY, Math.max(-halfExtraY, y));

    return { x: nextX, y: nextY };
  };

  const constrained = useMemo(
    () => clampPan(transform.x, transform.y, transform.scale),
    [transform.x, transform.y, transform.scale, width, height]
  );

  const applyPan = (x, y) => {
    setTransform((prev) => {
      const clamped = clampPan(x, y, prev.scale);
      return { ...prev, ...clamped };
    });
  };

  const handlePointerDown = (event) => {
    if (!enableCrop) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: constrained.x,
      originY: constrained.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!enableCrop || !dragRef.current.active) return;

    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;

    applyPan(dragRef.current.originX + dx, dragRef.current.originY + dy);
  };

  const handlePointerUp = () => {
    dragRef.current.active = false;
  };

  const handleWheel = (event) => {
    if (!enableCrop) return;
    event.preventDefault();

    const direction = event.deltaY > 0 ? -1 : 1;
    setTransform((prev) => {
      const nextScale = Math.min(maxZoom, Math.max(minZoom, prev.scale + direction * zoomStep));
      const clamped = clampPan(prev.x, prev.y, nextScale);
      return { ...clamped, scale: nextScale };
    });
  };

  const handleDoubleClick = () => {
    if (!enableCrop) return;
    setTransform({ x: 0, y: 0, scale: 1 });
  };

  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-neutral-3, #EDEDED)',
        cursor: enableCrop ? (dragRef.current.active ? 'grabbing' : 'grab') : 'default',
        touchAction: 'none',
        ...style,
      }}
      ref={frameRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: `translate(${constrained.x}px, ${constrained.y}px) scale(${transform.scale})`,
          transformOrigin: 'center center',
          transition: dragRef.current.active ? 'none' : 'transform 70ms linear',
          userSelect: 'none',
          pointerEvents: 'none',
          ...imageStyle,
        }}
      />

      {isCircle ? (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid var(--color-neutral-1, #FFFFFF)',
            borderRadius: '50%',
            boxSizing: 'border-box',
            pointerEvents: 'none',
          }}
        />
      ) : (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid var(--color-neutral-1, #FFFFFF)',
            boxSizing: 'border-box',
            pointerEvents: 'none',
          }}
        >
          <GridOverlay />
        </span>
      )}
    </div>
  );
};

export default ImageCrop;
