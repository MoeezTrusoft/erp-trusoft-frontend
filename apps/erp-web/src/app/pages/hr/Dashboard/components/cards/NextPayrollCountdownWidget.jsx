import { UserCog } from 'lucide-react';

export default function NextPayrollCountdownWidget() {
  const payrollDate = new Date('2026-03-10');
  const today = new Date();
  const daysLeft = Math.ceil((payrollDate - today) / (1000 * 60 * 60 * 24));

  const day = payrollDate.getDate();
  const month = payrollDate.toLocaleString('default', { month: 'short' });

  return (
    <div
      style={{
        padding: '16px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '12px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
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
          Next Payroll Countdown
        </h2>
        <div
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#d3e0df',
            minWidth: '20px',
            marginLeft: '12px',
          }}
        />
      </div>

      {/* Payroll Date Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: 400,
            color: '#333333',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          Next Payroll Date:
        </span>
        <span
          style={{
            backgroundColor: '#045F58',
            color: '#ffffff',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            borderRadius: '15px',
            width: '158.72px',
            height: '31px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          In Review
        </span>
      </div>

      {/* Date Large */}
      <p
        style={{
          fontFamily: 'Poppins',
          fontSize: '42px',
          fontWeight: 700,
          color: '#3EB5AF',
          margin: '0 0 16px 0',
          lineHeight: 1.1,
        }}
      >
        {day} {month}
      </p>

      {/* Days Left */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
        }}
      >
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: '52px',
            fontWeight: 700,
            color: '#00918E',
            margin: 0,
            lineHeight: 1,
          }}
        >
          {daysLeft}
        </p>
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: '26px',
            fontWeight: 400,
            color: '#333333',
            lineHeight: '100%',
            letterSpacing: '0%',
            margin: 0,
          }}
        >
          Days Left
        </p>
      </div>

      {/* CTA Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <button
          style={{
            backgroundColor: '#f0f9f8',
            border: '1px solid #d3e0df',
            borderRadius: '20px',
            padding: '10px 20px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 400,
            color: '#333333B2',
            lineHeight: '100%',
            letterSpacing: '0%',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B4E2DF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f9f8';
          }}
        >
          Open Payroll Processing Flow
        </button>
      </div>
    </div>
  );
}
