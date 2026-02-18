import { ArrowRight } from 'lucide-react';

export default function PayslipsDeliveredStatusChart() {
  const generated = 1210;
  const delivered = 1198;
  const failed = 12;
  const total = generated + delivered + failed;

  const generatedPercent = (generated / total) * 100;
  const deliveredPercent = (delivered / total) * 100;
  const failedPercent = (failed / total) * 100;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Status Headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '8px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 600,
              color: '#035F5B',
              marginBottom: '2px',
            }}
          >
            Generated
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 600,
              color: '#64E2D3',
              marginBottom: '2px',
            }}
          >
            Delivered
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 600,
              color: '#EF6B6B',
              marginBottom: '2px',
            }}
          >
            Failed
          </div>
        </div>
      </div>

      {/* Stacked Bar */}
      <div
        style={{
          display: 'flex',
          height: '48px',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div
          style={{
            width: `${generatedPercent}%`,
            backgroundColor: '#035F5B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <div
          style={{
            width: `${deliveredPercent}%`,
            backgroundColor: '#64E2D3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <div
          style={{
            width: `${failedPercent}%`,
            backgroundColor: '#EF6B6B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>

      {/* Values */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 700,
              color: '#333333',
            }}
          >
            {generated.toLocaleString()}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 700,
              color: '#333333',
            }}
          >
            {delivered.toLocaleString()}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 700,
              color: '#333333',
            }}
          >
            {failed}
          </div>
        </div>
      </div>

      {/* Review Button */}
      <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            backgroundColor: '#035F5B',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          Review Delivery Status
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
