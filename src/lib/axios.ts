import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL:'http://localhost:3050/api/social-media-app',
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