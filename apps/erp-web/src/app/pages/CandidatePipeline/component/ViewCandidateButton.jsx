
const ViewCandidateButton = ({ onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // ✅ prevent drag trigger
        onClick();
      }}
      className="p-1 rounded hover:bg-white/10 transition"
      style={{ cursor: "pointer" }}
    >
      {/* <FiEye size={18} /> */}
    </button>
  );
};

export default ViewCandidateButton;