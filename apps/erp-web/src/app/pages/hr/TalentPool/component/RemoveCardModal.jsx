export default function RemoveCardModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      
      {/* Modal Box */}
      <div className="bg-[var(--color-gray-lightest)] w-[30%] rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--color-gray-light)]">
          <h2 className="text-lg text-[var(--color-primary-darkest)]">
            Move Card
          </h2>

          <button 
            onClick={onClose} 
            className="text-[var(--color-black)] text-2xl hover:opacity-70"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-[var(--color-gray-light)]">
          
          {/* Red Icon Circle */}
          <div className="w-[46px] h-[46px] bg-[var(--color-priority-high)] rounded-full flex items-center justify-center shrink-0">
            <span className="text-[var(--color-white)] text-[33px] leading-none">
              ×
            </span>
          </div>

          <p className="text-[var(--color-gray-dark)] text-lg leading-relaxed">
            Remove from Talent Pool? This candidate will no longer appear in future searches
          </p>
        </div>

        {/* Footer */}
        <div className="flex gap-5 w-full items-center justify-center px-6 py-4">
          
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="w-full py-2 border border-[var(--color-black)] text-[var(--color-black)] rounded-2xl hover:bg-[var(--color-gray-lightest)] transition"
          >
            Cancel
          </button>

          {/* Remove Button */}
          <button
            onClick={onConfirm}
            className="w-full py-2 bg-[var(--color-priority-high)] text-[var(--color-white)] rounded-2xl hover:opacity-90 transition"
          >
            Remove
          </button>

        </div>
      </div>
    </div>
  );
}