import { UserCog, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FeedbackPulseWidget() {
  const data = [
    { week: 'Week 1', feedback: 0.5 },
    { week: 'Week 2', feedback: 1.2 },
    { week: 'Week 3', feedback: 1.8 },
    { week: 'Week 4', feedback: 2.2 },
    { week: 'Week 5', feedback: 2.5 },
    { week: 'Week 6', feedback: 2.8 },
    { week: 'Week 7', feedback: 3.2 },
    { week: 'Week 8', feedback: 3.8 },
    { week: 'Week 9', feedback: 4.2 },
    { week: 'Week 10', feedback: 5.2 },
    { week: 'Week 11', feedback: 6.8 },
    { week: 'Week 12', feedback: 8.5 },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top Section */}
      <div style={{ marginBottom: '20px' }}>
        {/* Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <UserCog size={24} color="#035F5B" />
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontWeight: 600,
              color: '#035F5B',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Feedback Pulse
          </h2>
          {/* Horizontal Line */}
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df' }} />
        </div>

        {/* Content Row: Number, Description, Badge, Button */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', justifyContent: 'space-between' }}>
          {/* Left: Number and Description */}
          <div>
            <p
              style={{
                fontFamily: 'Poppins',
                fontSize: '80px',
                fontWeight: 700,
                color: '#00918E',
                margin: '0 0 4px 0',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              112
            </p>
            <p
              style={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 400,
                color: '#333333',
                lineHeight: '100%',
                letterSpacing: '0%',
                margin: 0,
              }}
            >
              Feedback This Week
            </p>
          </div>

          {/* Right: Badge and Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            {/* Circular Badge */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#B4E2DF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#035F5B',
                  margin: '2px 0',
                  lineHeight: 1.2,
                }}
              >
                Positive
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#035F5B',
                  margin: '2px 0',
                  lineHeight: 1.2,
                }}
              >
                Feedback
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#035F5B',
                  margin: '2px 0 0 0',
                  lineHeight: 1,
                }}
              >
                78%
              </p>
            </div>

            {/* View Details Button */}
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
              <span>View Details</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '140px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 15, right: 10, left: 10, bottom: 15 }}>
            <defs>
              <linearGradient id="colorFeedback" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64E2D3" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#64E2D3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#d3e0df" vertical={false} />
            <XAxis dataKey="week" hide={true} />
            <YAxis
              domain={[0, 10]}
              ticks={[0, 2, 4, 6, 8, 10]}
              stroke="#d3e0df"
              style={{ fontSize: '12px', fontFamily: 'Poppins', fontWeight: 500 }}
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
              formatter={(value) => [value.toFixed(1), 'Feedback']}
              cursor={{ stroke: '#64E2D3', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="feedback"
              stroke="#64E2D3"
              strokeWidth={2}
              fill="url(#colorFeedback)"
              dot={false}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
