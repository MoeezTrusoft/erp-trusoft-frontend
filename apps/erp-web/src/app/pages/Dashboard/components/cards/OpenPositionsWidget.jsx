import { UserCog } from 'lucide-react';
import { useState } from 'react';
import OpenPositionsChart from '../charts/OpenPositionsChart';

export default function OpenPositionsWidget() {
  const [department, setDepartment] = useState('All');

  return (
    <div className="p-6 flex flex-col" style={{ height: '100%', minHeight: '350px' }}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserCog size={24} color="#035F5B" />
          </div>
          <h2
            className="text-[24px] font-medium leading-none shrink-0"
            style={{ fontFamily: 'Poppins', color: '#035F5B' }}
          >
            Open Positions
          </h2>
          <div className="flex-1" style={{ height: '1px', backgroundColor: '#035F5B' }} />
        </div>

        {/* View All Button */}
        <button
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            backgroundColor: '#64E2D3',
            border: 'none',
            borderRadius: '97px',
            padding: '8px 16px',
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          View All
          <span style={{ fontSize: '16px' }}>▼</span>
        </button>
      </div>

      {/* Department Filter & Stats */}
      <div className="flex items-center gap-4 mb-4">
        {/* Department Dropdown */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
            backgroundColor: '#64E2D3',
            border: '1px solid #64E2D3',
            borderRadius: '20px',
            padding: '8px 14px',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <option>All</option>
          <option>Engineering</option>
          <option>Sales</option>
          <option>Marketing</option>
        </select>

        {/* Open Positions Badge */}
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            backgroundColor: '#035F5B',
            borderRadius: '12px',
            padding: '6px 14px',
            display: 'inline-block',
          }}
        >
          Open Positions: 23
        </div>

        {/* Avg Time */}
        <div style={{ marginLeft: 'auto' }}>
          <span style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#333333' }}>
            Avg Time:{' '}
          </span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 600,
              color: '#035F5B',
              marginLeft: '4px',
            }}
          >
            21 Days
          </span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ flex: 1 }}>
        <OpenPositionsChart department={department} />
      </div>
    </div>
  );
}
