export default function Table({
  headers,
  children
}) {
  return (
    <table className="w-full border">

      <thead className="bg-gray-100">

        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="border px-4 py-2 text-left"
            >
              {header}
            </th>
          ))}
        </tr>

      </thead>

      <tbody>
        {children}
      </tbody>

    </table>
  );
}