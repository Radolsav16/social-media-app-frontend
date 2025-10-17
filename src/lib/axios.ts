import { getAcessToken } from "@/utils/auth";
import axios from "axios";
import { toast } from "react-toastify";
console.log(process.env.NEXT_PUBLIC_BASE_URL)
const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
})

api.interceptors.response.use((request)=>{
    const token = getAcessToken();
    if(token) request.headers.Authorization = token;
    return request; 
})

api.interceptors.response.use((response) => {
    if(response.config.showSuccessToast && response.data.message){
        toast.success(response.data.message);
    }
    return response;
},
(error)=>{
    const message = error.response.data.message || error.message;
    if (error.response && error.response.status >= 400) {
      toast.error(message);
    }

    return Promise.reject(error)

})

export default api;