import { useAppDispatch } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { signInUser } from "../slice/authSlice";

const useSignIn = () => {
   const router = useRouter();
   const signInSchema = z.object({
    email:z.string().email('Please enter valid email!'),
    password:z.string().min(8,'Password should be at least 8 characters')
   })
   type SignInFormData = z.infer<typeof signInSchema>
   const dispatch = useAppDispatch();
   const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<SignInFormData>({
    resolver:zodResolver(signInSchema)
   })
   const onSubmit = async (data) => {
    try {
       const result = await dispatch(signInUser(data));
       if(result.payload) {
        router.push('/')
       }
    
    } catch (error) {
      router.push('/sign-in')
    }
   
   }

  return {register,handleSubmit,errors,isSubmitting,onSubmit}

}

export default useSignIn;