import OnboardingInfo from "./OnboardingInfo";
import ViewDetailButton from "./ViewDetailButton";

const OnboardingCard = ({ candidate }) => {
  return (
    <div className="bg-[#3b3b3b] rounded-lg p-5 text-white shadow-md w-[100%]">

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-[#66e3db] font-semibold text-lg">
          {candidate.name}
        </h3>
        <p className="text-[16px] text-gray-300">{candidate.role}</p>
      </div>

      <div className="border-t border-gray-500 my-3"></div>

      <OnboardingInfo candidate={candidate} />

      <div className="flex justify-end mt-4">
        <ViewDetailButton />
      </div>
    </div>
  );
};

export default OnboardingCard; 