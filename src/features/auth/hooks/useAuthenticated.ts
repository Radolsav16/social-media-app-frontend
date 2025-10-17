import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUserData } from "../slice/authSlice";
import { getAcessToken ,getUserId} from "@/utils/auth";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
const useAuthenticated = () => {
    const accessToken = getAcessToken()
    const userId = getUserId();
    const dispatch = useAppDispatch()
    const router = useRouter()
    useEffect(() => {
        if(accessToken && userId){
          const decoded = jwtDecode(accessToken);
          if(Number(decoded.exp) * 1000 > Date.now()){
               dispatch(fetchUserData({accessToken,userId}))
          }
       
        }else{
          router.push('/sign-in')
        }
    },[accessToken,userId])
};

export default useAuthenticated;
