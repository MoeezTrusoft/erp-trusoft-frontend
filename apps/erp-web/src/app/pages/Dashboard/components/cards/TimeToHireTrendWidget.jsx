import { UserCog, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function TimeToHireTrendWidget() {
  const data = [
    { month: 'Oct 2025', days: 6 },
    { month: 'Nov 2025', days: 28 },
    { month: 'Dec 2025', days: 31 },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header Container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'nowrap' }}>
        {/* Left Section: Icon and Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
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
            Time to Hire Trend
          </h2>
        </div>

        {/* Separator Line - Flex */}
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '10px' }} />

        {/* View Analytics Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#64E2D3',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 16px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#035F5B',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4ECCC4';
            e.currentTarget.style.transform = 'translateX(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#64E2D3';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span>View Analytics</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Chart */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <defs>
              <linearGradient id="colorDays" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64E2D3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#64E2D3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" stroke="#d3e0df" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#64A8A2"
              style={{ fontSize: '12px', fontFamily: 'Poppins', fontWeight: 500 }}
              tick={{ fill: '#64A8A2' }}
            />
            <YAxis
              domain={[0, 40]}
              stroke="#64A8A2"
              style={{ fontSize: '12px', fontFamily: 'Poppins', fontWeight: 500 }}
              ticks={[0, 5, 10, 20, 30, 40]}
              width={35}
              tick={{ fill: '#64A8A2' }}
            />
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
              formatter={(value) => [`${value} days`, 'Time to Hire']}
              labelStyle={{ color: '#64E2D3' }}
              cursor={{ stroke: '#64E2D3', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="days"
              stroke="#64E2D3"
              strokeWidth={2}
              fill="url(#colorDays)"
              dot={{ fill: '#035F5B', r: 4, strokeWidth: 2, stroke: '#64E2D3' }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      
    </div>
  );
}
