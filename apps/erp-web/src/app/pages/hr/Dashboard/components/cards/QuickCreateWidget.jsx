import { UserCog, FileText, User } from 'lucide-react';

export default function QuickCreateWidget() {
  const labelStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#333333',
    textAlign: 'left',
  };

  const iconColor = '#035F5B';
  const iconSize = 20;

  return (
    <div className="px-3 pb-5 overflow-y-auto h-full">
      {/* Widget Heading */}
      <h2
        className="text-[24px] font-medium leading-none flex items-center gap-2"
        style={{
          fontFamily: 'Poppins',
          color: 'var(--color-primary-darkest)',
          padding: '24px 12px 24px 8px',
        }}
      >
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        Quick Create
        <div
          className="flex-1"
          style={{ height: '1px', backgroundColor: '#d3e0df' }}
        />
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
        {/* 1st */}
        <button
          className="w-full flex items-center transition-colors hover:bg-gray-50"
          style={{ gap: '12px', height: '44px', padding: '0 16px', borderRadius: '8px' }}
        >
          <FileText size={iconSize} color={iconColor} className="flex-shrink-0" />
          <span style={labelStyle}>New job requisition</span>
        </button>

        {/* 2nd */}
        <button
          className="w-full flex items-center transition-colors hover:bg-gray-50"
          style={{ gap: '12px', height: '44px', padding: '0 16px', borderRadius: '8px' }}
        >
          <FileText size={iconSize} color={iconColor} className="flex-shrink-0" />
          <span style={labelStyle}>New course</span>
        </button>

        {/* 3rd — keep full-bleed bg, bold text, primary color */}
        <button
          className="w-full flex items-center transition-opacity hover:opacity-75"
          style={{
            gap: '12px',
            height: '44px',
            backgroundColor: 'rgba(179, 226, 222, 0.4)',
            marginLeft: '-12px',
            marginRight: '-12px',
            width: 'calc(100% + 24px)',
            padding: '0 28px',
          }}
        >
          <FileText size={iconSize} color={iconColor} className="flex-shrink-0" />
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'var(--color-primary-darkest)',
              textAlign: 'left',
            }}
          >
            New policy document
          </span>
        </button>

        {/* 4th */}
        <button
          className="w-full flex items-center transition-colors hover:bg-gray-50"
          style={{ gap: '12px', height: '44px', padding: '0 16px', borderRadius: '8px' }}
        >
          <User size={iconSize} color={iconColor} className="flex-shrink-0" />
          <span style={labelStyle}>New shift rule</span>
        </button>
      </div>
    </div>
  );
}
