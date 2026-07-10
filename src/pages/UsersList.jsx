import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield, FaUser, FaSync, FaSearch, FaPlus, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { usersAPI } from "../services/UserApi";
import { regisAPI } from "../services/RegisApi";

export default function UsersList() {
  const [users, setUsers]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState("");
  const [success, setSuccess]     = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch]       = useState("");

  // ── State panel tambah admin ─────────────────────────────
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [addLoading, setAddLoading]     = useState(false);
  const [addError, setAddError]         = useState("");
  const [showPass, setShowPass]         = useState(false);
  const [adminForm, setAdminForm]       = useState({ name: "", username: "", password: "" });

  // ── Fetch dari Supabase ──────────────────────────────────
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await usersAPI.getAllUsers();
      setUsers(data);
    } catch (err) {
      setError("Gagal memuat data user: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Hapus user ───────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus user ini?")) return;
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await usersAPI.deleteUser(id);
      setSuccess("User berhasil dihapus!");
      fetchUsers();
    } catch (err) {
      setError(`Gagal menghapus: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ── Tambah admin baru ────────────────────────────────────
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setAddError("");
    if (adminForm.password.length < 6) {
      setAddError("Password minimal 6 karakter.");
      return;
    }
    try {
      setAddLoading(true);
      await regisAPI.registerUser({
        name:     adminForm.name,
        username: adminForm.username,
        password: adminForm.password,
        role:     "admin",
      });
      setSuccess(`Admin "${adminForm.username}" berhasil ditambahkan!`);
      setAdminForm({ name: "", username: "", password: "" });
      setShowAddAdmin(false);
      fetchUsers();
      setTimeout(() => setSuccess(""), 4000);
    } catch (err) {
      setAddError(err.response?.data?.message || err.message);
    } finally {
      setAddLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    setIsMounted(true);
  }, []);

  // ── Filter lokal ─────────────────────────────────────────
  const filtered = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      (u.username || "").toLowerCase().includes(q) ||
      (u.name || "").toLowerCase().includes(q) ||
      (u.role || "").toLowerCase().includes(q)
    );
  });

  const adminCount = users.filter((u) => u.role === "admin").length;
  const userCount  = users.filter((u) => u.role !== "admin").length;

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* ── Header ── */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen User</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Data user dari Supabase — pendaftar baru via halaman Guest langsung muncul di sini.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setShowAddAdmin(!showAddAdmin); setAddError(""); }}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer"
          >
            <FaPlus size={12} /> Tambah Admin
          </button>
          <button
            onClick={fetchUsers}
            disabled={loading}
            className="flex items-center gap-2 bg-[#5b5ce2] hover:bg-[#4a4bc7] text-white px-4 py-2 rounded-xl text-sm font-semibold transition disabled:opacity-50 cursor-pointer"
          >
            <FaSync size={12} className={loading ? "animate-spin" : ""} />
            {loading ? "Memuat..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* ── Panel Tambah Admin ── */}
      {showAddAdmin && (
        <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaUserShield className="text-emerald-600 text-xl" />
              <div>
                <h3 className="font-bold text-slate-800">Buat Akun Admin Baru</h3>
                <p className="text-xs text-slate-400">Akun ini akan punya akses penuh ke dashboard admin</p>
              </div>
            </div>
            <button onClick={() => setShowAddAdmin(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
              <FaTimes />
            </button>
          </div>

          {addError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-4">
              {addError}
            </div>
          )}

          <form onSubmit={handleAddAdmin} className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Nama</label>
              <input
                type="text"
                required
                value={adminForm.name}
                onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                placeholder="Nama admin"
                disabled={addLoading}
                className="w-full bg-[#f4f7fe] p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Username</label>
              <input
                type="text"
                required
                value={adminForm.username}
                onChange={(e) => setAdminForm({ ...adminForm, username: e.target.value })}
                placeholder="Username login"
                disabled={addLoading}
                className="w-full bg-[#f4f7fe] p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={adminForm.password}
                  onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                  placeholder="Min. 6 karakter"
                  disabled={addLoading}
                  className="w-full bg-[#f4f7fe] p-3 pr-10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
                  {showPass ? <FaEyeSlash size={13} /> : <FaEye size={13} />}
                </button>
              </div>
            </div>
            <div className="sm:col-span-3 flex justify-end gap-3 pt-2">
              <button type="button" onClick={() => setShowAddAdmin(false)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-sm font-semibold transition cursor-pointer">
                Batal
              </button>
              <button type="submit" disabled={addLoading}
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition disabled:opacity-50 cursor-pointer">
                <FaUserShield size={12} />
                {addLoading ? "Membuat..." : "Buat Akun Admin"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── Alerts ── */}
      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-xl">{error}</div>
      )}
      {success && (
        <div className="p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-xl">{success}</div>
      )}

      {/* ── Summary Cards ── */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-400 font-bold uppercase">Total User</p>
          <p className="text-3xl font-extrabold text-slate-800 mt-1">{users.length}</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
          <p className="text-xs text-indigo-600 font-bold uppercase flex items-center gap-1">
            <FaUser size={10} /> Role User
          </p>
          <p className="text-3xl font-extrabold text-indigo-700 mt-1">{userCount}</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
          <p className="text-xs text-amber-600 font-bold uppercase flex items-center gap-1">
            <FaUserShield size={10} /> Role Admin
          </p>
          <p className="text-3xl font-extrabold text-amber-700 mt-1">{adminCount}</p>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari username atau nama..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5ce2]/20 focus:border-[#5b5ce2]"
        />
      </div>

      {/* ── Tabel ── */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
        {loading && users.length === 0 ? (
          <div className="p-10 text-center text-gray-500 font-medium">
            Memuat data dari Supabase...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-gray-500 font-medium">
            {search ? `Tidak ada user yang cocok dengan "${search}".` : "Belum ada user terdaftar."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f4f7fe] text-gray-500 uppercase text-xs font-bold tracking-wider">
                  <th className="p-4 border-b">No</th>
                  <th className="p-4 border-b">ID</th>
                  <th className="p-4 border-b">Username</th>
                  <th className="p-4 border-b">Nama</th>
                  <th className="p-4 border-b">Role</th>
                  <th className="p-4 border-b">Password</th>
                  <th className="p-4 border-b">Terdaftar</th>
                  <th className="p-4 border-b text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                {filtered.map((user, index) => (
                  <tr
                    key={user.id || index}
                    className="hover:bg-gray-50/70 transition-colors"
                  >
                    {/* No */}
                    <td className="p-4 text-gray-400 text-xs font-medium">{index + 1}</td>

                    {/* ID */}
                    <td className="p-4 font-mono text-xs text-gray-400">{user.id || "-"}</td>

                    {/* Username + avatar */}
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#5b5ce2]/10 text-[#5b5ce2] flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                          {(user.username || "?")[0].toUpperCase()}
                        </div>
                        <span className="font-semibold text-gray-800">{user.username}</span>
                      </div>
                    </td>

                    {/* Nama */}
                    <td className="p-4 text-gray-700 font-medium">
                      {user.name || <span className="text-slate-300 italic text-xs">—</span>}
                    </td>

                    {/* Role */}
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                        user.role === "admin"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-indigo-100 text-indigo-700"
                      }`}>
                        {user.role === "admin"
                          ? <><FaUserShield size={10} /> Admin</>
                          : <><FaUser size={10} /> User</>
                        }
                      </span>
                    </td>

                    {/* Password */}
                    <td className="p-4 font-mono text-xs text-gray-400">
                      {user.password || "-"}
                    </td>

                    {/* Terdaftar */}
                    <td className="p-4 text-xs text-gray-400">
                      {user.created_at
                        ? new Date(user.created_at).toLocaleDateString("id-ID", {
                            day: "numeric", month: "short", year: "numeric",
                          })
                        : "-"}
                    </td>

                    {/* Aksi */}
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(user.id)}
                        disabled={loading}
                        className="p-2 inline-flex items-center justify-center rounded-xl hover:bg-red-50 text-red-400 hover:text-red-600 transition-all disabled:opacity-50 cursor-pointer"
                        title="Hapus User"
                      >
                        <AiFillDelete className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="text-xs text-slate-400 mt-4 text-center">
        Data dari tabel <code className="bg-slate-100 px-1 rounded">regis</code> Supabase.
        User yang daftar via halaman Guest otomatis muncul di sini.
      </p>
    </div>
  );
}
