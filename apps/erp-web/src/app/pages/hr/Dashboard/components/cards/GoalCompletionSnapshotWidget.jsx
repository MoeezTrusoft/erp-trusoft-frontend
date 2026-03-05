import { UserCog } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';

const COMPLETION = 72;
const BEHIND_SCHEDULE = 14;

const data = [
  { value: COMPLETION },
  { value: 100 - COMPLETION },
];

const COLORS = ['#64E2D3', '#E5E7EB'];

export default function GoalCompletionSnapshotWidget() {
  return (
    <div
      style={{
        padding: '16px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '12px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flexShrink: 0 }}>
          <UserCog size={24} color="#045F58" />
        </div>
        <h2
          style={{
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 600,
            color: '#045F58',
            margin: 0,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Goal Completion Snapshot
        </h2>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#d3e0df',
            minWidth: '20px',
            marginLeft: '12px',
          }}
        />
      </div>

      {/* Donut Chart */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx={90}
            cy={90}
            innerRadius={60}
            outerRadius={85}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center Label */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '28px',
              fontWeight: 700,
              color: '#045F58',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {COMPLETION}%
          </p>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '13px',
              fontWeight: 400,
              color: '#6B7280',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Completion
          </p>
        </div>
      </div>

      {/* Behind Schedule */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          marginTop: '12px',
          paddingTop: '12px',
          borderTop: '1px solid #d3e0df',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#045F58',
          }}
        >
          Behind Schedule:
        </span>
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 700,
            color: '#045F58',
          }}
        >
          {BEHIND_SCHEDULE}%
        </span>
      </div>
    </div>
  );
}
