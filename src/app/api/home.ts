import { BASE_URL } from "../constants"

export const fetchHomePage = async () => {
    const res = await fetch(BASE_URL + '/home',{
        cache:'no-cache'
    })
    return await res.json()
}
