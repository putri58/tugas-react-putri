export default function Register() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-center mb-8">
        Create Account
      </h1>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Email"
          className="w-full bg-[#f4f7fe] p-4 rounded-2xl"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#f4f7fe] p-4 rounded-2xl"
        />

        <button className="w-full bg-[#5b5ce2] text-white p-4 rounded-2xl">
          Register
        </button>

      </form>

    </div>
  );
}