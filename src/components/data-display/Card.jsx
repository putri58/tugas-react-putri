export default function Card({
  children,
  className = ""
}) {
  return (
    <div
      className={`bg-white rounded-3xl p-5 border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}