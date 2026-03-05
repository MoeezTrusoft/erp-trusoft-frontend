import { UserCog } from 'lucide-react';

export default function RecommendedCoursesWidget() {
  const courses = [
    {
      title: 'Effective Communication',
      duration: '2 hours',
      type: 'Internal',
      typeColor: '#035F5B',
      typeBg: '#64E2D3',
    },
    {
      title: 'React Performance',
      duration: '4 hours',
      type: 'External',
      typeColor: '#035F5B',
      typeBg: '#64E2D3',
    },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flexShrink: 0 }}>
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
            whiteSpace: 'nowrap',
          }}
        >
          Recommended Courses
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '10px' }} />
      </div>

      {/* Course Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', flex: 1 }}>
        {courses.map((course, idx) => (
          <div
            key={idx}
            style={{
              width: '225px',
              height: '136px',
              backgroundColor: '#B3E2DE',
              borderRadius: '10px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(100, 226, 211, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Trusoft Logo Top Right */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img
                src="/trusoft_logo.png"
                alt="Trusoft"
                style={{
                  width: '56px',
                  height: '15px',
                  objectFit: 'contain',
                  opacity: 0.8,
                }}
              />
            </div>

            {/* Course Title */}
            <h3
              style={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: 600,
                color: '#045F58',
                margin: '0 0 8px 0',
                lineHeight: '120%',
                width: '153px',
              }}
            >
              {course.title}
            </h3>

            {/* Bottom Row: Duration + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#045F58',
                }}
              >
                {course.duration}
              </span>
              <span
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#fff',
                  backgroundColor: '#045F58',
                  borderRadius: '10px',
                  padding: '7px 12px',
                  width: '90px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                {course.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
