import { UserCog } from 'lucide-react';
import GenderSplitChart from '../charts/GenderSplitChart';
import EmployeesByGradeChart from '../charts/EmployeesByGradeChart';

export default function WorkforceOverview() {
  const metrics = [
    {
      label: 'Active Employees',
      value: '1,247',
      icon: '👤',
      suffix: null,
    },
    {
      label: 'New Hires',
      value: '38',
      icon: '👤',
      suffix: null,
    },
    {
      label: 'Average Tenure',
      value: '26',
      icon: '👤',
      suffix: 'months',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full flex flex-col" style={{ maxHeight: '580px' }}>
      <h2 className="text-[24px] font-medium leading-none mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}>
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        Workforce Overview
        <div className="flex-1" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />
      </h2>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 mb-8">
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
            style={{ 
              width: '90%',
              height: '133px',
              backgroundColor: 'var(--color-primary-lightest)',
              borderRadius: '12px',
              padding: '10px 12px 10px 12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <p 
              className="flex items-center gap-2" 
              style={{ 
                fontFamily: 'Poppins', 
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '100%',
                color: 'var(--color-primary-darkest)',
                margin: 0 
              }}
            >
              <span>{metric.icon}</span>
              {metric.label}
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <p 
                style={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '100%',
                  color: 'var(--color-primary-dark)',
                  margin: 0 
                }}
              >
                {metric.value}
              </p>
              {metric.suffix && (
                <p 
                  style={{ 
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    color: 'var(--color-primary-darkest)',
                    margin: 0 
                  }}
                >
                  {metric.suffix}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div 
        className="grid grid-cols-2 gap-6 mt-auto" 
        style={{ 
          transform: 'scale(0.9)',
          transformOrigin: 'top center',
          marginTop: '-20px'
        }}
      >
        <GenderSplitChart />
        <EmployeesByGradeChart />
      </div>
    </div>
  );
}  