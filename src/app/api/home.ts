import { BASE_URL } from "../constants"

export const fetchHomePage = async () => {
    try {
        const res = await fetch(BASE_URL + '/home',{
        cache:'no-cache'
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}
