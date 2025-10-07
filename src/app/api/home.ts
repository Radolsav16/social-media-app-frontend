import api from "@/lib/axios"

export const fetchHomePage = async () => {
    try {
        const res = await api.get('/home')
        return await res.data;
    } catch (error) {
        console.log(error)
    }
}
