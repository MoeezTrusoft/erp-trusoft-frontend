import { UserCog } from 'lucide-react';
import DepartmentHeadcountChart from '../charts/DepartmentHeadcountChart';

export default function DepartmentHeadcountWidget() {
  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'Poppins, sans-serif',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header — same pattern as WhosOnLeave */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px',
          flexShrink: 0,
        }}
      >
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            color: 'var(--color-primary-darkest)',
            margin: 0,
            whiteSpace: 'nowrap',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          Department Headcount
        </h2>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#d3e0df',
          }}
        />
      </div>

      {/* Chart */}
      <div style={{ flex: 1, minHeight: '140px', marginTop: '12px' }}>
        <DepartmentHeadcountChart />
      </div>
    </div>
  );
}
