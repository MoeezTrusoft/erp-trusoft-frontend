import { UserCog, ArrowRight, ChevronRight, ShieldAlert, Heart, Lock } from 'lucide-react';

export default function CertificationsExpiringSoonWidget() {
  const certifications = [
    {
      name: 'ISO Safety Training',
      expires: 'expires in 2 days',
      icon: <ShieldAlert size={24} color="#fff" />,
      iconBg: '#F58847',
    },
    {
      name: 'First Aid & CPR',
      expires: 'expires in 12 days',
      icon: <Heart size={24} color="#fff" />,
      iconBg: '#ED3237',
    },
    {
      name: 'Data Privacy Compliance',
      expires: 'expires in 5 days',
      icon: <Lock size={24} color="#fff" />,
      iconBg: '#179CCC',
    },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ flexShrink: 0 }}>
            <UserCog size={24} color="#045F58" />
          </div>
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontWeight: 600,
              color: '#045F58',
              margin: 0,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Certifications Expiring Soon
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '20px', marginLeft: '12px' }} />
        </div>
      </div>

      {/* View All Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
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
          <span>View all Certificates</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Certification List */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'auto' }}>
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 12px',
              borderBottom: idx !== certifications.length - 1 ? '1px solid #d3e0df' : 'none',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fffe';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {/* Left: Icon + Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
              {/* Icon Circle */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: cert.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {cert.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#045F58',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    margin: '0 0 8px 0',
                  }}
                >
                  {cert.name}
                </p>
                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#045F58',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    margin: 0,
                  }}
                >
                  {cert.expires}
                </p>
              </div>
            </div>

            {/* Right: Arrow Button */}
            <button
              style={{
                width: '32px',
                height: '32px',
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
              <ChevronRight size={16} color="#045F58" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
