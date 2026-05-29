export default function Avatar({ name }) {
  return (
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
      {name.charAt(0)}
    </div>
  );
}