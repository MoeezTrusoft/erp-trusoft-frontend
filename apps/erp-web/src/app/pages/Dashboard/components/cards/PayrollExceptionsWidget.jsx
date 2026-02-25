import { UserCog, ChevronRight } from 'lucide-react';

export default function PayrollExceptionsWidget() {
  const exceptions = [
    {
      id: 1,
      severity: 'High',
      severityColor: '#035F5B',
      text: '8 employees missing bank info',
    },
    {
      id: 2,
      severity: 'Low',
      severityColor: '#64E2D3',
      text: '3 deductions exceed cap',
    },
    {
      id: 3,
      severity: 'Medium',
      severityColor: '#FDB913',
      text: '5 overtime entries unapproved',
    },
  ];

  return (
    <div className="p-6 flex flex-col" style={{ height: '100%', minHeight: '350px' }}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserCog size={24} color="#035F5B" />
          </div>
          <h2
            className="text-[24px] font-medium leading-none shrink-0"
            style={{ fontFamily: 'Poppins', color: '#035F5B' }}
          >
            Payroll Exceptions
          </h2>
          <div className="flex-1" style={{ height: '1px', backgroundColor: '#d3e0df' }} />
        </div>

        {/* Issues Badge */}
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#FFFFFF',
            backgroundColor: '#64E2D3',
            borderRadius: '20px',
            padding: '6px 14px',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {exceptions.length} Issues
        </div>
      </div>

      {/* Exceptions List */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {exceptions.map((exception, index) => (
          <div key={exception.id}>
            <div className="flex items-center justify-between gap-3 py-4">
              {/* Severity Badge */}
              <div
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: exception.severityColor,
                  borderRadius: '12px',
                  padding: '4px 12px',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {exception.severity}
              </div>

              {/* Exception Text */}
              <div
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#035F5B',
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {exception.text}
              </div>

              {/* Arrow Icon */}
              <ChevronRight size={20} color="#64E2D3" style={{ flexShrink: 0 }} />
            </div>

            {/* Separator Line */}
            {index < exceptions.length - 1 && (
              <div style={{ height: '1px', backgroundColor: '#d3e0df' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
