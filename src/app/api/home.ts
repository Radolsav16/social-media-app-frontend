export const fetchHomePage = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/ui')
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}
