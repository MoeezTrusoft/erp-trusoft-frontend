import { UserCog, ArrowRight } from 'lucide-react';
import ReviewsStatusChart from '../charts/ReviewsStatusChart';

export default function ReviewsStatusWidget() {
  return (
    <div
      className="flex flex-col p-6"
      style={{ height: '100%', minHeight: '320px' }}
    >
      {/* Header: icon + title + separator line */}
      <div className="flex items-center gap-3 mb-5 flex-1 min-w-0" style={{ flex: '0 0 auto' }}>
        <div
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UserCog size={24} color="#00665e" />
        </div>
        <h2
          className="text-[24px] font-semibold shrink-0"
          style={{ fontFamily: 'Poppins', color: '#00665e' }}
        >
          Reviews Status
        </h2>
        <div
          className="flex-1 min-h-0"
          style={{ height: '1px', backgroundColor: '#d3e0df', minWidth: 0 }}
        />
      </div>

      {/* Chart row: donut + legend */}
      <div style={{ flex: 1, minHeight: 0, marginBottom: 16 }}>
        <ReviewsStatusChart />
      </div>

      {/* View All Reviews — bottom right */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '0 0 auto' }}>
        <button
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            color: '#FFFFFF',
            background: 'linear-gradient(90deg, #58d6c6 0%, #20a397 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '8px 16px',
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            whiteSpace: 'nowrap',
          }}
        >
          View All Reviews
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
