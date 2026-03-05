import { UserCog, ArrowRight } from 'lucide-react';

export default function LeaveRequestsSnapshotWidget() {
  return (
    <div className="p-6 flex flex-col" style={{ height: '100%', minHeight: '320px' }}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserCog size={24} color="#035F5B" />
          </div>
          <h2
            className="text-[24px] font-medium leading-none shrink-0"
            style={{ fontFamily: 'Poppins', color: '#035F5B' }}
          >
            Leave Requests Snapshot
          </h2>
          <div className="flex-1" style={{ height: '1px', backgroundColor: '#d3e0df' }} />
        </div>

        {/* View All Button */}
        <button
          style={{
            fontFamily: 'Poppins',
            fontSize: '13px',
            fontWeight: 600,
            color: '#035F5B',
            backgroundColor: '#64E2D3',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 14px',
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#52D4BD';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#64E2D3';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          View All
        </button>
      </div>

      {/* Stats Cards */}
      <div className="flex-1 flex items-center justify-center gap-6">
        {/* Pending Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#B3E2DE',
            borderRadius: '12px',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#035F5B',
              fontFamily: 'Poppins',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '18px' }}>⏱</span>
            Pending
          </span>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#035F5B',
              fontFamily: 'Poppins',
              lineHeight: '100%',
            }}
          >
            12
          </span>
        </div>

        {/* Approved Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#035F5B',
            borderRadius: '12px',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(3,95,91,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFFFFF',
              fontFamily: 'Poppins',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '18px' }}>✓</span>
            Approved
          </span>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#FFFFFF',
              fontFamily: 'Poppins',
              lineHeight: '100%',
            }}
          >
            38
          </span>
        </div>

        {/* Declined Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#FFB3C1',
            borderRadius: '12px',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(255,179,193,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#C31C35',
              fontFamily: 'Poppins',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '18px' }}>✕</span>
            Declined
          </span>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#C31C35',
              fontFamily: 'Poppins',
              lineHeight: '100%',
            }}
          >
            3
          </span>
        </div>
      </div>
    </div>
  );
}
