import { UserCog, ArrowRight } from 'lucide-react';

export default function ActiveEnrollmentsWidget() {
  const courses = [
    { name: 'Leadership Training', count: 12 },
    { name: 'Leadership Training', count: 11 },
    { name: 'Leadership Training', count: 21 },
    { name: 'Leadership Training', count: 18 },
  ];

  return (
    <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <UserCog size={24} color="#035F5B" />
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
          Active Enrollments
        </h2>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#d3e0df', minWidth: '10px' }} />
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
        {/* Left: Number + Label + Overdue */}
        <div>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '48px',
              fontWeight: 700,
              color: '#035F5B',
              margin: '0 0 4px 0',
              lineHeight: 1,
            }}
          >
            146
          </p>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 500,
              color: '#333333',
              margin: '0 0 6px 0',
            }}
          >
            Active enrollments
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#EF4444',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '13px',
                fontWeight: 500,
                color: '#EF4444',
              }}
            >
              Overdue: 12
            </span>
          </div>
        </div>

        {/* Right: View Enrollment Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#64E2D3',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 16px',
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            color: '#035F5B',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            flexShrink: 0,
            marginTop: '8px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4ECCC4';
            e.currentTarget.style.transform = 'translateX(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#64E2D3';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span>View Enrollment</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Active Courses Header */}
      <p
        style={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 600,
          color: '#035F5B',
          margin: '0 0 12px 0',
        }}
      >
        Active Courses
      </p>

      {/* Course List */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {courses.map((course, idx) => (
          <div key={idx}>
            {/* Separator line */}
            <div style={{ height: '1px', backgroundColor: '#d3e0df' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 4px',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fffe';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {/* Left: Dot + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#00918E',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#045F58',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                >
                  {course.name}
                </span>
              </div>

              {/* Right: Count Badge */}
              <div
                style={{
                  width: '31px',
                  height: '30px',
                  borderRadius: '100px',
                  backgroundColor: '#B4E2DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#035F5B',
                  flexShrink: 0,
                }}
              >
                {course.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
