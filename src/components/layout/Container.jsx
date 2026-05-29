export default function Container({
  children,
  className = ""
}) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}