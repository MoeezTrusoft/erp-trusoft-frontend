import { UserCog } from 'lucide-react';

export default function TodaysAbsenteesWidget() {
  const absences = [
    {
      id: 1,
      name: 'Mehak Mirral',
      avatar: 'https://i.pravatar.cc/40?img=47',
      leaveType: 'Sick Leave',
      leaveColor: '#EF4444',
    },
    {
      id: 2,
      name: 'Armash Arif',
      avatar: 'https://i.pravatar.cc/40?img=12',
      leaveType: 'Casual Leave',
      leaveColor: '#64E2D3',
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      avatar: 'https://i.pravatar.cc/40?img=33',
      leaveType: 'Unmarked',
      leaveColor: '#4ECCC4',
    },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          Today's Absences
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* Absences List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {absences.map((absence, idx) => (
          <div
            key={absence.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: idx < absences.length - 1 ? '1px solid #d3e0df' : 'none',
            }}
          >
            {/* Employee Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <img
                src={absence.avatar}
                alt={absence.name}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#333333',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {absence.name}
              </span>
            </div>

            {/* Leave Badge */}
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '12px',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: absence.leaveColor,
                borderRadius: '16px',
                padding: '4px 12px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                marginLeft: '10px',
              }}
            >
              {absence.leaveType}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
