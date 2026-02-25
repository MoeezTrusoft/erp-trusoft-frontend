import { UserCog, RefreshCw, Fingerprint, FolderOpen, ChevronRight } from 'lucide-react';

export default function IntegrationHealthStatusWidget() {
  const integrations = [
    {
      name: 'Finance Sync',
      status: 'Healthy',
      statusType: 'healthy',
      icon: <RefreshCw size={20} color="#045F58" />,
      iconBg: '#B4E2DF',
    },
    {
      name: 'Biometric Device',
      status: 'Warning (2 failed syncs)',
      statusType: 'warning',
      icon: <Fingerprint size={20} color="#045F58" />,
      iconBg: '#B4E2DF',
    },
    {
      name: 'Active Directory',
      status: 'Healthy',
      statusType: 'healthy',
      icon: <FolderOpen size={20} color="#045F58" />,
      iconBg: '#B4E2DF',
    },
  ];

  const statusConfig = {
    healthy: { dot: '#00918E', color: '#333333' },
    warning: { dot: '#FFD586', color: '#333333' },
    error: { dot: '#EF4444', color: '#333333' },
  };

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
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
          Integration Health Status
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '20px', marginLeft: '12px'}} />
      </div>

      {/* Integration Items */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', overflow: 'auto' }}>
        {integrations.map((item, idx) => {
          const config = statusConfig[item.statusType];
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                height: '63px',
                backgroundColor: 'rgba(180, 226, 223, 0.4)',
                borderRadius: '6px',
                border: '1px solid #045F58',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(180, 226, 223, 0.6)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(180, 226, 223, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Left: Icon + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '100px',
                    backgroundColor: '#B4E2DF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#045F58',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.name}
                </span>
              </div>

              {/* Right: Status + Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                {/* Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: config.dot,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: config.color,
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Arrow Button */}
                <button
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: '#B4E2DF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#9FD9D4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#B4E2DF';
                  }}
                >
                  <ChevronRight size={14} color="#045F58" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
