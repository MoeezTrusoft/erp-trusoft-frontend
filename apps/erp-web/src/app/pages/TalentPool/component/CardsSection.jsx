export default function CardsSection({ children }) {
  return (
    <div
      className="h-[calc(100vh-15rem)] overflow-y-auto p-6"
      style={{ backgroundColor: "var(--color-primary-lightest)" }}
    >
      <div className="max-w-full mx-auto">
        {children}
      </div>
    </div>
  );
}