export default function ThemeToggle({
  darkMode,
  setDarkMode
}) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`w-12 h-6 rounded-full relative transition-colors ${
        darkMode ? "bg-rose-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
          darkMode ? "right-1" : "left-1"
        }`}
      />
    </button>
  );
}