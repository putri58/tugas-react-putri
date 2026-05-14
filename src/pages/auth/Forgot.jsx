export default function Forgot() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-center mb-8">
        Forgot Password
      </h1>

      <form className="space-y-5">

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-[#f4f7fe] p-4 rounded-2xl"
        />

        <button className="w-full bg-[#5b5ce2] text-white p-4 rounded-2xl">
          Send Reset Link
        </button>

      </form>

    </div>
  );
}