const STATUS_STYLES = {
  due: 'bg-red-500 text-white',
  Rejected: 'bg-red-500 text-white',
  Hired: 'bg-green-500 text-white',
  Scheduled: 'bg-blue-400 text-black',
  Offered: 'bg-yellow-400 text-black',
};

const CandidateCard = ({ name, role, experience, status, time }) => {
  const badgeClass = STATUS_STYLES[status] ?? 'bg-teal-400 text-black';

  return (
    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700 shadow-md">
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <p className="font-semibold text-sm text-white leading-tight truncate">{name}</p>
          <p className="text-xs text-gray-300 mt-0.5">{role}</p>
          <p className="text-xs text-gray-400 mt-0.5">{experience}</p>
        </div>
        <span className={`${badgeClass} text-xs px-2 py-0.5 rounded flex-shrink-0 font-medium`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-2">{time ?? '2 minutes ago'}</p>
    </div>
  );
};

export default CandidateCard;