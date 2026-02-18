import ReactECharts from 'echarts-for-react';

const data = [
  { department: 'Engineering', count: 342 },
  { department: 'Sales', count: 210 },
  { department: 'Support', count: 176 },
  { department: 'HR', count: 34 },
];

const maxCount = Math.max(...data.map((d) => d.count));

export default function DepartmentHeadcountChart() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '180px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {data.map((item) => {
        const barFill = (item.count / maxCount) * 90;
        return (
          <div
            key={item.department}
            style={{
              width: '100%',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {/* Department name */}
            <span
              style={{
                width: '84px',
                height: '22px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#3C3C3C',
                flexShrink: 0,
                display: 'block',
              }}
            >
              {item.department}
            </span>

            {/* Bar track */}
            <div
              style={{
                flex: 1,
                height: '15px',
                borderRadius: '12px',
                backgroundColor: 'transparent',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              {/* Filled bar */}
              <div
                style={{
                  width: `${barFill}%`,
                  height: '100%',
                  borderRadius: '12px',
                  backgroundColor: '#035F5B',
                  transition: 'width 0.4s ease',
                }}
              />
            </div>

            {/* Count */}
            <span
              style={{
                width: '40px',
                height: '22px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#3C3C3C',
                flexShrink: 0,
                textAlign: 'right',
                display: 'block',
              }}
            >
              {item.count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
