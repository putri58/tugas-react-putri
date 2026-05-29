import { FaBell } from "react-icons/fa";
import SearchInput from "../components/form/SearchInput";
import UserProfile from "../components/UserProfile";

export default function Header() {
  return (
    <div className="bg-white rounded-3xl p-5 flex justify-between items-center shadow-sm">

      <SearchInput />

      <div className="flex items-center gap-5">

        <FaBell className="text-gray-400 text-xl" />

        <UserProfile />

      </div>

    </div>
  );
}