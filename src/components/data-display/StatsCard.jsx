import Card from "./Card";

export default function StatsCard({
  title,
  value,
  subtitle
}) {
  return (
    <Card>
      <p className="text-gray-400 text-xs uppercase">
        {title}
      </p>

      <h1 className="text-3xl font-bold mt-4">
        {value}
      </h1>

      <p className="text-sm text-gray-400 mt-2">
        {subtitle}
      </p>
    </Card>
  );
}