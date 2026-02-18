import ReactECharts from 'echarts-for-react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LeaveTrendChart() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 11, 1)); // December 2026

  const data = [
    { date: 'Dec 01', value: 5 },
    { date: 'Dec 03', value: 8 },
    { date: 'Dec 06', value: 12 },
    { date: 'Dec 09', value: 14 },
    { date: 'Dec 12', value: 12 },
    { date: 'Dec 15', value: 15 },
    { date: 'Dec 18', value: 31 },
    { date: 'Dec 21', value: 24 },
    { date: 'Dec 25', value: 18 },
    { date: 'Dec 28', value: 13 },
    { date: 'Dec 31', value: 10 },
  ];

  const dates = data.map(d => d.date.split(' ')[1]);
  const values = data.map(d => d.value);

  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#B3E2DE',
      textStyle: { color: '#035F5B', fontFamily: 'Poppins', fontSize: 13, fontWeight: 600 },
      formatter: function(params) {
        if (params.length > 0) {
          return `${params[0].name}: ${params[0].value} Leaves`;
        }
        return '';
      },
      axisPointer: {
        type: 'cross'
      },
      borderRadius: 8,
      padding: 10,
    },
    grid: {
      left: '8%',
      right: '8%',
      top: '12%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: {
        show: true,
        lineStyle: { color: '#e5e7eb', width: 1 }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 500,
        color: '#035F5B',
        margin: 12,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        lineStyle: { color: '#e5e7eb', type: 'dashed' }
      }
    },
    series: [
      {
        name: 'Leaves',
        type: 'line',
        smooth: true,
        data: values,
        lineStyle: {
          color: '#3FB5B0',
          width: 3,
        },
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#3FB5B0',
          borderColor: '#fff',
          borderWidth: 2,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#045F58' },
              { offset: 1, color: 'rgba(255, 255, 255, 0)' },
            ],
            global: false,
          },
        },
        label: {
          show: true,
          position: 'top',
          fontFamily: 'Poppins',
          fontSize: 12,
          fontWeight: 600,
          color: '#333333',
          distance: 8,
          formatter: function(params) {
            if ([5, 12, 30].includes(params.dataIndex)) {
              return params.value;
            }
            return '';
          }
        },
        emphasis: {
          itemStyle: {
            color: '#035F5B',
            borderColor: '#fff',
            borderWidth: 2,
          },
        },
      },
    ],
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Month Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', width: '184.62px', height: '26px' }}>
        <button
          onClick={handlePrevMonth}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
          }}
        >
          <ChevronLeft size={20} color="#035F5B" />
        </button>
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#333333',
            flex: 1,
            textAlign: 'center',
          }}
        >
          {monthYear}
        </span>
        {/* Dark theme toggle indicator */}
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#035F5B',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* Chart */}
      <div style={{ flex: 1, minHeight: '350px' }}>
        <ReactECharts
          option={option}
          style={{ height: '100%', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  );
}
