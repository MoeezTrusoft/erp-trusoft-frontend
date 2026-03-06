const CheckMark = ({ color = 'var(--color-neutral-8, #333333)' }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 8.5L6.7 12.2L14 4.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = ({ color = 'var(--color-neutral-6, #AFAFAF)' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="7.9" cy="7.9" r="5.3" stroke={color} strokeWidth="2" />
    <path d="M12.2 12.2L15.6 15.6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MenuEverything = ({ className = '', style = {}, ...rest }) => {
  return (
    <div className={className} style={{ width: '253px', ...style }} {...rest}>
      <h3
        style={{
          margin: '0 0 8px 0',
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '22px',
          lineHeight: '28px',
          color: 'var(--color-neutral-10, #000000)',
        }}
      >
        Everything
      </h3>

      <div
        style={{
          width: '253px',
          border: '1px solid var(--color-neutral-6, #AFAFAF)',
          borderRadius: '6px',
          background: 'var(--color-neutral-1, #FFFFFF)',
          overflow: 'hidden',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            left: '26px',
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: '8px solid var(--color-neutral-6, #AFAFAF)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-7px',
            left: '27px',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderBottom: '7px solid var(--color-neutral-1, #FFFFFF)',
          }}
        />

        <div style={{ padding: '10px 0 12px 0' }}>
          <div style={{ height: '40px', display: 'flex', alignItems: 'center', padding: '0 22px' }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
              Text Only
            </span>
          </div>

          <div style={{ height: '40px', display: 'flex', alignItems: 'center', padding: '0 22px' }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '13px', color: 'var(--color-neutral-8, #333333)' }}>
              Text Divider
            </span>
          </div>

          <div
            style={{
              width: '253px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 22px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
              Icon Right
            </span>
            <CheckMark />
          </div>

          <div
            style={{
              width: '253px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 22px',
              boxSizing: 'border-box',
              background: 'var(--color-teal-3, #64E2D4)',
            }}
          >
            <CheckMark />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
              Icon Left
            </span>
          </div>

          <div style={{ height: '40px', display: 'flex', alignItems: 'center', padding: '0 22px' }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--color-neutral-8, #333333)' }}>
              Check & Radio
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '8px 22px 6px 22px' }}>
            <div style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--color-primary-dark, #00918D)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
                Checkbox
              </span>
            </div>

            <div style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--color-primary-dark, #00918D)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckMark color="var(--color-neutral-1, #FFFFFF)" />
              </span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
                Checkbox
              </span>
            </div>

            <div style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-primary-dark, #00918D)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
                Radio Unselected
              </span>
            </div>

            <div style={{ height: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--color-primary-dark, #00918D)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-neutral-1, #FFFFFF)' }} />
              </span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--color-neutral-10, #000000)' }}>
                Radio Selected
              </span>
            </div>
          </div>

          <div style={{ width: '221px', height: '56px', margin: '8px auto 10px auto', display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '221px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--color-neutral-3, #EDEDED)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 14px',
                boxSizing: 'border-box',
              }}
            >
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', color: 'var(--color-neutral-6, #AFAFAF)' }}>
                Search
              </span>
              <SearchIcon />
            </div>
          </div>

          <div style={{ width: '221px', height: '36px', margin: '0 auto' }}>
            <button
              type="button"
              style={{
                width: '221px',
                height: '36px',
                border: 'none',
                borderRadius: '6px',
                background: 'var(--color-teal-10, #045F58)',
                color: 'var(--color-neutral-1, #FFFFFF)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              Small Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuEverything;
