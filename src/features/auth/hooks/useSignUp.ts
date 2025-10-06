import { useAppSelector } from "@/store/hooks"
import { authSelectors } from "../slice/authSlice"

export const useSignUp = () => {
    const isAuthenticated = useAppSelector(authSelectors.isAuthenticated)
    console.log(isAuthenticated,'isAuthenticated')

    return {isAuthenticated}
}