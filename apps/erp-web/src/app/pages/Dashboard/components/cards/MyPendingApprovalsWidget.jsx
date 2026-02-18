import { useState } from 'react';
import { UserCog } from 'lucide-react';

export default function MyPendingApprovalsWidget() {
  const cardStyle = {
    backgroundColor: 'rgba(179, 226, 222, 0.4)', // --color-primary-lightest (#B3E2DE) at 0% opacity
    borderRadius: '12px',
    border: '1px solid var(--color-primary-darkest)',
    padding: '12px',
  };

  const nameStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '100%',
    color: '#000000',
  };

  const subTextStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '100%',
    color: '#333333',
    marginTop: '4px',
  };

  const sectionHeadingStyle = {
    color: 'var(--color-primary-dark)',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '100%',
    marginBottom: '10px',
    marginTop: '18px',
    paddingLeft: '6px',
    paddingBottom: '4px',
  };

  const ApprovedButton = () => {
    const [hovered, setHovered] = useState(false);
    return (
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? '#3dd9c5' : 'var(--color-primary-lighter)',
          color: 'var(--color-primary-darkest)',
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '100%',
          borderRadius: '12.5px',
          width: '103px',
          height: '25px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          boxShadow: hovered ? '0 3px 8px rgba(3,95,91,0.25)' : 'none',
        }}
      >
        Approved
      </button>
    );
  };

  const RejectButton = () => {
    const [hovered, setHovered] = useState(false);
    return (
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? '#c0272b' : '#ED3237',
          color: '#FFFFFF',
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '100%',
          borderRadius: '12.5px',
          width: '77px',
          height: '25px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          boxShadow: hovered ? '0 3px 8px rgba(237,50,55,0.35)' : 'none',
        }}
      >
        Reject
      </button>
    );
  };

  const ActionButtons = () => (
    <div
      className="flex flex-shrink-0"
      style={{ gap: '8px', width: '188px', height: '25px', paddingRight: '10px' }}
    >
      <ApprovedButton />
      <RejectButton />
    </div>
  );

  return (
    <div className="px-5 pb-5 overflow-y-auto h-full">
      {/* Widget Heading */}
      <h2
        className="text-[24px] font-medium leading-none flex items-center gap-2"
        style={{
          fontFamily: 'Poppins',
          color: 'var(--color-primary-darkest)',
          padding: '24px 12px 24px 8px',
        }}
      >
        <div style={{ flexShrink: 0, minWidth: '28px', minHeight: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={28} color="#035F5B" />
        </div>
        My Pending Approvals
        <div
          className="flex-1"
          style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }}
        />
      </h2>

      {/* Leave Request */}
      <div className="mb-3">
        <h4 style={sectionHeadingStyle}>Leave Request</h4>
        <div style={cardStyle}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1" style={{ paddingLeft: '10px' }}>
              <p style={nameStyle}>Ayesha Khan</p>
              <p style={subTextStyle}>Dec 03–Dec 05</p>
            </div>
            <ActionButtons />
          </div>
        </div>
      </div>

      {/* Timesheet */}
      <div className="mb-3">
        <h4 style={sectionHeadingStyle}>Timesheet</h4>
        <div style={cardStyle}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1" style={{ paddingLeft: '10px' }}>
              <p style={nameStyle}>Bilal Ahmed</p>
              <p style={subTextStyle}>Week of Dec 23</p>
            </div>
            <ActionButtons />
          </div>
        </div>
      </div>

      {/* Claim */}
      <div className="mb-3">
        <h4 style={sectionHeadingStyle}>Claim</h4>
        <div style={cardStyle}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1" style={{ paddingLeft: '10px' }}>
              <p style={nameStyle}>Sara Iqbal</p>
              <p style={subTextStyle}>Medical reimbursement</p>
              <p style={subTextStyle}>12,500 PKR</p>
            </div>
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
