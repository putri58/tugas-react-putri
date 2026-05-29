export default function Alert({
  message
}) {
  return (
    <div className="bg-green-100 text-green-700 px-4 py-3 rounded-xl">
      {message}
    </div>
  );
}