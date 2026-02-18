import ReactECharts from 'echarts-for-react';

export default function CircularProgress({ value = 72, isHalfCircle = false, color1, color2 }) {
  const activeColor = color1 || '#3AA39F'; // Teal color
  const inactiveColor = color2 || '#F3F4F6'; // Light gray background
  const textColor = '#035F5B';

  const strokeWidth = 24; // Thicker stroke for Figma-like appearance

  const option = isHalfCircle
    ? {
        // Half Circle: Two static concentric arcs (Dark Outer, Light Inner)
        series: [
          // Outer Arc (Dark Teal)
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: '100%',
            center: ['50%', '88%'],
            min: 0,
            max: 100,
            splitNumber: 1,
            axisLine: {
              show: true,
              lineStyle: {
                width: 24,
                color: [[1, '#00918D']], // Dark Teal
              },
            },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: { show: false },
            data: [],
          },
          // Inner Arc (Light Teal)
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: '72%',
            center: ['50%', '88%'],
            min: 0,
            max: 100,
            splitNumber: 1,
            axisLine: {
              show: true,
              lineStyle: {
                width: 24,
                color: [[1, '#B2DFDB']], // Light Teal
              },
            },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
              valueAnimation: true,
              formatter: '{value}%',
              color: '#035F5B',
              fontSize: 32,
              fontWeight: '700',
              fontFamily: 'Poppins, sans-serif',
              offsetCenter: [0, '-35%'],
            },
            data: [{ value }],
          },
        ],
      }
    : {
        // Full Circle: Standard Donut Progress
        series: [
          {
            type: 'gauge',
            startAngle: 140,
            endAngle: -270,
            radius: '100%',
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            splitNumber: 1,
            itemStyle: {
              color: activeColor,
            },
            progress: {
              show: true,
              roundCap: true,
              width: strokeWidth,
            },
            pointer: { show: false },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: strokeWidth,
                color: [[1, inactiveColor]],
              },
            },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
              valueAnimation: true,
              formatter: '{value}%',
              color: textColor,
              fontSize: 32,
              fontWeight: '700',
              fontFamily: 'Poppins, sans-serif',
              offsetCenter: [0, '0%'],
            },
            data: [{ value }],
          },
        ],
      };

  const height = isHalfCircle ? '180px' : '160px';
  const width = isHalfCircle ? '200px' : '160px';

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        minHeight: isHalfCircle ? '180px' : '160px',
      }}
    >
      <div style={{ width: '100%', height: '100%', maxWidth: width, maxHeight: height }}>
        <ReactECharts
          option={option}
          style={{ height: '100%', width: '100%', minHeight: isHalfCircle ? '180px' : '160px' }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  );
}
