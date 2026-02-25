import { UserCog } from 'lucide-react';
import ReactECharts from 'echarts-for-react';

export default function DiversityMixWidget() {
  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff' },
      formatter: '{b}: {c}%'
    },
    graphic: [
      {
        type: 'text',
        left: '18%',
        top: '35%',
        style: {
          text: 'Gender\nSplit',
          textAlign: 'center',
          textVerticalAlign: 'middle',
          fill: '#000',
          fontSize: 18,
          fontWeight: 600,
          fontFamily: 'Poppins',
          lineHeight: 32,
        },
      },
    ],
    series: [
      {
        name: 'Gender Split',
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['30%', '50%'],
        startAngle: 0,
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'outside',
          formatter: function (params) {
            let icon = '⚥';
            if (params.name === 'Male') icon = '♂';
            if (params.name === 'Females') icon = '♀';
            return '{icon|' + icon + '} {percent|' + params.percent + '%}';
          },
          rich: {
            icon: {
              fontSize: 18,
              color: '#035F5B',
            },
            percent: {
              fontSize: 16,
              fontWeight: 'bold',
              color: '#035F5B',
              fontFamily: 'Poppins',
              padding: [0, 0, 0, 4]
            }
          },
          backgroundColor: '#E8F5F4',
          padding: [6, 10],
          borderRadius: 6,
        },
        labelLine: {
          show: true,
          length: 12,
          length2: 8,
          lineStyle: { color: '#ccc' }
        },
        emphasis: {
          scale: true,
          scaleSize: 5,
        },
        data: [
          { value: 36, name: 'Male', itemStyle: { color: '#035F5B' } },
          { value: 62, name: 'Females', itemStyle: { color: '#20A397' } },
          { value: 2, name: 'Other', itemStyle: { color: '#B3E2DE' } },
        ],
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <div style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <UserCog size={24} color="#035F5B" />
        </div>
        <h2
          style={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 600,
            color: '#035F5B',
            margin: 0,
            lineHeight: 1,
          }}
        >
          Diversity Mix
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df' }} />
      </div>

      {/* Chart and Legend Container */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', flex: 1, minHeight: 0, marginTop:'-30px' }}>
        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginRight: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#035F5B', borderRadius: '2px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: '#333333' }}>Male</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#20A397', borderRadius: '2px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: '#333333' }}>Females</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#B3E2DE', borderRadius: '2px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: '#333333' }}>Other</span>
          </div>
        </div>

        {/* Chart */}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', height: '220px' }}>
            <ReactECharts
              option={option}
              style={{ height: '100%', width: '100%' }}
              opts={{ renderer: 'svg' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
