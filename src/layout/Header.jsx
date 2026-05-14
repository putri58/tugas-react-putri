import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white rounded-3xl p-5 flex justify-between items-center shadow-sm">

      <input
        type="text"
        placeholder="Search pet medical records..."
        className="bg-[#f4f7fe] px-5 py-3 rounded-2xl w-[400px] outline-none"
      />

      <div className="flex items-center gap-5">

        <FaBell className="text-gray-400 text-xl" />

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-gray-300"></div>

          <div>
            <h1 className="font-bold">
              Dr. Putree
            </h1>

            <p className="text-sm text-gray-400">
              Veterinary Doctor
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}