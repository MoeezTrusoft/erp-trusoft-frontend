import { Info } from 'lucide-react';

export default function OpenPositionsChart({ department = 'All' }) {
  const data = [
    { role: 'Backend Dev', avgTime: '32d' },
    { role: 'Backend Dev', avgTime: '32d' },
    { role: 'Backend Dev', avgTime: '32d' },
    { role: 'Backend Dev', avgTime: '32d' },
    { role: 'Backend Dev', avgTime: '32d' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Table Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 80px 30px',
          gap: '16px',
          padding: '12px 16px',
          backgroundColor: '#3FB5B0',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
          }}
        >
          Roles
        </span>
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            textAlign: 'right',
          }}
        >
          Avg Time
        </span>
        <div />
      </div>

      {/* Table Rows */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {data.map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 80px 30px',
              gap: '16px',
              padding: '12px 16px',
              borderBottom: idx < data.length - 1 ? '1px solid #e5e7eb' : 'none',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 500,
                color: '#035F5B',
              }}
            >
              {row.role}
            </span>
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 500,
                color: '#3FB5B0',
                textAlign: 'right',
              }}
            >
              {row.avgTime}
            </span>
            <Info size={18} color="#3FB5B0" style={{ cursor: 'pointer' }} />
          </div>
        ))}
      </div>

      {/* See More Link */}
      <div
        style={{
          textAlign: 'right',
          padding: '12px 16px',
          borderTop: '1px solid #e5e7eb',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            color: '#035F5B',
            cursor: 'pointer',
          }}
        >
          See More
        </span>
      </div>
    </div>
  );
}
