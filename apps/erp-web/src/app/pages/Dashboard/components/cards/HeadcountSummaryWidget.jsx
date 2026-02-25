import { UserCog, Users } from 'lucide-react';

export default function HeadcountSummaryWidget() {
  const metrics = [
    {
      label: 'Total Employee',
      value: '1,247',
      icon: <Users size={20} color="#035F5B" />,
    },
    {
      label: 'Active Employee',
      value: '1,198',
      icon: <Users size={20} color="#035F5B" />,
    },
    {
      label: 'New Joins (30d)',
      value: '+18',
      icon: <Users size={20} color="#035F5B" />,
    },
    {
      label: 'Exits (30d)',
      value: '-7',
      icon: <Users size={20} color="#035F5B" />,
    },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '26px' }}>
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
          }}
        >
          Headcount Summary
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#B3E2DE',
              borderRadius: '8px',
              padding: '12px 6px 12px 6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(100, 226, 211, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>{metric.icon}</span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '100%',
                  color: '#035F5B',
                  margin: 0,
                  marginBottom: '8px',
                }}
              >
                {metric.value}
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  color: '#035F5B',
                  margin: 0,
                }}
              >
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
