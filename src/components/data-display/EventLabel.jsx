export default function EventLabel({
  title,
  time,
  color
}) {
  return (
    <div
      className={`${color} text-white px-2 py-1 rounded text-[10px] flex justify-between`}
    >
      <span>{title}</span>
      <span>{time}</span>
    </div>
  );
}