
const MoveConfirmModal = ({ isOpen, targetCol, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div
        className="rounded-[10px] w-[30%] shadow-2xl p-6 flex flex-col items-start justify-start gap-5"
        style={{ background: 'var(--color-white)' }}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-5 w-full border-b border-[var(--color-gray-lightest)]">
          <h2 className="text-lg font-semibold" style={{ color: 'var(--color-primary-darkest)' }}>
            Move Card
          </h2>
          <button onClick={onCancel} className="text-lg">
            ×
          </button>
        </div>

        {/* Body */}
        <div className=" flex items-center gap-5 border-b pb-5 w-full border-[var(--color-gray-lightest)]">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[var(--color-primary-lightest)]">
            {/* <FaArrowRightArrowLeft className="text-[var(--color-primary-darkest)] text-xl" /> */}
          </div>

          <p className="text-md text-[var(--color-gray-dark)]">
            Move candidate to <b>{targetCol}</b>?
          </p>
        </div>

        {/* Footer */}
        <div className="flex gap-5 w-full items-center justify-center ">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border"
            style={{
              borderColor: 'var(--color-gray-dark)',
              color: 'var(--color-gray-dark)',
            }}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl text-white"
            style={{
              backgroundColor: 'var(--color-primary-darkest)',
            }}
          >
            Move
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveConfirmModal;
