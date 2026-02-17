import { UserCog } from 'lucide-react';
import ReactECharts from 'echarts-for-react';

export default function TurnoverRetention() {
  const chartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff' },
      formatter: '{b0}: {c0}%',
    },
    grid: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Sales', 'Support', 'Engineering', 'Production', 'HR'],
      axisLine: { show: true, lineStyle: { color: '#999999' } },
      axisTick: { show: false },
      axisLabel: { show: true, color: '#6B7280', fontSize: 11, fontFamily: 'Poppins' },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: true, lineStyle: { color: '#999999' } },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        data: [4.2, 6.8, 9.2, 5.0, 7.5],
        type: 'bar',
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          color: {
            type: 'linear',
            x: 0, y: 1, x2: 0, y2: 0,
            colorStops: [
              { offset: 0, color: '#035F5B' },
              { offset: 1, color: '#64E2D3' },
            ],
          },
        },
        barWidth: 58,
        barCategoryGap: '10%',
      },
    ],
  };

  const ProgressBar = ({ label, value, percent }) => (
    <div style={{ width: '398px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Poppins' }}>{label}</span>
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 rounded-full overflow-hidden" style={{ height: '13px', backgroundColor: 'var(--color-primary-lightest)' }}>
          <div className="rounded-full h-full" style={{ width: `${percent}%`, backgroundColor: 'var(--color-primary-darkest)' }} />
        </div>
        <span className="text-sm font-medium text-gray-700 shrink-0 w-10 text-right" style={{ fontFamily: 'Poppins' }}>{value}</span>
      </div>
    </div>
  );

  return (
    <div
      className="bg-white shadow-sm border border-gray-200 p-6 flex flex-col"
      style={{ borderRadius: '17px', height: '496px', width: '100%' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <UserCog size={24} color="#035F5B" />
        <h2
          className="text-[24px] font-medium text-[var(--color-primary-darkest)] leading-none shrink-0"
          style={{ fontFamily: 'Poppins' }}
        >
          Turnover & Retention
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />
      </div>

      {/* Progress Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
        <ProgressBar label="Voluntary" value="6.2%" percent={80} />
        <ProgressBar label="Involuntary" value="1.1%" percent={45} />
      </div>

      {/* By Department */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: 'Poppins' }}>By Department</h3>
        <div className="flex-1">
          <ReactECharts option={chartOption} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
    </div>
  );
}