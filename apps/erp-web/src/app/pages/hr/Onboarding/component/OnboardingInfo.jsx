const OnboardingInfo = ({ candidate }) => {
  return (
    <div className="grid grid-cols-3 text-sm">

      <div>
        <p className="text-[#66e3db]">Department</p>
        <p className="text-gray-200">{candidate.department}</p>
      </div>

      <div className="border-l border-gray-500 pl-4">
        <p className="text-[#66e3db]">Start Date</p>
        <p className="text-gray-200">{candidate.startDate}</p>
      </div>

      <div className="border-l border-gray-500 pl-4">
        <p className="text-[#66e3db]">Employment</p>
        <p className="text-gray-200">{candidate.employment}</p>
      </div>

    </div>
  );
};

export default OnboardingInfo;