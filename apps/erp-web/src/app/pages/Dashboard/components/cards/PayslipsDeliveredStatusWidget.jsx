import { UserCog, ArrowRight } from 'lucide-react';
import PayslipsDeliveredStatusChart from '../charts/PayslipsDeliveredStatusChart';

export default function PayslipsDeliveredStatusWidget() {
  return (
    <div className="p-6 flex flex-col" style={{ height: '100%', minHeight: '320px' }}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserCog size={24} color="#035F5B" />
          </div>
          <h2
            className="text-[24px] font-medium leading-none shrink-0"
            style={{ fontFamily: 'Poppins', color: '#035F5B' }}
          >
            Payslips Delivered Status
          </h2>
          <div className="flex-1" style={{ height: '1px', backgroundColor: '#035F5B' }} />
        </div>

        {/* View Payslip Button */}
        <button
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            backgroundColor: '#64E2D3',
            border: 'none',
            borderRadius: '97px',
            padding: '8px 16px',
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            whiteSpace: 'nowrap',
          }}
        >
          View Payslip
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Last Updated */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#035F5B' }} />
        <span style={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, color: '#666666' }}>
          Last updated: 10 Jan 2026
        </span>
      </div>

      {/* Chart */}
      <div style={{ flex: 1 }}>
        <PayslipsDeliveredStatusChart />
      </div>
    </div>
  );
}
