import { UserCog, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import WorkforceDemographicsChart from '../charts/WorkforceDemographicsChart';

const dropdownOptions = ['Age groups', 'Department', 'Tenure'];

export default function WorkforceDemographicsWidget() {
  const [tenure, setTenure] = useState('Age groups');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="p-6 flex flex-col" style={{ height: '100%', minHeight: '400px' }}>
      {/* ── Header ── */}
      <div className="flex items-center justify-between gap-3 mb-6">
        {/* Title row */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <UserCog size={24} color="#035F5B" style={{ flexShrink: 0 }} />
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontWeight: 500,
              color: '#035F5B',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Workforce Demographics
          </h2>
          {/* Horizontal rule stretching to the right */}
          <div style={{ flex: 1, height: '1px', backgroundColor: '#035F5B', opacity: 0.4 }} />
        </div>

        {/* ── Filter pill + label ── */}
        <div
          ref={dropdownRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            position: 'relative',
          }}
        >
          {/* Pill button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              width: '139px',
              height: '42px',
              padding: '10px 18px',
              backgroundColor: '#64E2D3',
              border: '1px solid #64E2D3',
              borderRadius: '97px',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {/* Green dot */}
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#035F5B',
                flexShrink: 0,
              }}
            />
            {/* Label */}
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 400,
                color: '#333333',
                flex: 1,
                textAlign: 'left',
              }}
            >
              {tenure}
            </span>
            {/* Chevron */}
            <ChevronDown
              size={14}
              color="#333333"
              style={{
                flexShrink: 0,
                transition: 'transform 0.2s',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>

          {/* Dropdown menu */}
          {open && (
            <div
              style={{
                position: 'absolute',
                top: '46px',
                left: 0,
                width: '139px',
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                zIndex: 50,
                overflow: 'hidden',
              }}
            >
              {dropdownOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setTenure(opt);
                    setOpen(false);
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 16px',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: tenure === opt ? 600 : 400,
                    color: '#333333',
                    backgroundColor: tenure === opt ? '#f0fdfb' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0fdfb')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      tenure === opt ? '#f0fdfb' : 'transparent')
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* "Age groups" label below pill */}
          <span
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22px',
              color: '#333333',
            }}
          >
            Age groups
          </span>
        </div>
      </div>

      {/* ── Chart ── */}
      <div className="flex-1 w-full">
        <WorkforceDemographicsChart tenure={tenure} />
      </div>
    </div>
  );
}
