export default function TalentCard({ talent, onRemove, onView }) {
  return (
    <div
      className="w-full relative rounded-[10px] p-4 shadow-xl flex flex-col gap-3"
      style={{
        background: 'linear-gradient(145deg, #3a3a3a, #2f2f2f)',
      }}
    >
      {/* Ribbon Strip */}
      <div className="absolute -top-2 right-4">
        <div
          className="w-10 h-16 bg-teal-600 rounded-t-lg relative overflow-hidden shadow-md"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
          }}
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-200 rounded-full border-4 border-red-500"></div>
        </div>
      </div>

      {/* Name */}
      <div className="">
        <h3 className="text-base font-semibold" style={{ color: 'var(--color-primary-light)' }}>
          {talent.name}
        </h3>
        <p className="text-xs" style={{ color: 'var(--color-gray-light)' }}>
          {talent.role}
        </p>
      </div>

      <div className="h-px" style={{ backgroundColor: 'var(--color-gray-light)' }} />

      {/* Info Section */}
      <div className="w-full flex justify-evenly items-start gap-2 text-sm">
        <div className="w-[30%] flex flex-col gap-1 border-r border-white/30">
          <p style={{ color: 'var(--color-primary-light)' }} className="text-sm">Experience</p>
          <p className="text-xs text-white">{talent.experience}</p>
        </div>

        {/* <div className="h-12 w-px bg-white/30"></div> */}

        <div className="w-[28%] flex flex-col gap-1 border-r border-white/30">
          <p style={{ color: 'var(--color-primary-light)' }} className="text-sm">Location</p>
          <p className="text-xs text-white">{talent.location}</p>
        </div>

        {/* <div className="h-12 w-px bg-white/30"></div> */}

        <div className="w-[42%] flex flex-col gap-1">
          <p style={{ color: 'var(--color-primary-light)' }} className="text-sm">Skills</p>
          <p className="text-xs text-white line-clamp-1">{talent.skills.join(', ')}</p>
        </div>
      </div>

      <div className="h-px" style={{ backgroundColor: 'var(--color-gray-light)' }} />

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          className="text-xs font-medium"
          style={{ color: 'var(--color-priority-high)' }}
          onClick={() => onRemove(talent)}
        >
          Remove
        </button>

        <button
          onClick={() => {
            console.log('VIEW CLICKED', talent);
            onView(talent);
          }}
          className="px-2 py-1 rounded-md text-xs font-medium"
          style={{
            backgroundColor: 'var(--color-primary-light)',
            color: 'var(--color-gray-dark)',
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
