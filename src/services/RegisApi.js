import axios from 'axios'

const API_URL = "https://jneeobixmqsidrqpjebu.supabase.co/rest/v1/regis"
const API_KEY = "sb_publishable_Cvh5K2mlvadYq3yuD__82Q_5St9wfyG" 

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation" 
}

export const regisAPI = {
    async registerUser(userData) {
        const response = await axios.post(API_URL, userData, { headers })
        return response.data
    }
}