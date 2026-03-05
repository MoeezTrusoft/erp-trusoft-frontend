import { useState } from 'react';
import { UserCog } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const leaveData = [
  {
    id: 1,
    name: 'Ayesha Khan',
    day: 'Tuesday',
    type: 'Annual Leave',
    avatar: 'https://i.pravatar.cc/40?img=1',
    typeColor: 'var(--color-primary-lightest)',
    typeOpacity: 1,
  },
  {
    id: 2,
    name: 'Hamza Khan',
    day: 'Friday',
    type: 'Sick Leave',
    avatar: 'https://i.pravatar.cc/40?img=2',
    typeColor: 'var(--color-primary-medium)',
    typeOpacity: 1,
  },
  {
    id: 3,
    name: 'Fatima Khan',
    day: 'Tuesday',
    type: 'Annual Leave',
    avatar: 'https://i.pravatar.cc/40?img=3',
    typeColor: 'var(--color-primary-lightest)',
    typeOpacity: 1,
  },
  {
    id: 4,
    name: 'Farah Khan',
    day: 'Monday',
    type: 'Sick Leave',
    avatar: 'https://i.pravatar.cc/40?img=4',
    typeColor: 'var(--color-primary-medium)',
    typeOpacity: 1,
  },
];

// Toggle switch matching Figma: width 23.62, height 16, border-radius 100px
function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      style={{
        width: '36px',
        height: '20px',
        borderRadius: '100px',
        backgroundColor: checked ? '#035F5B' : '#ccc',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background-color 0.2s ease',
        flexShrink: 0,
        padding: 0,
      }}
      aria-checked={checked}
      role="switch"
    >
      <span
        style={{
          position: 'absolute',
          top: '2px',
          left: checked ? '18px' : '2px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          transition: 'left 0.2s ease',
          display: 'block',
        }}
      />
    </button>
  );
}

export default function WhosOnLeaveWidget() {
  const [allEmployees, setAllEmployees] = useState(true);

  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'Poppins, sans-serif',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            color: '#035F5B',
            margin: 0,
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          Who's On Leave This Week
        </h2>
        {/* Divider line */}
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* My Team / All Employees Toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '8px',
          marginTop: '20px',
          marginBottom: '8px',
          // width matches Figma: 204.62px total frame
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: '#333333',
            lineHeight: '22px',
          }}
        >
          My Team/ All Employees
        </span>
        <ToggleSwitch checked={allEmployees} onChange={setAllEmployees} />
      </div>

      {/* Weekdays Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '36px',
          marginBottom: '24px',
          paddingLeft: '0px',
        }}
      >
        {DAYS.map((day) => (
          <span
            key={day}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: '#333333',
              lineHeight: '100%',
              width: '31px',
              textAlign: 'center',
              display: 'inline-block',
            }}
          >
            {day}
          </span>
        ))}
      </div>

      {/* Divider under weekdays */}
      <div style={{ height: '1px', backgroundColor: '#F0F0F0', marginBottom: '6px' }} />

      {/* Employee Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
        {leaveData.map((leave, idx) => (
          <div
            key={leave.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0px',
              height: '60px',
              borderBottom: idx < leaveData.length - 1 ? '1px solid #F0F0F0' : 'none',
            }}
          >
            {/* Avatar + Name — flex ~2 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flex: '0 0 auto',
                width: '155px',
              }}
            >
              <img
                src={leave.avatar}
                alt={leave.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#000000',
                  whiteSpace: 'nowrap',
                  lineHeight: '100%',
                }}
              >
                {leave.name}
              </span>
            </div>

            {/* Day pill — matches Figma: width 81, height 30, border-radius 52px, padding 10px, bg #EDEDED */}
            <div
              style={{
                width: '81px',
                height: '30px',
                borderRadius: '52px',
                marginLeft: '10px',
                backgroundColor: '#EDEDED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: '#333333',
                  lineHeight: '100%',
                }}
              >
                {leave.day}
              </span>
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Leave type badge — matches Figma: width 130, height 25, border-radius 12.5px */}
            <div
              style={{
                width: '130px',
                height: '25px',
                borderRadius: '12.5px',
                backgroundColor: leave.typeColor,
                opacity: leave.typeOpacity,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--color-primary-darkest)',
                  lineHeight: '100%',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {leave.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
