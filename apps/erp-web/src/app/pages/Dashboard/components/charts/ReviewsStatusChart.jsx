import ReactECharts from 'echarts-for-react';

export default function ReviewsStatusChart() {
  const data = [
    { name: 'To Start', value: 22, color: '#F2F2F2' },
    { name: 'In progress', value: 87, color: '#FFB84D' },
    { name: 'Submitted', value: 45, color: '#64E2D3' },
    { name: 'Completed', value: 160, color: '#035F5B' },
    { name: 'Re-Assigned', value: 5, color: '#FFB3B3' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff', fontFamily: 'Poppins' },
      formatter: '{b}: {c} ({d}%)',
    },
    series: [
      {
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['35%', '50%'],
        data: data,
        itemStyle: {
          borderRadius: [4, 4],
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
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
    <div style={{ display: 'flex', gap: '20px', height: '100%', alignItems: 'center' }}>
      {/* Chart */}
      <div style={{ flex: 0.5, minHeight: '250px' }}>
        <ReactECharts option={option} style={{ height: '250px', width: '100%' }} />
      </div>

      {/* Legend */}
      <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {data.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                backgroundColor: item.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 500,
                color: '#333333',
              }}
            >
              {item.name}:
            </span>
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: 600,
                color: '#035F5B',
                marginLeft: 'auto',
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
