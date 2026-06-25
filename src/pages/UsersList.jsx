import { useEffect, useState } from "react";
// Menggunakan react-icons untuk tombol hapus
import { AiFillDelete } from "react-icons/ai";
// JALUR SUDAH DISESUAIKAN: Mengarah tepat ke ../services/UserApi
import { usersAPI } from "../services/UserApi";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // 1. Fungsi untuk mengambil data dari Supabase
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await usersAPI.getAllUsers();
      setUsers(data);
    } catch (err) {
      setError("Gagal memuat data user: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Fungsi untuk handle Aksi Hapus Data User
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Panggil API delete ke Supabase
      await usersAPI.deleteUser(id);

      setSuccess("User berhasil dihapus!");
      
      // Refresh data tabel secara otomatis
      fetchUsers();
    } catch (err) {
      setError(`Terjadi kesalahan saat menghapus: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    setIsMounted(true);
  }, []);

  return (
    <div className={`transition-all duration-500 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Registered Users</h1>
        <button 
          onClick={fetchUsers}
          disabled={loading}
          className="bg-[#5b5ce2] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#4a4bc7] transition-all disabled:opacity-50"
        >
          {loading ? "Refreshing..." : "Refresh Data"}
        </button>
      </div>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-xl animate-pulse">{error}</div>
      )}

      {success && (
        <div className="p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-xl">{success}</div>
      )}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {loading && users.length === 0 ? (
          <div className="p-10 text-center text-gray-500 font-medium">Memuat data dari Supabase...</div>
        ) : users.length === 0 ? (
          <div className="p-10 text-center text-gray-500 font-medium">Belum ada user yang terdaftar.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f4f7fe] text-gray-600 uppercase text-xs font-semibold">
                  <th className="p-4 border-b">No</th>
                  <th className="p-4 border-b">ID User</th>
                  <th className="p-4 border-b">Username</th>
                  <th className="p-4 border-b">Password</th>
                  <th className="p-4 border-b text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                {users.map((user, index) => (
                  <tr key={user.id || index} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-4 font-medium text-gray-500">{index + 1}</td>
                    <td className="p-4 text-xs font-mono text-gray-400">{user.id || "-"}</td>
                    <td className="p-4 font-semibold text-gray-800">{user.username}</td>
                    <td className="p-4 text-xs font-mono text-gray-400">{user.password}</td>
                    
                    {/* TD AKSI DELETE */}
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(user.id)}
                        disabled={loading}
                        className="p-2 inline-flex items-center justify-center rounded-xl hover:bg-red-50 text-red-400 hover:text-red-600 transition-all disabled:opacity-50"
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
    </div>
  );
}