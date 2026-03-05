import { UserCog } from 'lucide-react';

export default function PayrollSummary() {
  return (
    <div className="p-6 w-full" style={{ height: '290px' }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          className="text-[24px] font-medium text-[var(--color-primary-darkest)] leading-none shrink-0"
          style={{ fontFamily: 'Poppins' }}
        >
          Payroll Summary
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* Next Payroll Date */}
      <div className="flex items-center gap-2 py-4">
        <span
          className="text-[20px] font-medium text-gray-700"
          style={{ fontFamily: 'Poppins' }}
        >
          Next Payroll Date:
        </span>
        <span
          className="text-[20px] font-bold text-[var(--color-primary-darkest)]"
          style={{ fontFamily: 'Poppins' }}
        >
          10 January 2026
        </span>
      </div>

      <div
        className="w-full"
        style={{ height: '1px', backgroundColor: '#d3e0df' }}
      />

      {/* Status */}
      <div className="flex items-center gap-3 py-6">
        <span className="text-[20px] font-medium text-gray-700" style={{ fontFamily: 'Poppins' }}>Status:</span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium bg-[var(--color-primary-lightest)] text-[var(--color-primary-darkest)]" style={{ fontFamily: 'Poppins' }}>
          Processing
        </span>
      </div>
      <div className="w-full" style={{ height: '1px', backgroundColor: '#d3e0df' }} />

      {/* Approvals */}
      <div className="flex flex-wrap gap-2 pt-6">
        <span className="px-3 py-1.5 text-[14px] font-medium rounded-full bg-[var(--color-primary-medium)] text-white" style={{ fontFamily: 'Poppins' }}>
          Pending Approvals: 7
        </span>
        <button className="px-3 py-1.5 text-[14px] font-medium rounded-full bg-[var(--color-primary-darkest)] text-white hover:opacity-90 transition-opacity" style={{ fontFamily: 'Poppins' }}>
          Review Payroll
        </button>
      </div>
    </div>
  );
}