
const ProfileDetailModal = ({ isOpen, onClose, talent }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 z-[9998]" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute top-[140px] right-0 bottom-[98px] w-[346px] bg-[var(--color-gray-lightest)] rounded-l-2xl shadow-2xl z-[9999] flex flex-col">
        {/* Header */}
        <div
          className="flex justify-between items-center px-6 py-5 border-b"
          style={{ borderColor: 'var(--color-primary-light)' }}
        >
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-primary-darkest)' }}>
            Profile Detail
          </h2>

          {/* <FiX
            size={20}
            className="cursor-pointer"
            style={{ color: 'var(--color-gray-dark)' }}
            onClick={onClose}
          /> */}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-5">
          <InfoCard label="Candidate" value={talent?.name || 'Ayesha Khan'} />

          <InfoCard label="Previous Role Applied" value={talent?.role || 'UI Designer'} />

          <InfoCard label="Interview score" value="4.2/5" active />

          <InfoCard label="Last Interview" value="Jan 2025" />

          <InfoCard label="Notes" value="Great design sense, limited backend exposure" />

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              className="w-full py-3 rounded-full font-medium text-white"
              style={{ backgroundColor: 'var(--color-primary-darkest)' }}
            >
              Invite to apply
            </button>

            <button
              className="w-full py-3 rounded-full font-medium border"
              style={{
                borderColor: 'var(--color-black)',
                color: 'var(--color-black)',
                backgroundColor: 'var(--color-white)',
              }}
            >
              Move to Pipeline
            </button>

            <button
              className="w-full py-3 rounded-full font-medium text-white"
              style={{ backgroundColor: 'var(--color-priority-high)' }}
            >
              Remove From Pool
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoCard = ({ label, value, active }) => {
  return (
    <div
      className="p-4 rounded-[14px]"
      style={{
        backgroundColor: 'var(--color-primary-lightest)',
        border: active
          ? '2px solid var(--color-primary-dark)'
          : '1px solid var(--color-primary-light)',
      }}
    >
      <p className="text-xs mb-1" style={{ color: 'var(--color-gray-dark)' }}>
        {label}
      </p>

      <p className="text-[15px] font-medium" style={{ color: 'var(--color-gray-dark)' }}>
        {value}
      </p>
    </div>
  );
};

export default ProfileDetailModal;
