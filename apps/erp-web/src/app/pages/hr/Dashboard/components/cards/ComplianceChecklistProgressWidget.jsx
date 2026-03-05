import { UserCog, ArrowRight } from 'lucide-react';

export default function ComplianceChecklistProgressWidget() {
  const complianceItems = [
    {
      name: 'Labor Law Checklist',
      progress: 82,
    },
    {
      name: 'ISO Documentation',
      progress: 67,
    },
    {
      name: 'GDPR Training Module',
      progress: 95,
    },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <div style={{ flexShrink: 0 }}>
          <UserCog size={24} color="#045F58" />
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
          Compliance Checklist Progress
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '20px', marginLeft: '12px' }} />
      </div>

      {/* View Compliance Checklists Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px', marginTop: '8px' }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#64E2D3',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 14px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#045F58',
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
          <span>View Compliance Checklists</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Compliance Items List */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto' }}>
        {complianceItems.map((item, idx) => (
          <div key={idx}>
            {/* Item Name */}
            <h3
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 600,
                color: '#045F58',
                margin: '0 0 8px 0',
              }}
            >
              {item.name}
            </h3>

            {/* Progress Bar Container */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Progress Bar */}
              <div style={{ width: '80%', flexShrink: 0, height: '12px', backgroundColor: '#D3E8E6', borderRadius: '6px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${item.progress}%`,
                    backgroundColor: '#045F58',
                    borderRadius: '6px',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>

              {/* Progress Percentage */}
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#045F58',
                  flex: 1,
                  textAlign: 'right',
                }}
              >
                {item.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
