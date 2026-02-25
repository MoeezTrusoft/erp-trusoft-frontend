import { UserCog } from 'lucide-react';

export default function AlertsEscalationsSummaryWidget() {
  const stats = [
    {
      label: <><span>Escalations</span><br /><span>Today</span></>,
      value: 4,
      bg: '#B4E2DF',
      valueColor: '#069388',
      labelColor: '#045F58',
    },
    {
      label: <><span>Unread Critical</span><br /><span>Alerts</span></>,
      value: 7,
      bg: '#FFCDD2',
      valueColor: '#000000',
      labelColor: '#000000',
    },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flexShrink: 0 }}>
          <UserCog size={24} color="#045F58" />
        </div>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            color: 'var(--color-primary-darkest)',
            marginBottom: '10px',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          Alerts &amp; Escalations Summary
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '20px', marginLeft: '12px' }} />
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: stat.bg,
              borderRadius: '10px',
              padding: '26px 14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <p
              style={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: 600,
                color: stat.labelColor,
                margin: 0,
                textAlign: 'center',
                lineHeight: '120%',
                letterSpacing: '0%',
              }}
            >
              {stat.label}
            </p>
            <p
              style={{
                fontFamily: 'Poppins',
                fontSize: '40px',
                fontWeight: 600,
                color: stat.valueColor,
                margin: 0,
                lineHeight: '120%',
                letterSpacing: '0%',
              }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
