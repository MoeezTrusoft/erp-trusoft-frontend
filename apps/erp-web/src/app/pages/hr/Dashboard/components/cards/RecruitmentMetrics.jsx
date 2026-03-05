import { UserCog } from 'lucide-react';
import RecruitmentTrendChart from '../charts/RecruitmentTrendChart';

export default function RecruitmentMetrics() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full flex flex-col" style={{ maxHeight: '630px' }}>
      {/* Main Heading */}
      <h2 className="text-[24px] font-medium leading-none mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}>
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        Recruitment Metrics
        <div className="flex-1" style={{ height: '1px', backgroundColor: '#d3e0df' }} />
      </h2>

      <div className="flex-1 flex flex-col">
        {/* Time to Hire (Days) Subtitle */}
        <h3
          className="mb-4"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '18.18px',
            lineHeight: '100%',
            color: '#000000'
          }}
        >
          Time to Hire (Days)
        </h3>

        {/* Chart */}
        <div
          className="flex-1"
          style={{
            width: '100%',
            minHeight: '300px'
          }}
        >
          <RecruitmentTrendChart />
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-2 mt-auto justify-center">

          {/* Open Positions Button */}
          <button
            className="transition-all duration-200 hover:shadow-md hover:scale-105"
            style={{
              // flex: 1,
              width:'200px',
              height: '42px',
              borderRadius: '10px',
              padding: '10px 0px',
              backgroundColor: 'var(--color-primary-darkest)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              Open Positions 23
            </span>
          </button>

          {/* Filled Positions Button */}
          <button
            className="transition-all duration-200 hover:shadow-md hover:scale-105"
            style={{
              // flex: 1,
              width:'200px',
              height: '42px',
              borderRadius: '10px',
              padding: '10px 10px',
              backgroundColor: '#B3E2DE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Filled Positions 41
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}