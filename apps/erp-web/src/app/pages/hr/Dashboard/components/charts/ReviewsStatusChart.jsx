import ReactECharts from 'echarts-for-react';

const DATA = [
  { name: 'To Start', value: 22, color: '#cee9e6' },
  { name: 'In progress', value: 87, color: '#4ad2c5' },
  { name: 'Submitted', value: 51, color: '#27a498' },
  { name: 'Completed', value: 160, color: '#00665e' },
  { name: 'Re-Assigned', value: 5, color: '#ff9c55' },
];

export default function ReviewsStatusChart() {
  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff', fontFamily: 'Poppins' },
      formatter: '{b}: {c} ({d}%)',
    },
    title: {
      text: 'Performance\nReviews',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#333333',
        fontFamily: 'Poppins',
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
      },
      textAlign: 'center',
      textVerticalAlign: 'middle',
    },
    series: [
      {
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['50%', '50%'],
        data: DATA.map((d) => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })),
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 0,
        },
        label: { show: false },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div style={{ display: 'flex', gap: '24px', height: '100%', alignItems: 'flex-start' }}>
      {/* Donut chart — left side */}
      <div style={{ flexShrink: 0, width: '200px', height: '200px', position: 'relative' }}>
        <ReactECharts option={option} style={{ height: '200px', width: '200px' }} />
      </div>

      {/* Legend — top right, then button below */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
        {DATA.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                flexShrink: 0,
                backgroundColor: item.color,
              }}
            />
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 400,
                color: '#333333',
              }}
            >
              {item.name}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
