import Avatar from "./basic/Avatar";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-3">

      <Avatar name="Dr. Putree" />

      <div>
        <h1 className="font-bold">
          Dr. Putree
        </h1>

        <p className="text-sm text-gray-400">
          Veterinary Doctor
        </p>
      </div>

    </div>
  );
}