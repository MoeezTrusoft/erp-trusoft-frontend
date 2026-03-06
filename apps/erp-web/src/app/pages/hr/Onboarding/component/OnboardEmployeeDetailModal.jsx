import { FiX } from "react-icons/fi";

export default function OnboardEmployeeDetailModal({ isOpen, onClose, employee }) {
  if (!isOpen || !employee) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 w-[900px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50">

        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Onboard Employee Details
          </h2>

          <button onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Employee Info */}
          <div className="grid grid-cols-3 gap-4">

            <Info label="Name" value={employee.name} />
            <Info label="Role" value={employee.role} />
            <Info label="Department" value={employee.department} />
            <Info label="Start Date" value={employee.startDate} />
            <Info label="Employment Type" value={employee.employment} />

          </div>

          {/* Checklist */}
          <Section title="Check list">
            <Item text="Employee Profile created" />
            <Item text="Employee ID Generated" />
            <Item text="Position Assigned" />
            <Item text="Department Linked" />
            <Item text="Reporting Manager Assigned" />
            <Item text="Employee Lifecycle Started" />
          </Section>

          {/* Personal Info */}
          <Section title="Personal Info">
            <Item text="Personal info" />
            <Item text="Document Uploaded" />
            <Item text="IT Access Setup" />
            <Item text="Orientation" />
          </Section>

        </div>
      </div>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="border rounded-md p-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-3">{title}</h3>
      <div className="grid grid-cols-3 gap-3">
        {children}
      </div>
    </div>
  );
}

function Item({ text }) {
  return (
    <div className="border rounded-md p-3 text-sm">
      {text}
    </div>
  );
}