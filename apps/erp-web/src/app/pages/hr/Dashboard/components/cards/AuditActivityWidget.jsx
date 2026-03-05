import React from 'react';
import { UserCog, ArrowRight } from 'lucide-react';

export default function AuditActivityWidget() {
  const auditActivities = [
    {
      title: 'Payroll setup updated by Admin',
      description: 'by Admin',
      time: '2h ago',
      icon: <UserCog size={20} color="#045F58" />,
      iconBg: '#B4E2DF',
    },
    {
      title: 'Employee bank info updated by HR',
      description: 'by HR',
      time: 'HR',
      badge: true,
      icon: <UserCog size={20} color="#045F58" />,
      iconBg: '#B4E2DF',
    },
    {
      title: 'Role permissions changed',
      description: 'by Admin',
      time: '8h ago',
      icon: <UserCog size={20} color="#045F58" />,
      iconBg: '#B4E2DF',
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
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 600,
            color: '#045F58',
            margin: 0,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Audit Activity (Last 24h)
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '20px', marginLeft: '12px' }} />
      </div>

      {/* View Audit Trail Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#64E2D4',
            border: '1px solid #AFAFAF',
            borderRadius: '97px',
            width: '161px',
            height: '42px',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '18px',
            paddingRight: '18px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#045F58',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4ECCC4';
            e.currentTarget.style.transform = 'translateX(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#64E2D4';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span>View Audit Trail</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Audit Activities List */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0', overflow: 'auto' }}>
        {auditActivities.map((activity, idx) => (
          <React.Fragment key={idx}>
            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 12px',
              width: '100%',
              minHeight: '68px',
              backgroundColor: 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
              marginBottom: '0',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0faf9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {/* Left: Icon + Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              {/* Icon Circle */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '100px',
                  backgroundColor: activity.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {activity.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#045F58',
                    margin: '0 0 2px 0',
                  }}
                >
                  {activity.title}
                </p>
                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#045F58',
                    margin: 0,
                  }}
                >
                  {activity.description}
                </p>
              </div>
            </div>

            {/* Right: Time/Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexShrink: 0,
              }}
            >
              {activity.badge ? (
                <span
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#045F58',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {activity.time}
                </span>
              ) : (
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#045F58',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {activity.time}
                </span>
              )}
            </div>
          </div>
            {idx !== auditActivities.length - 1 && (
              <div style={{ height: '1px', backgroundColor: '#d3e0df', margin: '0 4px' }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
