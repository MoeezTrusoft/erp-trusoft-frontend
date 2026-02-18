export default function UpcomingInterviewsChart() {
  const data = [
    {
      time: '10:00 AM',
      candidate: 'Ali Raza',
      role: 'Backend Developer',
      interviewers: ['Irfan Abdi'],
      moreCount: 2,
    },
    {
      time: '10:00 AM',
      candidate: 'Maria',
      role: 'UI Designer',
      interviewers: ['Meesam'],
      moreCount: 2,
    },
    {
      time: '10:00 AM',
      candidate: 'Ali Raza',
      role: 'Backend Developer',
      interviewers: ['Moiz Qadri'],
      moreCount: 2,
    },
    {
      time: '10:00 AM',
      candidate: 'Mohd Ahsan',
      role: 'DevOps Engineer',
      interviewers: ['Hamza Shahid'],
      moreCount: 2,
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Table Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '24px',
          padding: '12px 16px',
          backgroundColor: '#3FB5B0',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            minWidth: '80px',
          }}
        >
          Time
        </span>
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
          }}
        >
          Candidate
        </span>
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            minWidth: '120px',
          }}
        >
          Interviewer
        </span>
      </div>

      {/* Table Rows */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {data.map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '24px',
              padding: '14px 16px',
              borderBottom: idx < data.length - 1 ? '1px solid #e5e7eb' : 'none',
              alignItems: 'center',
            }}
          >
            {/* Time */}
            <div
              style={{
                fontFamily: 'Poppins',
                fontSize: '13px',
                fontWeight: 500,
                color: '#fff',
                backgroundColor: '#64E2D3',
                borderRadius: '20px',
                padding: '6px 12px',
                minWidth: '80px',
                textAlign: 'center',
              }}
            >
              {row.time}
            </div>

            {/* Candidate */}
            <div>
              <div
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#035F5B',
                  marginBottom: '2px',
                }}
              >
                {row.candidate}
              </div>
              <div
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: '#999999',
                }}
              >
                {row.role}
              </div>
            </div>

            {/* Interviewers */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: '120px' }}>
              {row.interviewers.map((interviewer, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#035F5B',
                    backgroundColor: '#64E2D3',
                    borderRadius: '16px',
                    padding: '5px 10px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {interviewer}
                </div>
              ))}
              {row.moreCount > 0 && (
                <div
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#fff',
                    backgroundColor: '#035F5B',
                    borderRadius: '16px',
                    padding: '5px 10px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.moreCount} More ▼
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
