import {
  UserCog,
  UserPlus,
  FileCheck2,
  FileText,
  Banknote,
  CalendarRange,
  Target,
  MoreHorizontal,
  Users,
} from 'lucide-react';

export default function QuickActionsWidget() {
  const btnStyle = {
    backgroundColor: 'rgba(179, 226, 222, 0.4)',
    border: '1px solid var(--color-primary-darkest)',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    padding: '0 16px',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    width: '100%',
    height: '63px',
  };

  const labelStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#333333',
  };

  const iconStyle = {
    color: '#035F5B',
    fontSize: '22px', // Kept for compatibility if anything else uses it, but SVGs use width/height
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  return (
    <div className="px-5 pb-5 overflow-y-auto h-full">
      {/* Widget Heading */}
      <h2
        className="text-[24px] font-medium leading-none flex items-center gap-2"
        style={{
          fontFamily: 'Poppins',
          color: 'var(--color-primary-darkest)',
          padding: '24px 12px 36px 8px',
        }}
      >
        <Users size={28} color="#035F5B" />
        Quick Actions
        <div
          className="flex-1"
          style={{ height: '1px', backgroundColor: '#d3e0df' }}
        />
      </h2>

      <div className="grid grid-cols-2" style={{ columnGap: '12px', rowGap: '32px' }}>
        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <UserPlus size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Add Employee</span>
        </button>

        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <FileCheck2 size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Approve Leave</span>
        </button>

        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <FileText size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Create Requisition</span>
        </button>

        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <Banknote size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Run Payroll</span>
        </button>

        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <CalendarRange size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Schedule Interview</span>
        </button>

        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <Target size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Create Goal Cycle</span>
        </button>

        <button
          style={btnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={iconStyle}>
            <CalendarRange size={24} color="#035F5B" />
          </span>
          <span style={labelStyle}>Schedule Interview</span>
        </button>

        <button
          style={{ ...btnStyle, justifyContent: 'center' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span style={labelStyle}>More</span>
          <span style={{ ...iconStyle, width: 'auto' }}>
            <MoreHorizontal size={24} color="#035F5B" />
          </span>
        </button>
      </div>
    </div>
  );
}
