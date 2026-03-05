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
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}
        >
          Performance Summary
        </h2>
        <div
          className="flex-1"
          style={{ height: '1px', backgroundColor: '#d3e0df' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-5 pb-4 gap-4 md:gap-6">
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

        {/* Divider - Horizontal on mobile, Vertical on desktop */}
        <div className="hidden md:block w-[1px] h-[60%] bg-gray-200 shrink-0" />
        <div className="block md:hidden w-[60%] h-[1px] bg-gray-200 shrink-0 my-2" />

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
