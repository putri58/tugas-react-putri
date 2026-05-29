import Avatar from "../basic/Avatar";

export default function AppointmentCard({
  title,
  date
}) {
  return (
    <div className="flex items-center gap-3">

      <Avatar name={title} />

      <div>
        <h1 className="font-bold text-sm">
          {title}
        </h1>

        <p className="text-xs text-gray-400">
          {date}
        </p>
      </div>

    </div>
  );
}