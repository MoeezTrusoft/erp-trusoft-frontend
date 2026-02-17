import { UserCog } from 'lucide-react';
import CircularProgress from '../charts/CircularProgress';

export default function PerformanceSummary() {
  return (
    <div
      className="bg-white shadow-sm overflow-hidden flex flex-col"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '17px',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2 px-6 py-4">
        <UserCog size={24} color="#035F5B" />
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}
        >
          Performance Summary
        </h2>
        <div
          className="flex-1"
          style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)', opacity: 0.2 }}
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-center flex-1 px-5 pb-4" style={{ gap: '24px' }}>
        {/* Left: Goal Completion */}
        <div
          className="flex flex-col items-center justify-center flex-1"
          style={{ paddingLeft: '16px', paddingRight: '16px', minWidth: 0 }}
        >
          <CircularProgress value={72} />
          <p
            className="font-medium text-center"
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              color: '#000000',
              lineHeight: '100%',
              marginTop: '50px',
            }}
          >
            Goal Completion
          </p>
        </div>

        {/* Vertical Divider */}
        <div style={{ width: '1px', flexShrink: 0, height: '60%', backgroundColor: '#E5E7EB' }} />

        {/* Right: Details */}
        <div
          className="flex flex-col items-center justify-center flex-1"
          style={{ paddingRight: '16px', paddingLeft: '16px', minWidth: 0, marginTop: '-40px' }}
        >
          <CircularProgress value={72} isHalfCircle />
          <div className="text-center" style={{ fontFamily: 'Poppins', marginTop: '10px' }}>
            <p style={{ fontSize: '16px', color: '#000000', marginBottom: '4px' }}>
              In Progress: 62
            </p>
            <p style={{ fontSize: '16px', color: '#000000', marginBottom: '4px' }}>Finalized: 81</p>
            <p style={{ fontSize: '16px', color: '#000000' }}>Draft: 14</p>
          </div>
        </div>
      </div>
    </div>
  );
}
