export default function TalentCard({ talent, onRemove , onView}) {
  return (
    <div
      className="w-full relative rounded-[10px] p-6 shadow-xl flex flex-col gap-4"
      style={{
        background: 'linear-gradient(145deg, #3a3a3a, #2f2f2f)',
      }}
    >
      {/* Ribbon Strip */}
      <div className="absolute -top-2 right-6">
        <div
          className="w-12 h-20 bg-teal-600 rounded-t-lg relative overflow-hidden shadow-md"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
          }}
        >
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-200 rounded-full border-4 border-red-500"></div>
        </div>
      </div>

      {/* Name */}
      <div className="pb-2">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-primary-light)' }}>
          {talent.name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-gray-light)' }}>
          {talent.role}
        </p>
      </div>

      <div className="h-px" style={{ backgroundColor: 'var(--color-gray-light)' }} />

      {/* Info Section */}
      <div className="w-full flex justify-between items-center gap-2 text-sm pt-3">
        <div className="flex flex-col gap-1">
          <p style={{ color: 'var(--color-primary-light)' }}>Experience</p>
          <p className="text-sm text-white">{talent.experience}</p>
        </div>

        <div className="h-12 w-px bg-white/30"></div>

        <div className="flex flex-col gap-1">
          <p style={{ color: 'var(--color-primary-light)' }}>Location</p>
          <p className="text-sm text-white">{talent.location}</p>
        </div>

        <div className="h-12 w-px bg-white/30"></div>

        <div className="flex flex-col gap-1">
          <p style={{ color: 'var(--color-primary-light)' }}>Skills</p>
          <p className="text-sm text-white line-clamp-2">
            {talent.skills.join(', ')}
          </p>
        </div>
      </div>

      <div className="h-px mt-2" style={{ backgroundColor: 'var(--color-gray-light)' }} />

      {/* Actions */}
      <div className="flex justify-end gap-6 mt-3">
        <button
          className="font-medium"
          style={{ color: 'var(--color-priority-high)' }}
          onClick={() => onRemove(talent)}
        >
          Remove
        </button>

        <button
  onClick={() => {
    console.log("VIEW CLICKED", talent);
    onView(talent);
  }}
  className="px-4 py-2 rounded-md font-medium"
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