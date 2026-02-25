import { UserCog, AlertCircle } from 'lucide-react';

export default function DocumentExpiryAlertsWidget() {
  const expiringDocuments = [
    {
      name: 'Annual Compliance Checklist',
      expires: 'expires in 12 days',
      icon: <UserCog size={20} color="#045F58" />,
      iconBg: '#64E2D3',
    },
    {
      name: 'Software License Agreement',
      expires: 'expires in 21 days',
      icon: <UserCog size={20} color="#045F58" />,
      iconBg: '#64E2D3',
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
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 600,
            color: '#045F58',
            margin: 0,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Document Expiry Alerts
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '20px', marginLeft: '12px' }} />
      </div>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <button
          style={{
            backgroundColor: '#B4E2DF',
            border: 'none',
            borderRadius: '10px',
            width: '130px',
            height: '42px',
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '12px',
            paddingRight: '12px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#045F58',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#9FD9D4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#B4E2DF';
          }}
        >
          Department: All
        </button>
        <button
          style={{
            backgroundColor: '#B4E2DF',
            border: 'none',
            borderRadius: '10px',
            width: '90px',
            height: '42px',
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '12px',
            paddingRight: '12px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#045F58',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#9FD9D4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#B4E2DF';
          }}
        >
          Type: All
        </button>
        <button
          style={{
            backgroundColor: '#B4E2DF',
            border: 'none',
            borderRadius: '10px',
            width: '130px',
            height: '42px',
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '12px',
            paddingRight: '12px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#045F58',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#9FD9D4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#B4E2DF';
          }}
        >
          Next 30 Days
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto' }}>
        {/* Expired Documents Section */}
        <div>
          <h3
            style={{
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontWeight: 600,
              color: '#045F58',
              margin: '10px 0 12px 0',
              width: '237px',
              height: '17px',
              lineHeight: '100%',
            }}
          >
            Expired Documents
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              backgroundColor: 'transparent',
              borderRadius: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                <AlertCircle size={28} color="#045F58" />
              </div>
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#045F58',
                }}
              >
                7 Documents
              </span>
            </div>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '6px',
                color: '#045F58',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontSize: '12px',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                width: '64px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: '0',
                textDecoration: 'underline',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#069388';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#045F58';
              }}
            >
              Check
            </button>
          </div>
        </div>

        {/* Expiring Soon Section */}
        <div>
          <h3
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              fontWeight: 600,
              color: '#045F58',
              margin: '0 0 12px 0',
              width: '237px',
              height: '24px',
              lineHeight: '100%',
            }}
          >
            Expiring Soon 30 days
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {expiringDocuments.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: idx !== expiringDocuments.length - 1 ? '1px solid #e0e8e8' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
              >
                {/* Icon */}
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
                  <UserCog size={28} color="#045F58" />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#069388',
                      margin: '0 0 4px 0',
                      width: '363px',
                      height: '17px',
                    }}
                  >
                    {doc.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#999',
                      margin: 0,
                    }}
                  >
                    {doc.expires}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
