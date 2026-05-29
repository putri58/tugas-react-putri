export default function AppointmentSection({
  title,
  children
}) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100">
      
      <h2 className="text-gray-400 text-xs font-semibold uppercase mb-5">
        {title}
      </h2>

      {children}

    </div>
  );
}