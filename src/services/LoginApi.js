import axios from 'axios'

const API_URL = "https://jneeobixmqsidrqpjebu.supabase.co/rest/v1/regis"
const API_KEY = "sb_publishable_Cvh5K2mlvadYq3yuD__82Q_5St9wfyG" 

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const loginAPI = {
    async loginUser(username, password) {
        // LOGIC: Cari di tabel 'regis' yang username == input AND password == input
        // Supabase REST API menggunakan filter '?kolom=eq.nilai'
        const response = await axios.get(
            `${API_URL}?username=eq.${username}&password=eq.${password}`, 
            { headers }
        )
        
        // Supabase akan mengembalikan Array:
        // Jika COCOK -> berisi objek data user [ {username: "...", ...} ]
        // Jika SALAH -> berupa array kosong [ ]
        return response.data 
    }
}