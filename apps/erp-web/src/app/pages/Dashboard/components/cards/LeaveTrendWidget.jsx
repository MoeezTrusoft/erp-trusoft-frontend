import { UserCog } from 'lucide-react';
import LeaveTrendChart from '../charts/LeaveTrendChart';

export default function LeaveTrendWidget() {
  return (
    <div
      className="p-6 flex flex-col"
      style={{ height: '100%', minHeight: '400px' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}
        >
          Leave Trend (30 Days)
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* Chart */}
      <div className="flex-1 w-full">
        <LeaveTrendChart />
      </div>
    </div>
  );
}
