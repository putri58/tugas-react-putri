import axios from 'axios'

const API_URL = "https://jneeobixmqsidrqpjebu.supabase.co/rest/v1/regis"
const API_KEY = "sb_publishable_Cvh5K2mlvadYq3yuD__82Q_5St9wfyG" 

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const loginAPI = {
    /**
     * Login dengan username atau name (case-insensitive).
     * Supabase REST: filter username=eq.X&password=eq.Y
     * Jika tidak ketemu by username, coba by name.
     */
    async loginUser(usernameInput, password) {
        // Encode karakter khusus seperti @ dan # agar URL tidak rusak
        const encodedUsername = encodeURIComponent(usernameInput);
        const encodedPassword = encodeURIComponent(password);

        // Coba cari by username (exact match)
        const response = await axios.get(
            `${API_URL}?username=eq.${encodedUsername}&password=eq.${encodedPassword}`,
            { headers }
        )

        if (response.data.length > 0) {
            return response.data
        }

        // Jika tidak ketemu, coba cari by name (untuk kemudahan login)
        const byName = await axios.get(
            `${API_URL}?name=ilike.${encodedUsername}&password=eq.${encodedPassword}`,
            { headers }
        )

        return byName.data
    }
}
