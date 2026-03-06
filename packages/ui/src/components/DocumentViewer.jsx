import { useEffect, useMemo, useRef, useState } from 'react';

const DUMMY_PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.';

const buildDummyText = (paragraphs = 22) =>
  Array.from({ length: paragraphs })
    .map(() => DUMMY_PARAGRAPH)
    .join(' ');

const HeaderDivider = () => (
  <span
    aria-hidden="true"
    style={{
      width: '1px',
      height: '24px',
      background: 'var(--color-neutral-1, #FFFFFF)',
      opacity: 0.6,
      display: 'inline-block',
      flexShrink: 0,
    }}
  />
);

const DocumentViewer = ({
  fileName = 'File name',
  currentPage = 1,
  totalPages = 2,
  zoom = '100%',
  width = 1440,
  height = 1067,
  className = '',
  style = {},
  ...rest
}) => {
  const pageTwoText = useMemo(() => buildDummyText(30), []);
  const pageOneText = useMemo(() => buildDummyText(8), []);

  const initialZoom = Number.parseInt(String(zoom).replace('%', ''), 10);
  const [activePage, setActivePage] = useState(Math.max(1, Math.min(totalPages, currentPage)));
  const [zoomLevel, setZoomLevel] = useState(Number.isFinite(initialZoom) ? initialZoom : 100);
  const [rotation, setRotation] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);

  const pageOneRef = useRef(null);
  const pageTwoRef = useRef(null);
  const viewerScrollRef = useRef(null);

  const basePageWidth = 595;
  const basePageTwoHeight = 842;
  const basePageOneHeight = 161;
  const baseDocumentHeight = basePageTwoHeight + basePageOneHeight;
  const zoomScale = zoomLevel / 100;
  const isQuarterTurn = rotation % 180 !== 0;
  const rotatedWidth = isQuarterTurn ? baseDocumentHeight : basePageWidth;
  const rotatedHeight = isQuarterTurn ? basePageWidth : baseDocumentHeight;
  const canvasWidth = rotatedWidth * zoomScale;
  const canvasHeight = rotatedHeight * zoomScale;

  useEffect(() => {
    const target = activePage === 1 ? pageOneRef.current : pageTwoRef.current;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activePage]);

  const handlePrevPage = () => {
    setActivePage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setActivePage((prev) => Math.min(totalPages, prev + 1));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(50, prev - 10));
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(200, prev + 10));
  };

  const rotateClockwise = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const wrapperStyle = isMaximized
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
      }
    : {};

  return (
    <div
      className={className}
      style={{
        width: isMaximized ? '100vw' : `${width}px`,
        maxWidth: isMaximized ? '100vw' : '100%',
        height: isMaximized ? '100vh' : `${height}px`,
        background: 'var(--color-neutral-3, #EDEDED)',
        overflow: 'hidden',
        boxSizing: 'border-box',
        ...wrapperStyle,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: '100%',
          height: '62px',
          background: '#069388',
          boxShadow: '0px 4px 4px 0px #00000040',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          boxSizing: 'border-box',
          color: 'var(--color-neutral-1, #FFFFFF)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <span style={{ fontWeight: 500, fontSize: '14px' }}>{fileName}</span>

        <div
          style={{
            width: '386.5px',
            height: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            color: 'var(--color-neutral-1, #FFFFFF)',
            fontSize: '12px',
          }}
        >
          <div
            style={{
              width: '114px',
              height: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              paddingLeft: '24px',
              paddingRight: '24px',
              boxSizing: 'border-box',
            }}
          >
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={activePage <= 1}
              style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: activePage <= 1 ? 'not-allowed' : 'pointer', opacity: activePage <= 1 ? 0.5 : 1, padding: 0 }}
            >
              ‹
            </button>
            <span
              style={{
                width: '24px',
                height: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-neutral-10, #000000)',
                color: 'var(--color-neutral-1, #FFFFFF)',
                borderRadius: '2px',
                fontSize: '12px',
              }}
            >
              {activePage}
            </span>
            <span>/</span>
            <span>{totalPages}</span>
            <button
              type="button"
              onClick={handleNextPage}
              disabled={activePage >= totalPages}
              style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: activePage >= totalPages ? 'not-allowed' : 'pointer', opacity: activePage >= totalPages ? 0.5 : 1, padding: 0 }}
            >
              ›
            </button>
          </div>

          <HeaderDivider />

          <div
            style={{
              width: '179px',
              height: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingLeft: '24px',
              paddingRight: '24px',
              boxSizing: 'border-box',
            }}
          >
            <button type="button" onClick={zoomOut} style={{ border: 'none', background: 'transparent', color: 'inherit', fontSize: '32px', lineHeight: 1, cursor: 'pointer', padding: 0 }}>
              -
            </button>
            <span
              style={{
                minWidth: '48px',
                height: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-neutral-10, #000000)',
                borderRadius: '2px',
              }}
            >
              {zoomLevel}%
            </span>
            <button type="button" onClick={zoomIn} style={{ border: 'none', background: 'transparent', color: 'inherit', fontSize: '34px', lineHeight: 1, cursor: 'pointer', padding: 0 }}>
              +
            </button>
          </div>

          <HeaderDivider />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <button type="button" onClick={toggleMaximize} style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: '16px', padding: 0 }}>⤢</button>
            <button type="button" onClick={rotateClockwise} style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: '18px', padding: 0 }}>↻</button>
          </div>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
          <button type="button" style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: '15px', padding: 0 }}>⬇</button>
          <button type="button" style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: '18px', padding: 0 }}>🖨</button>
          <button type="button" style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: 0 }}>⋮</button>
        </div>
      </div>

      <div
        style={{
          height: 'calc(100% - 62px)',
          display: 'grid',
          gridTemplateColumns: `minmax(220px, 1fr) ${basePageWidth}px minmax(220px, 1fr)`,
        }}
      >
        <div style={{ background: '#C8C8C8' }} />

        <div
          ref={viewerScrollRef}
          style={{
            width: `${basePageWidth}px`,
            overflow: 'auto',
            background: 'var(--color-neutral-3, #EDEDED)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '14px 0',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: `${canvasWidth}px`,
              height: `${canvasHeight}px`,
              minWidth: `${canvasWidth}px`,
              minHeight: `${canvasHeight}px`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: `${basePageWidth}px`,
                minHeight: `${baseDocumentHeight}px`,
                transform: `translate(-50%, -50%) scale(${zoomScale}) rotate(${rotation}deg)`,
                transformOrigin: 'center center',
                transition: 'transform 140ms ease',
              }}
            >
              <div
                ref={pageTwoRef}
                style={{
                  width: `${basePageWidth}px`,
                  minHeight: `${basePageTwoHeight}px`,
                  background: 'var(--color-neutral-1, #FFFFFF)',
                  borderBottom: '1px solid var(--color-neutral-4, #D8D8D8)',
                  padding: '22px 30px',
                  boxSizing: 'border-box',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '11px',
                  lineHeight: '1.45',
                  color: 'var(--color-neutral-8, #333333)',
                  textAlign: 'justify',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {pageTwoText}
              </div>

              <div
                ref={pageOneRef}
                style={{
                  width: `${basePageWidth}px`,
                  minHeight: `${basePageOneHeight}px`,
                  background: 'var(--color-neutral-1, #FFFFFF)',
                  padding: '22px 30px',
                  boxSizing: 'border-box',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '11px',
                  lineHeight: '1.45',
                  color: 'var(--color-neutral-8, #333333)',
                  textAlign: 'justify',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {pageOneText}
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: '#C8C8C8' }} />
      </div>

    </div>
  );
};

export default DocumentViewer;
