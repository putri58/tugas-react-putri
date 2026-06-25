import axios from 'axios'

const API_URL = "https://jneeobixmqsidrqpjebu.supabase.co/rest/v1/regis"
const API_KEY = "sb_publishable_Cvh5K2mlvadYq3yuD__82Q_5St9wfyG" 

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const usersAPI = {
    async getAllUsers() {
        const response = await axios.get(`${API_URL}?select=*&order=id.desc`, { headers })
        return response.data
    },

    // TAMBAHKAN FUNGSI HAPUS DATA USER DI SINI (Metode DELETE)
    async deleteUser(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}