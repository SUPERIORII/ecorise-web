import axios from "axios"


const baseUrl =axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
})

export default baseUrl