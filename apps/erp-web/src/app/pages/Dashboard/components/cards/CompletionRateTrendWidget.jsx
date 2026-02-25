import { UserCog } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CompletionRateTrendWidget() {
  const data = [
    { month: 'Oct', rate: 40 },
    { month: 'Nov', rate: 55 },
    { month: 'Dec', rate: 65 },
    { month: 'Jan', rate: 74 },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', outline: 'none' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flexShrink: 0 }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          style={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 600,
            color: '#035F5B',
            margin: 0,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Completion Rate Trend
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '10px' }} />
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '16px' }}>
        {/* Left: Big Percentage */}
        <div>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '48px',
              fontWeight: 700,
              color: '#035F5B',
              margin: '0 0 4px 0',
              lineHeight: 1,
            }}
          >
            74%
          </p>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 500,
              color: '#333333',
              margin: 0,
            }}
          >
            Completion rate
          </p>
        </div>

        {/* Right: Change Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <span
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 600,
              color: '#035F5B',
            }}
          >
            ▲ +4% vs last month
          </span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '140px', outline: 'none' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 15, right: 10, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient id="colorCompletion" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64E2D3" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#64E2D3" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" stroke="#d3e0df" vertical={true} />
            <XAxis
              dataKey="month"
              stroke="#d3e0df"
              style={{ fontSize: '12px', fontFamily: 'Poppins', fontWeight: 500 }}
              tick={{ fill: '#64A8A2' }}
            />
            <YAxis hide={true} domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#035F5B',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 12px',
                fontFamily: 'Poppins',
                fontSize: '12px',
                color: '#64E2D3',
              }}
              formatter={(value) => [`${value}%`, 'Completion Rate']}
              labelStyle={{ color: '#64E2D3' }}
              cursor={{ stroke: '#64E2D3', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#64E2D3"
              strokeWidth={2}
              fill="url(#colorCompletion)"
              dot={{ fill: '#fff', r: 4, strokeWidth: 2, stroke: '#64E2D3' }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
