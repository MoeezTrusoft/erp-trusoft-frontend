
const CandidateDrawer = ({ isOpen, onClose, candidate }) => {
  return (
    <div
      className={`absolute top-0 right-0 h-full w-[30%] bg-white rounded-l-2xl shadow-2xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {candidate && (
        <div className="p-4 h-full overflow-y-auto flex flex-col gap-6">
          <div className="flex justify-end">
            {/* <FiX size={20} className="cursor-pointer" onClick={onClose} /> */}
          </div>

          {/* Profile Image */}
          <div className="flex justify-center ">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <div className="text-center ">
            <h2 className="text-xl font-semibold text-[var(--color-gray-dark)]">
              {candidate.name}
            </h2>
            <p className="text-[var(--color-gray-light)]">{candidate.role}</p>
          </div>

          {/* Info Cards */}
          <div className=" space-y-4">
            <div className="p-2 rounded-lg bg-[var(--color-primary-lightest)] border border-[var(--color-primary-dark)]">
              <p className="text-sm font-medium text-[var(--color-gray-dark)]">Applied for</p>
              <p className="text-sm text-[var(--color-gray-dark)]">UI Design</p>
            </div>

            <div className="p-2 rounded-lg bg-[var(--color-primary-lightest)] border border-[var(--color-primary-dark)]">
              <p className="text-sm font-medium text-[var(--color-gray-dark)]">Experience</p>
              <p className="text-sm text-[var(--color-gray-dark)]">3 years</p>
            </div>

            <div className="p-2 rounded-lg bg-[var(--color-primary-lightest)] border border-[var(--color-primary-dark)]">
              <p className="text-sm font-medium text-[var(--color-gray-dark)]">Current Stage</p>
              <p className="text-sm text-[var(--color-gray-dark)] font-medium">Interview</p>
            </div>
          </div>

          {/* Documents */}
          <div className="w-full flex justify-start flex-col gap-2">
            <p className="text-sm font-medium text-[var(--color-gray-dark)]">Document</p>

            <div className="flex justify-between items-center w-full">
              <div className="flex w-[48%] items-center gap-3 bg-[var(--color-primary-lightest)] border border-[var(--color-primary-dark)] py-2 px-1 rounded-lg">
                {/* <FiFileText className="text-[var(--color-primary-dark)]" /> */}
                <span className="text-sm text-[var(--color-gray-dark)] overflow-hidden whitespace-nowrap w-[80%]  text-ellipsis">
                  Resume.pdf
                </span>
              </div>

              <div className="flex w-[48%] items-center gap-1 bg-[var(--color-primary-lightest)] border border-[var(--color-primary-dark)] py-2 px-1 rounded-lg">
                {/* <FiFileText className="text-[var(--color-primary-dark)]" /> */}
                <span className="text-sm text-[var(--color-gray-dark)] overflow-hidden whitespace-nowrap w-[80%]  text-ellipsis">
                  Cover-letter.doc
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-start flex-col items-center space-y-4">
            {/* Schedule */}
            <button className="w-full flex justify-center items-center py-3 rounded-full text-white bg-[var(--color-primary-darkest)] border border-[var(--color-black)] hover:bg-[var(--color-primary-dark)] transition">
              Schedule Interview
            </button>

            {/* Reject */}
            <button className="w-full flex justify-center items-center py-3 rounded-full text-white bg-[var(--color-priority-high)] border border-[var(--color-black)] hover:opacity-90 transition">
              Reject Candidate
            </button>

            {/* View Profile */}
            <button className="w-full flex justify-center items-center py-3 rounded-full border border-[var(--color-gray-light)] text-[var(--color-gray-dark)] bg-[var(--color-white)] hover:bg-[var(--color-gray-lightest)] transition">
              View Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateDrawer;
