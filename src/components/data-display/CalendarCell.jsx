import EventLabel from "./EventLabel";

export default function CalendarCell({
  item,
  darkMode
}) {
  return (
    <div
      className={`min-h-[140px] p-2 border-r border-b relative ${
        darkMode
          ? "bg-[#242424] border-gray-800"
          : "bg-white border-gray-100"
      }`}
    >
      <span className="absolute top-3 right-4 text-sm font-bold">
        {item.date}
      </span>

      <div className="mt-8 space-y-1">

        {item.events?.map((ev, i) => (
          <EventLabel
            key={i}
            title={ev.title}
            time={ev.time}
            color={ev.color}
          />
        ))}

      </div>
    </div>
  );
}