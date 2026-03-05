import { UserCog } from 'lucide-react';

export default function AttendanceAndLeave() {
  const barMaxWidth = 260;

  return (
    <div
      className="bg-white shadow-sm border border-gray-200 p-6 flex flex-col"
      style={{ borderRadius: '17px', height: '496px', width: '100%' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}
        >
          Attendance & Leave
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* Today's Absences */}
      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-800 mb-4" style={{ fontFamily: 'Poppins' }}>Today's Absences</h3>

        {/* Row 1 - Mehak */}
        <div className="flex items-center py-3" style={{ borderBottom: '1px solid #e5e7eb' }}>
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0 mr-3">
            <img src="https://i.pravatar.cc/40?img=47" alt="Mehak" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Poppins', width: '120px', flexShrink: 0 }}>Mehak Mirral</span>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full text-white whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: 'var(--color-primary-dark)' }}>
              Sick Leave
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full text-white whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: 'var(--color-primary-light)' }}>
              Approved
            </span>
          </div>
        </div>

        {/* Row 2 - Armash */}
        <div className="flex items-center py-3">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0 mr-3">
            <img src="https://i.pravatar.cc/40?img=12" alt="Armash" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Poppins', width: '120px', flexShrink: 0 }}>Armash Arif</span>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: 'var(--color-primary-lightest)', color: 'var(--color-primary-darkest)' }}>
              PTO
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full text-white whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: '#EF4444' }}>
              Disapproved
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3" style={{ height: '1px', backgroundColor: '#d3e0df' }} />

      {/* Monthly Leave Days */}
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-base font-medium text-gray-800 mb-3 self-start" style={{ fontFamily: 'Poppins' }}>Monthly Leave Days</h3>

        <div style={{ width: `${barMaxWidth}px` }}>
          <div className="relative mb-1" style={{ height: '20px' }}>
            <span className="absolute text-xs font-medium" style={{ left: '0%', fontFamily: 'Poppins', color: '#333333' }}>210</span>
            <span className="absolute text-xs font-medium" style={{ left: '50%', transform: 'translateX(-50%)', fontFamily: 'Poppins', color: '#333333' }}>245</span>
            <span className="absolute text-xs font-medium" style={{ right: '0%', fontFamily: 'Poppins', color: '#333333' }}>260</span>
          </div>

          <div style={{ width: '100%', height: '28px', borderRadius: '6px', background: 'linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-primary-light) 100%)', marginBottom: '8px' }} />
          <div style={{ width: '75%', height: '28px', borderRadius: '6px', background: 'linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-primary-light) 100%)' }} />

          <div className="relative mt-1" style={{ height: '20px' }}>
            <span className="absolute text-xs font-medium" style={{ left: '0%', fontFamily: 'Poppins', color: '#333333' }}>SEP</span>
            <span className="absolute text-xs font-medium" style={{ left: '50%', transform: 'translateX(-50%)', fontFamily: 'Poppins', color: '#333333' }}>OCT</span>
            <span className="absolute text-xs font-medium" style={{ right: '0%', fontFamily: 'Poppins', color: '#333333' }}>NOV</span>
          </div>
        </div>
      </div>
    </div>
  );
}